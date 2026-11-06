import React, { FC, useEffect, useRef, useState, memo } from "react";
import { components, MultiValueGenericProps } from "react-select";
import { CustomOption, CustomSelectProps } from "../types";
import Tooltip from "../../../Tooltip/Tooltip";

const CustomMultiValueLabel: FC<MultiValueGenericProps<CustomOption>> = (props) => {
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const labelRef = useRef<HTMLDivElement>(null);

  const { data, selectProps } = props;
  const { label } = data;
  const { isDisabled, isReadOnly } = selectProps as CustomSelectProps<CustomOption, boolean>;
  // Read-only values must stay readable, so truncated labels keep their tooltip
  const isTooltipDisabled = (isDisabled && !isReadOnly) || !isOverflowActive;

  useEffect(() => {
    if (labelRef.current) {
      const hasOverflow = labelRef.current.scrollWidth > labelRef.current.clientWidth;
      setIsOverflowActive(hasOverflow);
    }
  }, [label]);

  return (
    <components.MultiValueLabel {...props}>
      <Tooltip content={label} disabled={isTooltipDisabled} parentProps={{ "aria-label": label }}>
        <div className="custom-multi-value" ref={labelRef}>
          {label}
        </div>
      </Tooltip>
    </components.MultiValueLabel>
  );
};

export default memo(CustomMultiValueLabel);
