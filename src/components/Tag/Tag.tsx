import React, { FC } from "react";
import { tag } from "./styles";

export type TagProps = React.HTMLAttributes<HTMLSpanElement>;

const Tag: FC<TagProps> = ({
  children,
  style = { backgroundColor: "#a3dfe3", color: "#5c5c5c" },
  ...rest
}) => (
  <span css={tag} style={style} {...rest}>
    {children}
  </span>
);

export default Tag;
