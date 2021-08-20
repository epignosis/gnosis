import React, { FC } from "react";
import { thumbnailContainer } from "./styles";

export type ThumbnailProps = FC<{ src: string; alt: string; children?: never }>;

const Thumbnail: ThumbnailProps = (props) => <img css={thumbnailContainer} {...props} />;

export default Thumbnail;
