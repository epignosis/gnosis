// Inspired by this https://codesandbox.io/embed/m75wlyx3oy
import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  useRef,
  useState,
} from "react";
import ReactSelect, {
  ActionMeta,
  GroupBase,
  MultiValue,
  SelectInstance,
  SingleValue,
  ValueContainerProps,
} from "react-select";
import CreatableSelect from "react-select/creatable";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import Label from "../Label/Label";
import Tooltip from "../../Tooltip/Tooltip";
import { AddOperatorSVG } from "../../../icons";
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
    label = "",
    options = [],
    size = "md",
    inline = false,
    status = "valid",
    isInlineFlex = false,
    hasInnerSearch = false,
    isMulti = false,
    isCreatable = false,
    creatableTooltip = "Create",
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
  const formatCreateLabel = (inputValue: string) => (
    <div>
      <Tooltip content={creatableTooltip}>
        <div className="select-create-label">
          <span>{inputValue} </span>
          <span>
            <AddOperatorSVG color="black" height={12} />
          </span>
        </div>
      </Tooltip>
    </div>
  );

  const customSelectProps = {
    ...rest,
    ref: forwardedRef,
    styles,
    blurInputOnSelect: !isMulti,
    closeMenuOnSelect: !isMulti,
    isMulti,
    classNames: {
      control: () => containerClassNames(status, size),
      option: () => `option-${size}`,
    },

    components: {
      IndicatorSeparator: () => null,
      MenuList: CustomMenuList,
      ValueContainer: (
        props: PropsWithChildren<
          ValueContainerProps<CustomOption, boolean, GroupBase<CustomOption>>
        >,
      ) => CustomValueContainer({ ...props, isFocused }),
    },
    formatCreateLabel,
    isSearchable: false,
    maxMenuHeight,
    menuIsOpen: isFocused || undefined,
    options,
    placeholder: outerPlaceholder,
    inputValue: inputValue,
    onMenuInputFocus: () => setIsFocused(true),
    onMouseDown: (e: MouseEvent) => e.stopPropagation(),
    innerPlaceholder,
    hasInnerSearch,
    onChange: (
      option: MultiValue<CustomOption> | SingleValue<CustomOption>,
      action: ActionMeta<CustomOption>,
    ) => {
      setIsFocused(false);
      onChange && onChange(option, action);
    },
    onInputChange: (val: string) => setInputValue(val),
  };

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
        selectContainer(theme, {
          size,
          inline,
          isInlineFlex,
          minWidth,
          maxWidth,
          hasInnerSearch,
        })
      }
    >
      {hasLabel && (
        <Label htmlFor={id} aria-labelledby={id}>
          {label}
        </Label>
      )}
      <div className="select-input-wrapper" data-testid="custom-react-select" ref={containerRef}>
        {isCreatable ? (
          <CreatableSelect {...customSelectProps} createOptionPosition="first" />
        ) : (
          <ReactSelect {...customSelectProps} />
        )}
      </div>
    </div>
  );
};

export default forwardRef(Select);
