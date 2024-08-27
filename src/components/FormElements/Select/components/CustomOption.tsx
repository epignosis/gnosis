import React, { FC, useEffect, useRef, useState } from "react";
import { components, OptionProps } from "react-select";
import { CustomOption } from "../types";
import Tooltip from "../../../Tooltip/Tooltip";

const CustomOptionComponent: FC<OptionProps<CustomOption>> = (props) => {
  const [isOverflowActive, setIsOverflowActive] = useState(false);
  const optionRef = useRef<HTMLDivElement>(null);

  const { isDisabled, data } = props;
  const { label } = data;

  useEffect(() => {
    if (optionRef.current) {
      const hasOverflow = optionRef.current.scrollWidth > optionRef.current.clientWidth;
      setIsOverflowActive(hasOverflow);
    }
  }, [props.label]);

  return (
    <components.Option {...props}>
      <Tooltip content={label} disabled={isDisabled || !isOverflowActive}>
        <div className="custom-option" ref={optionRef}>
          {label}
        </div>
      </Tooltip>
    </components.Option>
  );
};

export default CustomOptionComponent;
