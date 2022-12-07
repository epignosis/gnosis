import { SerializedStyles, useTheme } from "@emotion/react";
import React, { FC } from "react";
import { PulseLoader } from "react-spinners";
import { container } from "./styles";

export type LoaderSize = "md" | "lg";

export type LoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  fullScreen?: boolean;
  size?: "md" | "lg";
};

const loaderSize = {
  md: "0.375rem",
  lg: "0.75rem",
};

const loaderMargin = {
  md: "0.0625rem",
  lg: "0.625rem",
};

const Loader: FC<LoaderProps> = ({ fullScreen = false, size = "lg", ...rest }) => {
  const { loader } = useTheme();
  return (
    <div
      css={(): SerializedStyles => container({ fullScreen })}
      data-testid="loader"
      {...rest}
      className={`loading-container${rest?.className ? `${rest?.className}` : ""}`}
    >
      <PulseLoader color={loader.color} size={loaderSize[size]} margin={loaderMargin[size]} />
    </div>
  );
};

export default Loader;
