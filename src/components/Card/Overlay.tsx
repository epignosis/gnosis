import React from "react";
import { overlayContainer } from "./styles";
import { FCWithChildren } from "types/common";

export type OverlayProps = FCWithChildren;

const Overlay: OverlayProps = ({ children }) => <div css={overlayContainer}>{children}</div>;

export default Overlay;
