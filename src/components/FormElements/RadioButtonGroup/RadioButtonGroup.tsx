import React, { FC } from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export type RadioGroupOption = Pick<RadioButtonProps, "label" | "value">;

export type RadioGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  options: RadioGroupOption[];
  value: string;
  size?: "md" | "lg";
  onChange: (value: string) => void;
};

const RadioButtonGroup: FC<RadioGroupProps> = (props) => {
  const { options, value = "", size = "md", onChange, ...rest } = props;

  return (
    <div {...rest}>
      {options.map((option, index) => (
        <RadioButton
          key={option.value}
          index={index}
          size={size}
          selectedValue={value}
          onClick={onChange}
          {...option}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
