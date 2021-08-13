import { css, SerializedStyles, Theme } from "@emotion/react";
import { LoaderSize } from "./Loader";

const loaderMargin = {
  md: "0.0625rem",
  lg: "0.625rem",
};

const loaderSize = {
  md: "0.375rem",
  lg: "0.75rem",
};

export const container = (
  { loader }: Theme,
  { fullScreen, size }: { fullScreen: boolean; size: LoaderSize },
): SerializedStyles => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${fullScreen ? "100vh" : "auto"};

  &.loading-container {
    span > span {
      width: ${loaderSize[size]};
      height: ${loaderSize[size]};
      background: ${loader.color};
      margin: ${loaderMargin[size]};
    }
  }
`;
