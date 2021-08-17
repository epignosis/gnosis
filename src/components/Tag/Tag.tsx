import { SerializedStyles } from "@emotion/react";
import React, { FC } from "react";
import { tag } from "./styles";

export type TagProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "css"> & {
  bgColor?: "course" | "card" | "new";
};

const Tag: FC<TagProps> = ({ bgColor = "course", children, ...rest }) => {
  return (
    <span css={(theme): SerializedStyles => tag(theme, { bgColor })} {...rest}>
      {children}
    </span>
  );
};

export default Tag;
