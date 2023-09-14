import React, { FC, MouseEvent as ReactMouseEvent } from "react";
import { components } from "react-select";
import { SerializedStyles } from "@emotion/react";
import Input from "../../Input/Input";
import { searchInputContainer } from "../../Input/styles";
import { customMenuAsync } from "../styles";
import { CustomMenuListProps, CustomOption } from "../types";
import Loader from "../../../Loaders/Loader";

const { MenuList } = components;

const CustomMenuAsync: FC<CustomMenuListProps<CustomOption, boolean>> = (customMenuProps) => {
  const { selectProps, ...props } = customMenuProps;
  const { onInputChange, innerPlaceholder, inputValue, onMenuInputFocus, options, asyncOptions } =
    selectProps;
  const { onAsyncSearchChange, status, initialText = "", noOptionsText = "" } = asyncOptions ?? {};

  const ariaAttributes = {
    "aria-autocomplete": "list" as const,
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    onInputChange(e.target.value, {
      action: "input-change",
      prevInputValue: inputValue,
    });

    onAsyncSearchChange && onAsyncSearchChange(e.target.value);
  };

  const handleInputClear = (): void => {
    onAsyncSearchChange && onAsyncSearchChange("");

    onInputChange("", {
      action: "input-change",
      prevInputValue: inputValue,
    });
  };

  return (
    <div css={(): SerializedStyles => customMenuAsync()}>
      <div css={searchInputContainer} onMouseDown={(e) => e.stopPropagation()}>
        <Input
          id="react-select-inner-search-input"
          placeholder={innerPlaceholder}
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          type="text"
          value={inputValue}
          showVerticalLine
          isClearable
          onChange={handleInputChange}
          onMouseDown={(e: ReactMouseEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const input = e.target as HTMLInputElement;
            input.focus();
          }}
          onClear={handleInputClear}
          onFocus={onMenuInputFocus}
          status={status?.error ? "error" : "valid"}
          {...ariaAttributes}
        />
      </div>

      {status?.isLoading ? ( //Show loading when fetching the data
        <div className="loader-container">
          <Loader size="md" />
        </div>
      ) : inputValue ? ( // If we have an input value on the inner search check whether we have rerults
        options.length > 0 ? (
          <MenuList {...props} selectProps={selectProps} />
        ) : (
          noOptionsText
        )
      ) : (
        <div className="text-container">{initialText}</div>
      )}
    </div>
  );
};

export default CustomMenuAsync;
