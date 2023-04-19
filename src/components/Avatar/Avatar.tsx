import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import { avatar } from "./styles";
import { colors } from "@theme/default/colors";

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type AvatarBaseProps = React.HTMLAttributes<HTMLElement> & {
  size?: Size;
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
  bgColor = `${colors.orange.base}`,
  alt,
  children,
  ...rest
}) => {
  return (
    <figure css={(theme): SerializedStyles => avatar(theme, { size, bgColor })} {...rest}>
      {Boolean(src) && <img src={src} alt={alt} />}
      {children !== undefined && <span data-testid="avatar-children-container">{children}</span>}
    </figure>
  );
};

export default Avatar;
