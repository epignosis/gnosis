import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import { SerializedStyles } from "@emotion/react";
import { InputSize } from "../Input/Input";
import { radioButton } from "./styles";

export type RadioButtonProps = {
  index: number;
  label: ReactNode;
  value: string;
};

type UiRadioButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> &
  RadioButtonProps & {
    selectedValue: string;
    size: InputSize;
    className?: string;
    onClick: (value: string) => void;
  };

const RadioButton: FC<UiRadioButtonProps> = ({
  index,
  label,
  value,
  selectedValue,
  onClick,
  size,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onClick(value);
  };
  const cssClasses = classNames({
    "is-selected": value === selectedValue,
  });
  const propHTMLClass = rest?.className ? rest?.className : "";

  return (
    <button
      id={`radio-${index}`}
      className={`${cssClasses}${propHTMLClass}`}
      onClick={handleClick}
      css={(theme): SerializedStyles => radioButton(theme, { size })}
      aria-selected={value === selectedValue}
      {...rest}
    >
      {label}
    </button>
  );
};

export default RadioButton;
