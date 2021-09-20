import React, { FC } from "react";
import AspectRatio from "../AspectRatio/AspectRatio";
import { courseHeaderContainer } from "./styles";

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
