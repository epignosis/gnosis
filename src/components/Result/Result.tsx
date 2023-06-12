import React, { FC, ReactNode } from "react";
import { useResponsive } from "ahooks";
import { SerializedStyles } from "@emotion/react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { container } from "./styles";
import { IconType } from "types/common";
import { TypographyLevels } from "@theme/utils/typography";

export type Size = "md" | "lg";

export type ResultProps = React.HTMLAttributes<HTMLElement> & {
  icon?: IconType | string;
  title: string;
  info?: string;
  size?: Size;
  footer?: ReactNode;
  isTable?: boolean;
  callbackInfo?: string;
  callbackFn?: () => void;
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
  footer,
  size = "lg",
  callbackFn,
  callbackInfo,
  isTable,
  ...rest
}) => {
  const { md } = useResponsive();
  const Icon = icon;
  const iconSize = getIconSize(md);

  return (
    <article
      data-testid="empty-state-container"
      css={(theme): SerializedStyles => container(theme, { size })}
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

      <div className="body">
        {isTable ? (
          <>
            <Text fontSize={size as TypographyLevels}>{title}</Text>
            <br />
            <Text fontSize={size as TypographyLevels}>{info}</Text>
            <Button variant="link" className="link-text" onClick={callbackFn}>
              <Text fontSize={size as TypographyLevels}>{callbackInfo}</Text>
            </Button>
          </>
        ) : (
          <>
            <Heading as="h3">{title}</Heading>
            {info && (
              <Text fontSize={size as TypographyLevels} as="p">
                {info}
              </Text>
            )}
          </>
        )}
      </div>
      {footer && <footer>{footer}</footer>}
    </article>
  );
};

export default Result;
