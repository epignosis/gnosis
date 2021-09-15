import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { InputSize } from "../Input/Input";
import Radio, { RadioOption } from "./Radio";
import { container } from "./styles";

export type RadioGroupProps = {
  id: string;
  groupname: string;
  options: RadioOption[];
  onChange?: (selectedValue: string) => void;
  initialValue?: string;
  inline?: boolean;
  size?: InputSize;
  className?: string;
};

const RadioGroup: FC<RadioGroupProps> = ({
  groupname,
  options,
  onChange,
  initialValue = "",
  inline = false,
  size = "md",
  id,
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const selectValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedValue = e.target.value;

    setSelectedValue(selectedValue);
  };

  useEffect(() => {
    onChange && onChange(selectedValue);
  }, [selectedValue, onChange]);

  return (
    <fieldset css={container(inline)} id={id || groupname} className={className}>
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
