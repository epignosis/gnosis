import { SerializedStyles } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import { avatar } from "./styles";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type AvatarBaseProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

export type AvatarProps =
  | {
      children: ReactNode;
      bgColor?: string;
      src?: never;
      alt?: never;
    }
  | {
      src: string;
      alt?: string;
      children?: never;
      bgColor?: never;
    };

const Avatar: FC<AvatarBaseProps & AvatarProps> = ({
  src,
  size = "sm",
  bgColor = "#0E59BB",
  alt,
  children,
  className,
}) => {
  return (
    <figure
      css={(theme): SerializedStyles => avatar(theme, { size, bgColor })}
      className={className}
    >
      {Boolean(src) && <img src={src} alt={alt} />}
      {children !== undefined && <span data-testid="avatar-children-container">{children}</span>}
    </figure>
  );
};

export default Avatar;
