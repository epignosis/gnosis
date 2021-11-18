import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { InputSize } from "../Input/Input";
import Radio, { RadioOption } from "./Radio";
import { container } from "./styles";

export type RadioGroupProps = React.HTMLAttributes<HTMLFieldSetElement> & {
  groupname: string;
  options: RadioOption[];
  initialValue?: string;
  inline?: boolean;
  size?: InputSize;
  onChange?: (selectedValue: string) => void;
};

const RadioGroup: FC<RadioGroupProps> = ({
  groupname,
  options,
  onChange,
  initialValue = "",
  inline = false,
  size = "md",
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const selectValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    onChange && onChange(selectedValue);
  }, [selectedValue, onChange]);

  return (
    <fieldset css={container(inline)} id={rest?.id ?? groupname} {...rest}>
      {options.map((option) => (
        <Radio
          key={option.value}
          id={`${groupname}-${option.value}`}
          size={size}
          checked={selectedValue === option.value}
          name={groupname}
          onChange={selectValue}
          inline
          {...option}
        />
      ))}
    </fieldset>
  );
};

export default RadioGroup;
