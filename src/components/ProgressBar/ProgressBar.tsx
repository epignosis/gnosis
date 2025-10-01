import React, { FC } from "react";
import { SerializedStyles } from "@emotion/react";
import Text from "../Text/Text";
import { progressBarStyles } from "./styles";
import { Percentage } from "./components/Percentage/Percentage";
import { Color, Size, BorderRadius } from "./types";

export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  percent: number;
  customText?: string;
  size?: Size;
  borderRadius?: number | BorderRadius;
  color?: Color;
  percentageAfter?: boolean;
  labelBefore?: string;
  labelAfter?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({
  percent,
  customText,
  size = "md",
  borderRadius = 5,
  color = "success",
  percentageAfter = false,
  labelBefore,
  labelAfter,
  ...rest
}) => {
  const dir = document.dir;
  const isRtl = dir === "rtl";
  const showPercentage =
    percent >= 0 && percent <= 100 && size !== "sm" && size !== "xs" && typeof size !== "number";
  const showPercentageInside = showPercentage && !percentageAfter;
  const showPercentageAfter = percent >= 0 && percent <= 100 && percentageAfter;

  return (
    <div
      css={(theme): SerializedStyles =>
        progressBarStyles(theme, {
          percent,
          showPercentage,
          size,
          color,
          percentageAfter,
          borderRadius,
          isRtl,
        })
      }
      {...rest}
    >
      {labelBefore && (
        <Text fontSize="xs" weight="400" className="label">
          {labelBefore}
        </Text>
      )}
      <div className="progress-bar-container">
        <div className="percentage-container">
          {showPercentageInside && (
            <Percentage
              percent={percent}
              color={color}
              customText={customText}
              percentageAfter={percentageAfter}
            />
          )}
        </div>
        {showPercentageAfter && (
          <Percentage
            percent={percent}
            color={color}
            customText={customText}
            percentageAfter={percentageAfter}
          />
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
