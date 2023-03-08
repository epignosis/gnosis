import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import { container } from "./styles";

export type Size = "md" | "lg";

export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  percent: number;
  size?: Size;
  rounded?: boolean;
};

const ProgressBar: FC<ProgressBarProps> = ({ percent, size = "md", rounded = true, ...rest }) => {
  const showPercentage = percent >= 0 && percent <= 100;

  return (
    <div css={(theme): SerializedStyles => container(theme, { percent, size, rounded })} {...rest}>
      {showPercentage && <div>{percent} %</div>}
    </div>
  );
};

export default ProgressBar;
