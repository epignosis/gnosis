import React from "react";
import { SerializedStyles } from "@emotion/react";
import { Color } from "../../types";
import Text from "../../../Text/Text";
import { percentageStyles } from "./styles";
import { TypographyLevels } from "@theme/utils/typography";

type PercentageProps = {
  percent: number;
  percentageAfter: boolean;
  color: Color;
  fontSize: TypographyLevels;
  customText?: string;
};

export const Percentage = ({
  percent,
  percentageAfter,
  customText,
  color,
  fontSize,
}: PercentageProps) => {
  return (
    <Text
      data-testid="percentage"
      as="div"
      fontSize={fontSize}
      css={(theme): SerializedStyles => percentageStyles(theme, { color, percentageAfter })}
      dangerouslySetInnerHTML={{
        __html: customText || `${percent}&rlm;%`,
      }}
    />
  );
};
