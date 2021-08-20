import React, { FC } from "react";
import { overlayContainer } from "./styles";

export type OverlayProps = FC;

const Overlay: OverlayProps = ({ children }) => <div css={overlayContainer}>{children}</div>;

export default Overlay;
