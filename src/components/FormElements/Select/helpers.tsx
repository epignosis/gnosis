import classNames from "classnames";

export const containerClassNames = (status: string, size: string) =>
  classNames({
    [`control-${size}`]: true,
    valid: status === "valid",
    error: status === "error",
  });
