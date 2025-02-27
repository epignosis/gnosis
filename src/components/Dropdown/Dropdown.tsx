import React, {
  FC,
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  MouseEvent,
  KeyboardEvent,
} from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import Text from "../Text/Text";
import SearchInput from "../FormElements/Input/SearchInput";
import DropdownListItem from "./components/DropdownListItem";
import DropdownListItemTitle from "./components/DropdownListItemTitle";
import { DropdownContainer, DropdownList } from "./styles";
import { DropdownItem, DropdownProps, PlacementOptions } from "./types";
import { filterListByKeyword, getScrollableParent } from "./helpers";

const dropdownWrapperClasses = (placement: PlacementOptions): string =>
  classNames("dropdown-wrapper", {
    "bottom-start": placement === "bottom-start",
    "bottom-end": placement === "bottom-end",
    "top-start": placement === "top-start",
    "top-end": placement === "top-end",
    "end-top": placement === "end-top",
  });

const dropdownButtonClasses = (isListOpen: boolean): string =>
  classNames("dropdown-button", {
    "is-active": isListOpen,
  });

const RTLMapping: Record<PlacementOptions, PlacementOptions> = {
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "end-top": "end-top",
};

const Dropdown: FC<DropdownProps> = ({
  list,
  children,
  placement = "bottom-start",
  onListItemSelect,
  isSearchable = false,
  textSize = "sm",
  fullWidth = false,
  prependContent,
  hover = false,
  fixPlacement = false,
  emptyStateText = "No match found",
  placeholderText = "Search",
  remainOpenOnSelect = false,
  onToggleList,
  disabled = false,
  ...rest
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentPlacement, setCurrentPlacement] = useState(placement);
  const [filteredList, setFilteredList] = useState<DropdownItem[]>(() => list);
  const shouldFocus = Boolean(isSearchable);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLDivElement | null>(null);
  const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);

  const dir = document.dir;
  const isRtl = dir === "rtl";
  let hoverTimeOut: NodeJS.Timeout;

  useClickAway(() => {
    setIsListOpen(false);
  }, wrapperRef);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    if (!disabled && onToggleList) {
      onToggleList(isListOpen);
    }
  }, [isListOpen]);

  useEffect(() => {
    if (disabled) {
      setIsListOpen(false);
      setFilteredList(list);
    }
  }, [disabled, list]);

  useLayoutEffect(() => {
    if (isListOpen) {
      fixPlacement && fixDropdownPlacement();
    }
  }, [isListOpen]);

  const fixDropdownPlacement = (): void => {
    if (!dropdownButtonRef.current || !dropdownWrapperRef.current || !wrapperRef.current) return;

    const dropdownRect = dropdownButtonRef.current.getBoundingClientRect();
    const scrollableParent = getScrollableParent(wrapperRef.current.parentNode);
    const dropdownMenuHeight = dropdownWrapperRef.current.getBoundingClientRect().height;
    const dropdownMenuWidth = dropdownWrapperRef.current.getBoundingClientRect().width;

    let vertical = "bottom";
    let horizontal = "start";

    // Each case works with the same logic, but for different placements
    // We check if there is enough space on the right or left and top or bottom
    // and then we decide where to place the dropdown list
    // The dropdown list will be placed on the opposite side if there is not enough space
    // If there is a scrollable parent, we calculate the space based on the parent's dimensions
    // If there is no scrollable parent, we calculate the space based on the window's dimensions
    switch (placement) {
      case "bottom-start": {
        const dropdownButtonBottom = dropdownRect.bottom;
        if (!scrollableParent) {
          const spaceOnTheRight = window.innerWidth - dropdownRect.right;
          const spaceBelow = window.innerHeight - dropdownButtonBottom;

          horizontal = spaceOnTheRight < dropdownMenuWidth ? "end" : "start";
          vertical = spaceBelow < dropdownMenuHeight ? "top" : "bottom";
        }

        if (scrollableParent instanceof HTMLElement) {
          const spaceOnTheRight = scrollableParent.clientWidth - dropdownRect.right;
          const spaceBelow =
            scrollableParent.clientHeight -
            (dropdownButtonBottom - scrollableParent.getBoundingClientRect().top);

          horizontal = spaceOnTheRight < dropdownMenuWidth ? "end" : "start";
          vertical = spaceBelow < dropdownMenuHeight ? "top" : "bottom";
        }
        break;
      }

      case "bottom-end": {
        const dropdownButtonBottom = dropdownRect.bottom;
        if (!scrollableParent) {
          const spaceOnTheLeft = dropdownRect.left;
          const spaceBelow = window.innerHeight - dropdownButtonBottom;

          horizontal = spaceOnTheLeft < dropdownMenuWidth ? "start" : "end";
          vertical = spaceBelow < dropdownMenuHeight ? "top" : "bottom";
        }

        if (scrollableParent instanceof HTMLElement) {
          const spaceOnTheLeft = dropdownRect.left;
          const spaceBelow =
            scrollableParent.clientHeight -
            (dropdownButtonBottom - scrollableParent.getBoundingClientRect().top);

          vertical = spaceBelow < dropdownMenuHeight ? "top" : "bottom";
          horizontal = spaceOnTheLeft < dropdownMenuWidth ? "start" : "end";
        }
        break;
      }

      case "top-start": {
        if (!scrollableParent) {
          const spaceAbove = dropdownRect.top;
          const spaceOnTheRight = window.innerWidth - dropdownRect.right;

          horizontal = spaceOnTheRight < dropdownMenuWidth ? "end" : "start";
          vertical = spaceAbove < dropdownMenuHeight ? "bottom" : "top";
        }
        if (scrollableParent instanceof HTMLElement) {
          const spaceAbove = dropdownRect.top - scrollableParent.getBoundingClientRect().top;
          const spaceOnTheRight = scrollableParent.clientWidth - dropdownRect.right;

          horizontal = spaceOnTheRight < dropdownMenuWidth ? "end" : "start";
          vertical = spaceAbove < dropdownMenuHeight ? "bottom" : "top";
        }
        break;
      }

      case "top-end": {
        if (!scrollableParent) {
          const spaceAbove = dropdownRect.top;
          const spaceOnTheLeft = dropdownRect.left;

          horizontal = spaceOnTheLeft < dropdownMenuWidth ? "start" : "end";
          vertical = spaceAbove < dropdownMenuHeight ? "bottom" : "top";
        }

        if (scrollableParent instanceof HTMLElement) {
          const spaceAbove = dropdownRect.top - scrollableParent.getBoundingClientRect().top;
          const spaceOnTheLeft = dropdownRect.left;

          horizontal = spaceOnTheLeft < dropdownMenuWidth ? "start" : "end";
          vertical = spaceAbove < dropdownMenuHeight ? "bottom" : "top";
        }
        break;
      }
    }

    let res = `${vertical}-${horizontal}` as PlacementOptions;

    if (isRtl) {
      res = RTLMapping[res];
    }

    setCurrentPlacement(res);
  };

  // Container methods

  const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter") {
      setIsListOpen((prevState) => !prevState);
    }
  };

  const handleOnMouseOver = () => {
    if (!hover) return;
    if (hoverTimeOut) clearTimeout(hoverTimeOut);

    setIsListOpen(true);
  };

  const handleOnMouseLeave = () => {
    if (!hover) return;

    // A small debounce to prevent dropdown from closing.
    hoverTimeOut = setTimeout(() => {
      setIsListOpen(false);
      // Force the list to be reset when the dropdown is closed
      setFilteredList(list);
    }, 100);
  };

  // List toggle element methods

  const toggleList = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    if (disabled || hover) return;

    // We want to reset the dropdown list every time it opens
    if (!isListOpen) {
      setFilteredList(list);
    }
    setIsListOpen((prevState) => !prevState);
  };

  // Search element methods

  const handleInputChanged = (keyword: string): void => {
    if (!keyword) setFilteredList(list);
    setFilteredList(filterListByKeyword(list, keyword));
  };

  // List item methods

  const handleOnClickListItem = (item: DropdownItem): void => {
    if (isListOpen && !disabled) {
      onListItemSelect && onListItemSelect(item);
      !remainOpenOnSelect && setIsListOpen(false);
    }
  };

  const handleOnKeyDownListItem = (e: KeyboardEvent<HTMLLIElement>, item: DropdownItem): void => {
    if (e.key === "Enter" || e.key === " ") {
      handleOnClickListItem(item);
    }
  };

  const renderItemsRecursively = (items: DropdownItem[], level = 0): JSX.Element[] => {
    return items.map((item, index) => {
      const { label } = item;

      if (item.items) {
        return (
          <Fragment key={`${index}-${item.value}`}>
            <DropdownListItemTitle
              label={label}
              level={level}
              isSearchable={isSearchable}
              textSize={textSize}
            />
            {renderItemsRecursively(item.items, level + 1)}
          </Fragment>
        );
      }

      return (
        <DropdownListItem
          key={`item-${index}-${item.value}`}
          index={index}
          item={item}
          isSearchable={isSearchable}
          level={level}
          textSize={textSize}
          onClick={handleOnClickListItem}
          onKeyDown={handleOnKeyDownListItem}
        />
      );
    });
  };

  return (
    <div
      css={(theme): SerializedStyles =>
        DropdownContainer(theme, { isSearchable: Boolean(isSearchable), fullWidth })
      }
      className="dropdown"
      ref={wrapperRef}
      tabIndex={0}
      onKeyDown={handleOnKeyDown}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      {...rest}
    >
      <div
        className={dropdownButtonClasses(isListOpen)}
        ref={dropdownButtonRef}
        onClick={toggleList}
      >
        {children}
      </div>

      {isListOpen && (
        <div
          className={dropdownWrapperClasses(fixPlacement ? currentPlacement : placement)}
          ref={dropdownWrapperRef}
        >
          {prependContent}

          {isSearchable && (
            <SearchInput
              id="dropdown-search"
              placeholder={placeholderText}
              delayBeforeSearch={300}
              autoFocus={shouldFocus}
              disabled={disabled}
              onInputChanged={handleInputChanged}
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
