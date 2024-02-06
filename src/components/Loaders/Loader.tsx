import { SerializedStyles, useTheme } from "@emotion/react";
import React, { FC } from "react";
import { PulseLoader, ClipLoader } from "react-spinners";
import { container } from "./styles";

export type LoaderSize = "md" | "lg";

export type LoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  fullScreen?: boolean;
  size?: "md" | "lg";
  type: "pulse" | "clip";
};

const loaderSize = {
  pulse: {
    md: "0.375rem",
    lg: "0.75rem",
  },
  clip: {
    md: "1.5rem",
    lg: "2rem",
  },
};

const loaderMargin = {
  pulse: {
    md: "0.0625rem",
    lg: "0.625rem",
  },
  clip: {
    md: "0.5rem",
    lg: "0.5rem",
  },
};

const Loader: FC<LoaderProps> = ({ fullScreen = false, size = "lg", type = "pulse", ...rest }) => {
  const { loader } = useTheme();
  const Loader = type === "pulse" ? PulseLoader : ClipLoader;

  return (
    <div
      css={(): SerializedStyles => container({ fullScreen })}
      data-testid="loader"
      {...rest}
      className={`loading-container${rest?.className ? `${rest?.className}` : ""}`}
    >
      <Loader
        color={loader.color}
        size={loaderSize[type][size]}
        margin={loaderMargin[type][size]}
        className="loader-wrapper"
      />
    </div>
  );
};

export default Loader;
