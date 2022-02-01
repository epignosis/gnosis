import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { InputSize } from "../Input/Input";
import Checkbox, { CheckboxOption } from "./Checkbox";
import { checkboxGroupContainer } from "./styles";

export type CheckboxGroupProps = React.HTMLAttributes<HTMLFieldSetElement> & {
  groupname?: string;
  options: CheckboxOption[];
  onChange?: (selectedValues: string[]) => void;
  initialValues?: string[];
  selected?: string;
  inline?: boolean;
  size?: InputSize;
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  groupname,
  options,
  onChange,
  initialValues = [],
  inline = false,
  size = "md",
  ...rest
}) => {
  const [selectedValues, setSelectedValues] = useState(initialValues);
  const isPartiallySelected = selectedValues.length > 0 && selectedValues.length < options.length;
  const ariaChecked = isPartiallySelected ? "mixed" : selectedValues.length === options.length;
  const selectValues = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedValue = e.target.value;
    if (selectedValues.includes(selectedValue)) {
      setSelectedValues(selectedValues.filter((value) => selectedValue !== value));
    } else {
      setSelectedValues([...selectedValues, selectedValue]);
    }
  };
  const handleGroupChange = (): void => {
    if (selectedValues.length) {
      setSelectedValues([]);
    } else {
      setSelectedValues(options.filter((option) => !option.disabled).map((option) => option.value));
    }
  };

  useEffect(() => {
    onChange && onChange(selectedValues);
  }, [selectedValues, onChange]);

  return (
    <fieldset css={checkboxGroupContainer(inline)} {...rest}>
      <legend>
        {isPartiallySelected && <span className="dash" />}
        <Checkbox
          id={`${groupname}-container`}
          label={groupname ?? ""}
          name={groupname ?? ""}
          value=""
          onChange={handleGroupChange}
          size={size}
          checked={selectedValues.length > 0}
          aria-checked={ariaChecked}
          inline
        />
      </legend>
      <ul>
        {options.map((option) => (
          <li key={option.name}>
            <Checkbox
              id={`${groupname}-${option.value}`}
              size={size}
              checked={selectedValues.includes(option.value)}
              onChange={selectValues}
              inline
              {...option}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default CheckboxGroup;
