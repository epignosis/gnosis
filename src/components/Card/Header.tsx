import React, { FC } from "react";
import { courseHeaderContainer } from "./styles";
import { AspectRatio } from "@components";

export type CardHeaderProps = FC<{
  ratio?: [number, number];
}>;

const CardHeader: CardHeaderProps = ({ ratio = [4, 3], children }) => {
  return (
    <AspectRatio ratio={ratio}>
      <section css={courseHeaderContainer}>{children}</section>
    </AspectRatio>
  );
};

export default CardHeader;
