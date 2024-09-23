import React, {
  ForwardRefRenderFunction,
  forwardRef,
  isValidElement,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { ActionMeta, MultiValue, SelectInstance, SingleValue } from "react-select";
import { SerializedStyles } from "@emotion/react";
import { useClickAway } from "ahooks";
import { AddOperatorSVG, InfoCircledSVG } from "../../../icons";
import Label from "../Label/Label";
import Tooltip from "../../Tooltip/Tooltip";
import CustomOptionComponent from "./components/CustomOption";
import CustomMenuList from "./components/CustomMenuList";
import CustomSingleValue from "./components/CustomSingleValue";
import CustomMultiValueLabel from "./components/CustomMultiValueLabel";
import { resolveStyles, selectContainer } from "./styles";
import { CustomOption, CustomSelectProps } from "./types";
import { MAX_MENU_HEIGHT, MIN_WIDTH, MAX_WIDTH, OUTER_PLACEHOLDER } from "./constants";
import { containerClassNames, renderSelect } from "./helpers";

const Select: ForwardRefRenderFunction<
  SelectInstance<CustomOption>,
  CustomSelectProps<CustomOption, boolean>
> = (props, forwardedRef) => {
  const {
    id = "",
    type = "select",
    required = false,
    label = "",
    options = [],
    size = "md",
    inline = false,
    status = "valid",
    isInlineFlex = false,
    isMulti = false,
    creatableTooltip = "Create",
    maxMenuHeight = MAX_MENU_HEIGHT,
    minWidth = MIN_WIDTH,
    maxWidth = MAX_WIDTH,
    placeholder = OUTER_PLACEHOLDER,
    tooltipContent = "",
    countOptionsForInnerSearch = 10,
    onChange,
    isInputValid,
    checkIfInputIsSelected,
    closeMenuOnSelect,
    menuMaxWidth,
    forceDisableSearch = false,
    ...rest
  } = props;
  const hasLabel = Boolean(label);

  const containerRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState("");
  const labelClassname = classNames({
    required,
  });

  const countOptions = () => {
    // Count the number of options, including nested options if exists
    return options.reduce((count, option) => {
      return count + ("options" in option ? option.options.length : 1);
    }, 0);
  };

  const isSelectSearchable = () => {
    const isAsyncType = type === "async";
    const hasManyOptions = countOptions() > countOptionsForInnerSearch;

    if (forceDisableSearch) return false;

    return isAsyncType || hasManyOptions;
  };

  const isSearchable = isSelectSearchable();

  // const innerSearchEnabled = shouldShowInnerSearch();
  const shouldRenderTooltip =
    (tooltipContent && typeof tooltipContent === "string" && tooltipContent !== "") ||
    isValidElement(tooltipContent);

  const styles = resolveStyles({ size, menuMaxWidth });

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

  // const CustomDropdownIndicator: React.FC<DropdownIndicatorProps<CustomOption, boolean>> = (
  //   props,
  // ) => {
  //   // const {
  //   //   selectProps: { menuIsOpen },
  //   // } = props;

  //   // const handleCloseMenu = () => {
  //   //   if (menuIsOpen) {
  //   //     setIsFocused(false);
  //   //   }
  //   // };

  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <components.DownChevron onClick={handleCloseMenu} />
  //     </components.DropdownIndicator>
  //   );
  // };

  const customSelectProps = {
    ...rest,
    ref: forwardedRef,
    styles,
    blurInputOnSelect: closeMenuOnSelect || !isMulti,
    closeMenuOnSelect: closeMenuOnSelect || !isMulti,
    isMulti,
    classNames: {
      control: () => containerClassNames(status, size),
      option: ({ isSelected }: { isSelected: boolean }) =>
        `${isSelected ? "selected" : ""} option-${size}`,
    },
    components: {
      IndicatorSeparator: () => null,
      MenuList: CustomMenuList,
      Option: CustomOptionComponent,
      SingleValue: CustomSingleValue,
      MultiValueLabel: CustomMultiValueLabel,
    },
    formatCreateLabel,
    isSearchable,
    maxMenuHeight,
    options,
    placeholder,
    inputValue,
    onMouseDown: (e: MouseEvent) => e.stopPropagation(),
    type,
    onChange: (
      option: MultiValue<CustomOption> | SingleValue<CustomOption>,
      action: ActionMeta<CustomOption>,
    ) => {
      onChange?.(option, action);
    },
    onInputChange: (val: string) => setInputValue(val),
    isValidNewOption: isInputValid,
    noOptionsMessage: () => checkIfInputIsSelected && checkIfInputIsSelected(inputValue),
    isOptionDisabled: (option: CustomOption): boolean => Boolean(option.disabled),
  };

  useClickAway(
    (e) => {
      // Ignore clicks on the close icon, can be one of the three following:
      const { nodeName, className } = e.target as HTMLElement;
      const isSvg = nodeName === "svg";
      const isPath = nodeName === "path";
      const isCloseIcon = className === "close-icon";

      if (isSvg || isPath || isCloseIcon) return;
      // setIsFocused(false);
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
        })
      }
    >
      {hasLabel && (
        <div className="label-container">
          <Label
            htmlFor={id}
            aria-labelledby={id}
            data-testid={`${id}-label`}
            className={labelClassname}
          >
            {label}
          </Label>
          {shouldRenderTooltip && (
            <div data-testid={`${id}-tooltip`}>
              <Tooltip content={tooltipContent}>
                <InfoCircledSVG height={20} />
              </Tooltip>
            </div>
          )}
        </div>
      )}
      <div className="select-input-wrapper" data-testid={`${id}-select`} ref={containerRef}>
        {renderSelect(type, customSelectProps)}
      </div>
    </div>
  );
};

export default forwardRef(Select);
