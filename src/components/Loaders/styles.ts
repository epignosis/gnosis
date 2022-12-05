import { css, SerializedStyles } from "@emotion/react";
import { LoaderSize } from "./Loader";

const loaderMargin = {
  md: "0.0625rem",
  lg: "0.625rem",
};

const loaderSize = {
  md: "0.375rem",
  lg: "0.75rem",
};

export const container = ({
  fullScreen,
  size,
}: {
  fullScreen: boolean;
  size: LoaderSize;
}): SerializedStyles => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${fullScreen ? "100vh" : "auto"};

  &.loading-container {
    span > span {
      width: ${loaderSize[size]};
      height: ${loaderSize[size]};
      margin: ${loaderMargin[size]};
    }
  }
`;
