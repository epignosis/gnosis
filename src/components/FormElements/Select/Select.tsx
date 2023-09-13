// Inspired by this https://codesandbox.io/embed/m75wlyx3oy
import React, { ForwardRefRenderFunction, forwardRef, useRef, useState } from "react";
import ReactSelect, { SelectInstance } from "react-select";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import Label from "../Label/Label";
import CustomValueContainer from "./components/CustomValueContainer";
import { resolveStyles, selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";
import {
  MAX_MENU_HEIGHT,
  INNER_PLACEHOLDER,
  MIN_WIDTH,
  MAX_WIDTH,
  OUTER_PLACEHOLDER,
} from "./constants";
import { containerClassNames } from "./heleprs";

const Select: ForwardRefRenderFunction<
  SelectInstance<CustomOption>,
  CustomSelectProps<CustomOption, boolean>
> = (props, forwardedRef) => {
  const {
    id = "",
    label,
    options = [],
    size = "md",
    inline = false,
    status = "valid",
    isInlineFlex = false,
    hasInnerSearch = false,
    isMulti = false,
    maxMenuHeight = MAX_MENU_HEIGHT,
    innerPlaceholder = INNER_PLACEHOLDER,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    placeholder: outerPlaceholder = OUTER_PLACEHOLDER,
    onChange,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const styles = resolveStyles(size, hasInnerSearch);

  useClickAway(
    (e) => {
      // Ignore clicks on the close icon, can be one of the three following:
      const { nodeName, className } = e.target as HTMLElement;
      const isSvg = nodeName === "svg";
      const isPath = nodeName === "path";
      const isCloseIcon = className === "close-icon";

      if (isSvg || isPath || isCloseIcon) return;
      setIsFocused(false);
      setInputValue("");
    },

    [containerRef],
  );

  return (
    <div
      css={(theme): SerializedStyles =>
        selectContainer(theme, { size, inline, isInlineFlex, minWidth, maxWidth, hasInnerSearch })
      }
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper" data-testid="custom-react-select" ref={containerRef}>
        <ReactSelect
          {...rest}
          ref={forwardedRef}
          blurInputOnSelect={!isMulti}
          closeMenuOnSelect={!isMulti}
          isMulti={isMulti}
          classNames={{
            control: () => containerClassNames(status, size),
            option: () => `option-${size}`,
          }}
          components={{
            IndicatorSeparator: () => null,
            MenuList: CustomMenuList,
            ValueContainer: (props) => CustomValueContainer({ ...props, isFocused }),
          }}
          isSearchable={false}
          maxMenuHeight={maxMenuHeight}
          menuIsOpen={isFocused || undefined}
          options={options}
          placeholder={outerPlaceholder}
          styles={styles}
          inputValue={inputValue}
          // custom props
          {...{
            onMenuInputFocus: () => setIsFocused(true),
            onMouseDown: (e: MouseEvent) => e.stopPropagation(),
            innerPlaceholder,
            hasInnerSearch,
          }}
          // events
          onChange={(option, action) => {
            setIsFocused(false);
            onChange && onChange(option, action);
          }}
          onInputChange={(val) => setInputValue(val)}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
