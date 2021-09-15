import React, { FC, ReactNode, MouseEvent } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { InputSize } from "../Input/Input";
import { radioButton } from "./styles";

export type RadioButtonProps = {
  index: number;
  label: ReactNode;
  value: string;
};

export type UiRadioButtonProps = RadioButtonProps & {
  selectedValue: string;
  onClick: (value: string) => void;
  size: InputSize;
};

const RadioButton: FC<UiRadioButtonProps> = ({
  index,
  label,
  value,
  selectedValue,
  onClick,
  size,
}) => {
  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    onClick(value);
  };
  const cssClasses = classNames({
    "is-selected": value === selectedValue,
  });

  return (
    <button
      id={`radio-${index}`}
      className={cssClasses}
      onClick={handleClick}
      css={(theme): SerializedStyles => radioButton(theme, { size })}
      aria-selected={value === selectedValue}
    >
      {label}
    </button>
  );
};

export default RadioButton;
