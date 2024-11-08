import React, { FC, useEffect, useRef, useState, memo } from "react";
import { components, FormatOptionLabelMeta, OptionProps } from "react-select";
import { CustomOption } from "../types";
import Tooltip from "../../../Tooltip/Tooltip";

const CustomOptionComponent: FC<OptionProps<CustomOption>> = (props) => {
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const optionRef = useRef<HTMLDivElement>(null);

  const { isDisabled, data, selectProps } = props;
  const { label, hint } = data;
  const isTooltipDisabled = isDisabled || !isOverflowActive;
  const optionLabel = selectProps.formatOptionLabel
    ? selectProps.formatOptionLabel(data, {
        context: "menu",
      } as FormatOptionLabelMeta<CustomOption>)
    : label;

  useEffect(() => {
    if (optionRef.current) {
      const hasOverflow = optionRef.current.scrollWidth > optionRef.current.clientWidth;
      setIsOverflowActive(hasOverflow);
    }
  }, [label]);

  return (
    <components.Option {...props}>
      <Tooltip content={label} disabled={isTooltipDisabled} parentProps={{ "aria-label": label }}>
        <div className="custom-option" ref={optionRef}>
          <span className="label-text">{optionLabel}</span>
          {hint && <span className="hint-text">{hint}</span>}
        </div>
      </Tooltip>
    </components.Option>
  );
};

export default memo(CustomOptionComponent);
