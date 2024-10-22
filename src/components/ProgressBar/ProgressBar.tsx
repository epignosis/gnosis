import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import Text from "../Text/Text";
import { container } from "./styles";

export type Size = "md" | "lg" | "sm" | "xs";
export type Color = "primary" | "success" | "white";

export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  percent: number;
  size?: Size;
  color?: Color;
  rounded?: boolean;
  labelBefore?: string;
  labelAfter?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({
  percent,
  size = "md",
  color = "success",
  rounded = true,
  labelBefore,
  labelAfter,
  ...rest
}) => {
  const showPercentage = percent >= 0 && percent <= 100 && size !== "sm" && size !== "xs";

  return (
    <div
      css={(theme): SerializedStyles =>
        container(theme, { percent, showPercentage, size, rounded, color })
      }
      {...rest}
    >
      {labelBefore && (
        <Text fontSize="xs" weight="400" className="label">
          {labelBefore}
        </Text>
      )}
      <div className="percentage-container">
        {showPercentage && (
          <div
            data-testid="percentage"
            dangerouslySetInnerHTML={{
              __html: `${percent}&rlm;%`,
            }}
          ></div>
        )}
      </div>
      {labelAfter && (
        <Text fontSize="xs" weight="400" className="label">
          {labelAfter}
        </Text>
      )}
    </div>
  );
};

export default ProgressBar;
