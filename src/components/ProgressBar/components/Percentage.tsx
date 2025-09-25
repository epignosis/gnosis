import React from "react";
import classNames from "classnames";

type PercentageProps = {
  percent: number;
  percentageAfter: boolean;
  customText?: string;
};

export const Percentage = ({ percent, percentageAfter, customText }: PercentageProps) => {
  const percentageClassNames = classNames("percentage-after", {
    "percentage-after-after": percentageAfter,
  });

  return (
    <div
      data-testid="percentage"
      className={percentageClassNames}
      dangerouslySetInnerHTML={{
        __html: customText || `${percent}&rlm;%`,
      }}
    />
  );
};
