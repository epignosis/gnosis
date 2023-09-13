import React, { FC, MouseEvent as ReactMouseEvent } from "react";
import { components } from "react-select";
import { SerializedStyles } from "@emotion/react";
import Input from "../../Input/Input";
import { searchInputContainer } from "../../Input/styles";
import { customMenuList } from "../styles";
import { CustomMenuListProps, CustomOption } from "../types";

const { MenuList } = components;

const CustomMenuAsync: FC<CustomMenuListProps<CustomOption, boolean>> = (customMenuProps) => {
  const { selectProps, ...props } = customMenuProps;
  const { onInputChange, innerPlaceholder, inputValue, onMenuInputFocus, options } = selectProps;

  const ariaAttributes = {
    "aria-autocomplete": "list" as const,
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  return (
    <div css={(): SerializedStyles => customMenuList({ hasInnerSearch: true })}>
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
          onChange={(e) => {
            e.stopPropagation();
            onInputChange(e.target.value, {
              action: "input-change",
              prevInputValue: inputValue,
            });
          }}
          onMouseDown={(e: ReactMouseEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const input = e.target as HTMLInputElement;
            input.focus();
          }}
          onClear={() => {
            onInputChange("", {
              action: "input-change",
              prevInputValue: inputValue,
            });
          }}
          onFocus={onMenuInputFocus}
          {...ariaAttributes}
        />
      </div>

      {options.length > 0 ? <MenuList {...props} selectProps={selectProps} /> : "test"}
    </div>
  );
};

export default CustomMenuAsync;
