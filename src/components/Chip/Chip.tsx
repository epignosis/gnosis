import React, { FC, MouseEvent } from "react";
import { SerializedStyles } from "@emotion/react";
import { CloseSVG } from "../../icons/";
import { chip } from "./styles";
import { IconType } from "types/common";

export type Size = "md" | "lg";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: (e: MouseEvent) => void;
  size?: Size;
  icon?: IconType;
  children: string;
};

const Chip: FC<ChipProps> = ({ size = "md", onClose, children, icon: Icon, style, ...rest }) => {
  const isFilterOn = Boolean(Icon);

  return (
    <div
      css={(theme): SerializedStyles => chip(theme, { size, isFilterOn })}
      style={style}
      {...rest}
    >
      {onClose && (
        <button onClick={onClose} aria-label={`Remove ${children}`} style={{ color: style?.color }}>
          {Icon && <Icon height={16} className="icon" data-testid="icon" />}
          <span className="close-icon">
            <CloseSVG height={16} />
          </span>
        </button>
      )}

      {children}
    </div>
  );
};

export default Chip;
