import React, { FC } from "react";
import { tag } from "./styles";

export type TagProps = React.HTMLProps<HTMLSpanElement>;

const Tag: FC<TagProps> = ({ children, ...rest }) => {
  const restSpanPropsWithDefaults = {
    style: { backgroundColor: "#a3dfe3", color: "#5c5c5c" },
    ...rest,
  };

  return (
    <span css={tag} {...restSpanPropsWithDefaults}>
      {children}
    </span>
  );
};

export default Tag;
