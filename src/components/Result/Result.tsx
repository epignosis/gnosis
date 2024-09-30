import React, { FC, ReactNode } from "react";
import { useResponsive } from "ahooks";
import { SerializedStyles } from "@emotion/react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import { container } from "./styles";
import { IconType } from "types/common";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Size = "md" | "lg";

export type ResultProps = React.HTMLAttributes<HTMLElement> & {
  icon?: IconType | string;
  title: string;
  info?: string;
  heading?: Heading;
  size?: Size;
  footer?: ReactNode;
  hideInfo?: boolean;
  hasBorder?: boolean;
};

type IconSize = {
  md: number;
  lg: number;
};

const getIconSize = (isMd: boolean): IconSize => ({
  md: isMd ? 100 : 75,
  lg: isMd ? 180 : 135,
});

const Result: FC<ResultProps> = ({
  icon,
  title,
  info,
  heading = "h2",
  size = "lg",
  footer,
  hideInfo = false,
  hasBorder = false,
  ...rest
}) => {
  const { md } = useResponsive();
  const Icon = icon;
  const iconSize = getIconSize(md);

  return (
    <article
      data-testid="empty-state-container"
      css={(theme): SerializedStyles => container(theme, { size, hasBorder })}
      {...rest}
    >
      {Icon && (
        <>
          {typeof Icon === "string" ? (
            <img src={Icon} height={iconSize[size]} data-testid="result-icon" alt="result image" />
          ) : (
            <Icon height={iconSize[size]} data-testid="result-icon" />
          )}
        </>
      )}
      {!hideInfo && (
        <div className="body">
          <>
            <Heading as={heading} className="result-header" data-testid="result-header">
              {title}
            </Heading>
            {info && (
              <Text fontSize={size} as="p" data-testid="result-info">
                {info}
              </Text>
            )}
          </>
        </div>
      )}
      {footer && <footer>{footer}</footer>}
    </article>
  );
};

export default Result;
