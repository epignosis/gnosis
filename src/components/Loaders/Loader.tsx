import { SerializedStyles, useTheme } from "@emotion/react";
import React, { FC } from "react";
import { PulseLoader } from "react-spinners";
import { container } from "./styles";

export type LoaderSize = "md" | "lg";

export type LoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  fullScreen?: boolean;
  size?: "md" | "lg";
};

const Loader: FC<LoaderProps> = ({ fullScreen = false, size = "lg", ...rest }) => {
  const { loader } = useTheme();
  return (
    <div
      css={(): SerializedStyles => container({ fullScreen, size })}
      data-testid="loader"
      {...rest}
      className={`loading-container${rest?.className ? ` ${rest?.className}` : ""}`}
    >
      <PulseLoader color={loader.color} />
    </div>
  );
};

export default Loader;
