import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { SelectInstance } from "react-select";
import CreatableSelect from "react-select/creatable";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import { resolveStyles, selectContainer } from "./styles";
import CustomMenuList from "./components/CustomMenuList";
import { CustomOption, CustomSelectProps } from "./types";

const MAX_MENU_HEIGHT = 300;
const MIN_WIDTH = "5rem";
const MAX_WIDTH = "25rem";

const containerClassNames = (status: string, size: string) =>
  classNames({
    [`control-${size}`]: true,
    valid: status === "valid",
    error: status === "error",
  });

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
    maxMenuHeight = MAX_MENU_HEIGHT,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const styles = resolveStyles(size, hasInnerSearch);

  return (
    <div
      css={(theme): SerializedStyles =>
        selectContainer(theme, {
          size,
          minWidth,
          maxWidth,
          inline: false,
          isInlineFlex: false,
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
          maxMenuHeight={maxMenuHeight}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default forwardRef(Select);
