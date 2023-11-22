import React, { FC, Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import Text from "../Text/Text";
import SearchInput from "../FormElements/Input/SearchInput";
import { DropdownContainer, DropdownList, DropdownListItem, DropdownTitle } from "./styles";
import { DropdownItem, DropdownProps, PlacementOptions } from "./types";
import { filterListByKeyword, getScrollableParent } from "./helpers";

const dropdownWrapperClasses = (placement: PlacementOptions): string =>
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

const fixPlacementMapping: Record<PlacementOptions, PlacementOptions> = {
  "bottom-start": "top-start",
  "bottom-end": "top-end",
  "top-start": "bottom-start",
  "top-end": "bottom-end",
  "end-top": "end-top",
};

const Dropdown: FC<DropdownProps> = ({
  list,
  children,
  placement = "bottom-start",
  onListItemSelect,
  isSearchable,
  textSize = "sm",
  fullWidth = false,
  fixPlacement = false,
  emptyStateText = "No match found",
  placeholderText = "Search",
  remainOpenOnSelect = false,
  onToggleList,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentPlacement, setCurrentPlacement] = useState(placement);
  const [filteredList, setFilteredList] = useState<DropdownItem[]>(() => list);
  const shouldFocus = Boolean(isSearchable);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLDivElement | null>(null);
  const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);

  useClickAway(() => {
    setIsListOpen(false);
  }, wrapperRef);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    onToggleList && onToggleList(isListOpen);
  }, [isListOpen]);

  const toggleList = (): void => {
    // We want to reset the dropdown list every time it opens
    if (!isListOpen) {
      setFilteredList(list);
    }
    setIsListOpen((prevState) => !prevState);
  };

  const fixDropdownPlacement = (): void => {
    if (dropdownButtonRef.current && dropdownWrapperRef.current && wrapperRef.current) {
      const scrollableParent = getScrollableParent(wrapperRef.current.parentNode);
      const dropdownMenuHeight = dropdownWrapperRef.current.getBoundingClientRect().height;
      const fixedPlacement = fixPlacementMapping[placement];

      switch (placement) {
        // all bottom placements
        case "bottom-end":
        case "bottom-start": {
          const dropdownButtonBottom = dropdownButtonRef.current.getBoundingClientRect().bottom;

          // check if there is space bellow in the window
          if (!scrollableParent) {
            const spaceBelow = window.innerHeight - dropdownButtonBottom;
            setCurrentPlacement(spaceBelow < dropdownMenuHeight ? fixedPlacement : placement);
            break;
          }

          // check if there is space bellow in the scrollable parent
          if (scrollableParent instanceof HTMLElement) {
            const spaceBelow =
              scrollableParent.clientHeight -
              (dropdownButtonBottom - scrollableParent.getBoundingClientRect().top);

            setCurrentPlacement(spaceBelow < dropdownMenuHeight ? fixedPlacement : placement);
          }
          break;
        }
        // all top placements
        default: {
          const dropdownButtonTop = dropdownButtonRef.current.getBoundingClientRect().top;

          // check if there is space above in the window
          if (!scrollableParent) {
            setCurrentPlacement(
              dropdownButtonTop < dropdownMenuHeight ? fixedPlacement : placement,
            );
            break;
          }

          // check if there is space above in the scrollable parent
          if (scrollableParent instanceof HTMLElement) {
            const spaceAbove =
              dropdownButtonTop -
              scrollableParent.getBoundingClientRect().top -
              scrollableParent.scrollTop;

            setCurrentPlacement(spaceAbove < dropdownMenuHeight ? fixedPlacement : placement);
          }
          break;
        }
      }
    }
  };

  useLayoutEffect(() => {
    if (isListOpen) {
      fixPlacement && fixDropdownPlacement();
    }
  }, [isListOpen]);

  const handleListItemSelect = (item: DropdownItem): void => {
    if (isListOpen) {
      onListItemSelect && onListItemSelect(item);
      !remainOpenOnSelect && setIsListOpen(false);
    }
  };

  const renderItemsRecursively = (items: DropdownItem[], level = 0): JSX.Element[] => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <Fragment key={`${index}-${item.value}`}>
            <li css={DropdownTitle({ level, isSearchable: Boolean(isSearchable) })}>
              {typeof item.label === "string" ? (
                <Text fontSize={textSize} weight="700">
                  {item.label}
                </Text>
              ) : (
                item.label
              )}
            </li>
            {renderItemsRecursively(item.items, level + 1)}
          </Fragment>
        );
      }

      return (
        <li
          className={dropdownItemClasses(item)}
          key={`item-${index}-${item.value}`}
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
      <div className="dropdown-button" ref={dropdownButtonRef} onClick={toggleList}>
        {children}
      </div>

      {isListOpen && (
        <div className={dropdownWrapperClasses(currentPlacement)} ref={dropdownWrapperRef}>
          {isSearchable && (
            <SearchInput
              placeholder={placeholderText}
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
                  {emptyStateText}
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
