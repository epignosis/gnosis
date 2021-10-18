import { FC } from "react";
import { CardHeaderProps } from "./Header";
import { ThumbnailProps } from "./Thumbnail";
import { HoverProps } from "./Hover";
import { BodyProps } from "./Body";
import { OverlayProps } from "./Overlay";
import { DrawerProps } from "./Drawer";
export declare type CardProps = FC;
declare type CardCompoundProps = {
    Header: CardHeaderProps;
    Thumbnail: ThumbnailProps;
    Hover: HoverProps;
    Body: BodyProps;
    Overlay: OverlayProps;
    Drawer: DrawerProps;
};
declare const Card: CardProps & CardCompoundProps;
export default Card;
