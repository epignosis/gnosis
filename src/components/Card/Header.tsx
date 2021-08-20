import React, { FC } from "react";
import { useResponsive } from "@umijs/hooks";
import { courseHeaderContainer } from "./styles";
import { AspectRatio } from "@components";

export type CardHeaderProps = FC<{
  to?: string;
  ratio?: [number, number];
}>;

const CardHeader: CardHeaderProps = ({ to, ratio = [4, 3], children }) => {
  const { sm } = useResponsive();

  return (
    <AspectRatio ratio={ratio}>
      <section css={courseHeaderContainer}>
        {!sm && to ? <a href={to}>{children}</a> : children}
      </section>
    </AspectRatio>
  );
};

export default CardHeader;
