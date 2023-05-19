import React, { FC } from "react";
import { tag } from "./styles";

export type TagProps = React.HTMLAttributes<HTMLSpanElement>;

const Tag: FC<TagProps> = ({ children, style, ...rest }) => (
  <span css={tag} style={style} {...rest}>
    {children}
  </span>
);

export default Tag;
