import { SerializedStyles } from "@emotion/react";
import React, { FC } from "react";
import { PulseLoader } from "react-spinners";
import { container } from "./styles";

export type LoaderSize = "md" | "lg";

export type LoaderProps = {
  fullScreen?: boolean;
  size?: "md" | "lg";
};

const Loader: FC<LoaderProps> = ({ fullScreen = false, size = "lg" }) => {
  return (
    <div
      css={(theme): SerializedStyles => container(theme, { fullScreen, size })}
      data-testid="loader"
      className="loading-container"
    >
      <PulseLoader />
    </div>
  );
};

export default Loader;
