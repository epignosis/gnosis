import React, { FC } from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export type RadioGroupOption = Pick<RadioButtonProps, "label" | "value">;

export type RadioGroupProps = {
  options: RadioGroupOption[];
  value: string;
  size?: "md" | "lg";
  id?: string;
  className?: string;
  onChange: (selectedValue: string) => void;
};

const RadioButtonGroup: FC<RadioGroupProps> = (props) => {
  const { options, value = "", size = "md", id, className, onChange } = props;

  return (
    <div id={id} className={className}>
      {options.map((option, index) => (
        <RadioButton
          key={option.value}
          index={index}
          size={size}
          selectedValue={value}
          {...option}
          onClick={onChange}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
