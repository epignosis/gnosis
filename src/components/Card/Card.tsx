import React, { FC } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m, MotionProps } from "framer-motion";
import { cardContainer } from "./styles";
import Header, { CardHeaderProps } from "./Header";
import Thumbnail, { ThumbnailProps } from "./Thumbnail";
import Hover, { HoverProps } from "./Hover";
import Body, { BodyProps } from "./Body";
import Overlay, { OverlayProps } from "./Overlay";
import Drawer, { DrawerProps } from "./Drawer";

export type CardProps = FC<React.HTMLAttributes<HTMLElement> & MotionProps>;

type CardCompoundProps = {
  Header: CardHeaderProps;
  Thumbnail: ThumbnailProps;
  Hover: HoverProps;
  Body: BodyProps;
  Overlay: OverlayProps;
  Drawer: DrawerProps;
};

const Card: CardProps & CardCompoundProps = ({ children, ...rest }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      <m.article initial="rest" whileHover="hover" css={cardContainer} data-testid="card" {...rest}>
        {children}
      </m.article>
    </AnimatePresence>
  </LazyMotion>
);

Card.Header = Header;
Card.Thumbnail = Thumbnail;
Card.Hover = Hover;
Card.Body = Body;
Card.Overlay = Overlay;
Card.Drawer = Drawer;

export default Card;
