import React, { FC } from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export type RadioGroupOption = Pick<RadioButtonProps, "label" | "value">;

export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  options: RadioGroupOption[];
  value: string;
  size?: "md" | "lg";
  onChange: (selectedValue: string) => void;
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
