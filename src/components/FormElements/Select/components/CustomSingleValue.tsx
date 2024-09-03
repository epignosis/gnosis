import React, { FC, useEffect, useRef, useState } from "react";
import { components, SingleValueProps } from "react-select";
import { CustomOption } from "../types";
import Tooltip from "../../../Tooltip/Tooltip";

const CustomSingleValue: FC<SingleValueProps<CustomOption>> = ({ children, ...props }) => {
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const valueRef = useRef<HTMLDivElement>(null);

  const { isDisabled, data } = props;
  const { label } = data;
  const isTooltipDisabled = isDisabled || !isOverflowActive;

  useEffect(() => {
    if (valueRef.current) {
      const hasOverflow = valueRef.current.scrollWidth > valueRef.current.clientWidth;
      setIsOverflowActive(hasOverflow);
    }
  }, [label]);

  return (
    <components.SingleValue {...props}>
      <Tooltip content={label} disabled={isTooltipDisabled}>
        <div className="custom-value" ref={valueRef}>
          {children}
        </div>
      </Tooltip>
    </components.SingleValue>
  );
};

export default CustomSingleValue;
