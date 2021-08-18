import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { container } from "./styles";

export type Size = "md" | "lg";

export type ProgressBarProps = {
  percent: number;
  size?: Size;
  rounded?: boolean;
};

const ProgressBar: FC<ProgressBarProps> = ({ percent, size = "md", rounded = true }) => {
  const showPercentage = percent >= 0 && percent <= 100;

  return (
    <div css={(theme): SerializedStyles => container(theme, { percent, size, rounded })}>
      {showPercentage && <div>{percent}%</div>}
    </div>
  );
};

export default ProgressBar;
