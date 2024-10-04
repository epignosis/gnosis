import React from "react";
import { thumbnailContainer } from "./styles";
import { FCWithChildren } from "types/common";

export type ThumbnailProps = FCWithChildren<{ src: string; alt: string; children?: never }>;

const Thumbnail: ThumbnailProps = (props) => <img css={thumbnailContainer} {...props} />;

export default Thumbnail;
