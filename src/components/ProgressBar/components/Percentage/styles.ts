import { css, Theme } from "@emotion/react";
import { Color } from "../../types";

export const percentageStyles = (
  { progressBar }: Theme,
  { color, percentageAfter }: { color: Color; percentageAfter: boolean },
) => css`
  ${percentageAfter &&
  `
    color: ${progressBar[color].textColor};
  `}
`;
