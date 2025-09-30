import React from "react";
import { SerializedStyles } from "@emotion/react";
import { Color } from "../../types";
import { percentageStyles } from "./styles";

type PercentageProps = {
  percent: number;
  percentageAfter: boolean;
  color: Color;
  customText?: string;
};

export const Percentage = ({ percent, percentageAfter, customText, color }: PercentageProps) => {
  return (
    <div
      data-testid="percentage"
      css={(theme): SerializedStyles => percentageStyles(theme, { color, percentageAfter })}
      dangerouslySetInnerHTML={{
        __html: customText || `${percent}&rlm;%`,
      }}
    />
  );
};
