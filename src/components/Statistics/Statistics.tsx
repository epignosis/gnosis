import React, { FC } from "react";
import Text from "../Text/Text";
import { statisticsContainer } from "./styles";

export type StatisticsProps = {
  statNumber: number | string | JSX.Element;
  title: string;
  subtitle?: string | JSX.Element;
};

const Statistics: FC<StatisticsProps> = ({ statNumber, title, subtitle }) => {
  const isStringOrNumber = typeof statNumber === "string" || typeof statNumber === "number";

  return (
    <div css={statisticsContainer}>
      {isStringOrNumber ? (
        <Text fontSize="4xl" weight="700">
          {statNumber}
        </Text>
      ) : (
        statNumber
      )}

      <Text as="div" fontSize="sm" className="title">
        {title}
      </Text>

      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

export default Statistics;
