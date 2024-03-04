import React from "react";
import classNames from "classnames";
import { FormatOptionLabelContext } from "react-select";
import { CarretArrowRight } from "../../../icons/";

export const containerClassNames = (status: string, size: string, isFocused: boolean) =>
  classNames({
    [`control-${size}`]: true,
    valid: status === "valid",
    error: status === "error",
    focused: isFocused,
  });

export const formatOptionLabel = (
  { label = "", level = 0 },
  { context }: { context: FormatOptionLabelContext },
): JSX.Element => {
  if (!level || context === "value") return <>{label}</>;

  const styles = {
    paddingLeft: calculatePadding(level),
    display: "flex",
    justifyContent: "flex-start",
    gap: "0.5rem",
  };

  return (
    <span style={styles}>
      {level ? (
        <div>
          <CarretArrowRight height={10} />
        </div>
      ) : null}
      <span>{label}</span>
    </span>
  );
};

const calculatePadding = (level: number): string => {
  if (level <= 1) return "0";
  return `${0.5 * level}rem`;
};
