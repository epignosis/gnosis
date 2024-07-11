import React, { FC } from "react";
import { aspectRatioContainer } from "./styles";

export type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> & {
  ratio: [number, number];
};

const AspectRatio: FC<AspectRatioProps> = ({ ratio, children, ...rest }) => {
  const paddingPercentage = (ratio[1] / ratio[0]) * 100;

  return (
    <div css={aspectRatioContainer(paddingPercentage)} {...rest}>
      <div className="aspect-ratio-wrapper">{children}</div>
    </div>
  );
};

export default AspectRatio;
