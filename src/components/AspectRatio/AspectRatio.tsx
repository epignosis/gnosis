import React, { FC } from "react";
import { aspectRatioContainer } from "./styles";

export type AspectRatioProps = {
  ratio: [number, number];
};

const AspectRatio: FC<AspectRatioProps> = ({ ratio, children }) => {
  const paddingPercentage = (ratio[1] / ratio[0]) * 100;

  return (
    <div css={aspectRatioContainer(paddingPercentage)}>
      <div className="aspect-ratio-wrapper">{children}</div>
    </div>
  );
};

export default AspectRatio;
