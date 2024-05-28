import React, { FC, MouseEvent as ReactMouseEvent } from "react";
import { components } from "react-select";
import { SerializedStyles } from "@emotion/react";
import Input from "../../Input/Input";
import { searchInputContainer } from "../../Input/styles";
import { customMenuList } from "../styles";
import { CustomMenuListProps, CustomOption } from "../types";
import Loader from "../../../Loaders/Loader";

const { MenuList } = components;

const CustomMenuList: FC<CustomMenuListProps<CustomOption, boolean>> = (customMenuProps) => {
  const { selectProps, ...props } = customMenuProps;
  const {
    onInputChange,
    innerPlaceholder,
    hasInnerSearch = false,
    inputValue,
    onMenuInputFocus,
    asyncOptions,
    type,
    menuIsOpen,
  } = selectProps;

  const { onAsyncSearchChange, status, initialText = "" } = asyncOptions ?? {};
  const isAsync = type === "async";
  const showLoading = isAsync ? Boolean(status?.isLoading) : false;
  const showMenuList = isAsync ? Boolean(!status?.isLoading && inputValue) : menuIsOpen;
  const showInitialText = isAsync ? Boolean(!status?.isLoading && !inputValue) : false;
  // const shouldFocus = Boolean(hasInnerSearch); //here

  const ariaAttributes = {
    "aria-autocomplete": "list" as const,
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    const value = e.target.value;
    onInputChange(value, {
      action: "input-change",
      prevInputValue: inputValue,
    });

    onAsyncSearchChange && onAsyncSearchChange(value);
  };

  const handleOnMouseDown = (e: ReactMouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    input.focus();
  };

  const handleOnClear = (): void => {
    onInputChange("", {
      action: "input-change",
      prevInputValue: inputValue,
    });

    onAsyncSearchChange && onAsyncSearchChange("");
  };

  return (
    <div css={(): SerializedStyles => customMenuList({ hasInnerSearch })}>
      {hasInnerSearch && (
        <div css={searchInputContainer} onMouseDown={(e) => e.stopPropagation()}>
          <Input
            id="react-select-inner-search-input"
            placeholder={innerPlaceholder}
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
            type="text"
            value={inputValue}
            showVerticalLine={false}
            isClearable={true}
            onChange={handleInputChange}
            onMouseDown={handleOnMouseDown}
            onClear={handleOnClear}
            onFocus={onMenuInputFocus}
            // autoFocus={shouldFocus}
            {...ariaAttributes}
          />
        </div>
      )}

      {showLoading && (
        <div className="loader-container">
          <Loader size="md" />
        </div>
      )}
      {showMenuList && <MenuList {...props} selectProps={selectProps} />}
      {showInitialText && <div className="text-container">{initialText}</div>}
    </div>
  );
};

export default CustomMenuList;
