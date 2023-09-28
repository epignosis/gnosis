import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import Text from "../Text/Text";
import SearchInput from "../FormElements/Input/SearchInput";
import { DropdownContainer, DropdownList, DropdownListItem, DropdownTitle } from "./styles";
import { DropdownItem, DropdownProps } from "./types";
import { filterListByKeyword } from "./helpers";

const dropdownWrapperClasses = (placement: DropdownProps["placement"]): string =>
  classNames({
    "dropdown-wrapper": true,
    "bottom-start": placement === "bottom-start",
    "bottom-end": placement === "bottom-end",
    "top-start": placement === "top-start",
    "top-end": placement === "top-end",
    "end-top": placement === "end-top",
  });

const dropdownItemClasses = (item: DropdownItem): string =>
  classNames({
    "dropdown-list-item": true,
    [`${item.value}`]: true,
    [`${item.className}`]: Boolean(item.className),
  });

const Dropdown: FC<DropdownProps> = ({
  list,
  children,
  placement = "bottom-start",
  onListItemSelect,
  isSearchable,
  textSize = "sm",
  fullWidth = false,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [filteredList, setFilteredList] = useState<DropdownItem[]>(() => list);
  const shouldFocus = Boolean(isSearchable);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useClickAway(() => {
    setIsListOpen(false);
  }, wrapperRef);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const toggleList = (): void => {
    // We want to reset the dropdown list every time it opens
    if (!isListOpen) {
      setFilteredList(list);
    }
    setIsListOpen((prevState) => !prevState);
  };

  const handleListItemSelect = (item: DropdownItem): void => {
    if (isListOpen) {
      onListItemSelect && onListItemSelect(item);
      setIsListOpen(false);
    }
  };

  const renderItemsRecursively = (items: DropdownItem[], level = 0): JSX.Element[] => {
    return items.map((item) => {
      if (item.items) {
        return (
          <Fragment key={item.label}>
            <li css={DropdownTitle({ level, isSearchable: Boolean(isSearchable) })}>
              <Text fontSize={textSize} weight="700">
                {item.label}
              </Text>
            </li>
            {renderItemsRecursively(item.items, level + 1)}
          </Fragment>
        );
      }

      return (
        <li
          className={dropdownItemClasses(item)}
          key={`item ${item.label}`}
          onClick={(): void => handleListItemSelect(item)}
          css={(theme): SerializedStyles =>
            DropdownListItem(theme, { isSearchable: Boolean(isSearchable), level })
          }
        >
          {item?.icon}
          <Text fontSize={textSize}>{item.label}</Text>
        </li>
      );
    });
  };

  const handleInputChanged = (keyword: string): void => {
    if (!keyword) setFilteredList(list);
    setFilteredList(filterListByKeyword(list, keyword));
  };

  return (
    <div
      css={(theme): SerializedStyles =>
        DropdownContainer(theme, { isSearchable: Boolean(isSearchable), fullWidth })
      }
      className="dropdown"
      ref={wrapperRef}
    >
      <div className="dropdown-button" onClick={toggleList}>
        {children}
      </div>

      {isListOpen && (
        <div className={dropdownWrapperClasses(placement)}>
          {isSearchable && (
            <SearchInput
              placeholder="Search"
              onInputChanged={handleInputChanged}
              id="dropdown-search"
              delayBeforeSearch={300}
              autoFocus={shouldFocus}
            />
          )}

          <ul
            css={(theme): SerializedStyles =>
              DropdownList(theme, { fullWidth, isSearchable: Boolean(isSearchable) })
            }
            role="list"
            className="dropdown-list"
          >
            {filteredList?.length ? (
              renderItemsRecursively(filteredList)
            ) : (
              <li className="empty-state">
                <Text fontSize="xs" weight="400">
                  No match Found
                </Text>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
