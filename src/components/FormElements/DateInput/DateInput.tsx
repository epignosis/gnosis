import React, { FC, ChangeEvent } from "react";
import { useResponsive } from "@umijs/hooks";
import DatePicker from "react-datepicker";
import { SerializedStyles } from "@emotion/react";
import { format, parseISO } from "date-fns";
import classNames from "classnames";
import { Input, Label } from "../../../";
import { InputSize } from "../Input/Input";
import { dateInput } from "./styles";
// import "react-datepicker/dist/react-datepicker.css";
import { CalendarSVG } from "@icons/core";

export type DateInputProps = {
  value: Date;
  id: string;
  size?: InputSize;
  label?: string;
  inline?: boolean;
  className?: string;
  onChange: (selectedDate: Date) => void;
};

const DateInput: FC<DateInputProps> = (props) => {
  const { value = new Date(), id, size = "md", className, label, inline = false, onChange } = props;
  const { sm } = useResponsive();
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    inline: hasLabel && inline,
    [className ?? ""]: true,
  });
  const onChangeDate = (date: Date): void => {
    onChange(date as Date);
  };
  const onChangeMobileDate = (e: ChangeEvent<HTMLInputElement>): void => {
    const date = parseISO(e.target.value);
    onChange(date);
  };

  return (
    <div
      css={(theme): SerializedStyles => dateInput(theme, { size })}
      className={containerClassNames}
    >
      {hasLabel && <Label htmlFor={id}>{label}</Label>}
      {!sm ? (
        <input
          type="date"
          id={id}
          className={className}
          value={format(value, "yyyy-MM-dd")}
          onChange={onChangeMobileDate}
        />
      ) : (
        <DatePicker
          id={id}
          className={className}
          selected={value}
          onChange={onChangeDate}
          customInput={<Input id={id} size={size} iconAfter={CalendarSVG} />}
        />
      )}
    </div>
  );
};

export default DateInput;
