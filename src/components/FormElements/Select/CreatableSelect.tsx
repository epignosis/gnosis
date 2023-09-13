import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { SelectInstance } from "react-select";
import CreatableSelect from "react-select/creatable";
import { SerializedStyles } from "@emotion/react";
import Label from "../Label/Label";
import { resolveStyles, selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";
import { MAX_MENU_HEIGHT, MAX_WIDTH, MIN_WIDTH } from "./constants";
import { containerClassNames } from "./heleprs";

const Select: ForwardRefRenderFunction<
  SelectInstance<CustomOption>,
  CustomSelectProps<CustomOption, boolean>
> = (props, forwardedRef) => {
  const {
    id = "",
    label,
    size = "md",
    status = "valid",
    hasInnerSearch = false,
    isMulti = false,
    inline = false,
    isInlineFlex = false,
    creatableLabel = "Create",
    maxMenuHeight = MAX_MENU_HEIGHT,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    ...rest
  } = props;

  const hasLabel = Boolean(label);
  const styles = resolveStyles(size, hasInnerSearch);
  const formatCreateLabel = (inputValue: string) => `${creatableLabel} ${inputValue}`;

  return (
    <div
      css={(theme): SerializedStyles =>
        selectContainer(theme, {
          size,
          minWidth,
          maxWidth,
          inline,
          isInlineFlex,
          hasInnerSearch: false,
        })
      }
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper" data-testid="custom-react-select">
        <CreatableSelect
          {...rest}
          isSearchable={true}
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
          }}
          formatCreateLabel={formatCreateLabel}
          maxMenuHeight={maxMenuHeight}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
