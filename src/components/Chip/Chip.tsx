import React, { FC, MouseEvent, ReactNode, useRef } from "react";
import { SerializedStyles } from "@emotion/react";
import { CloseSVG } from "../../icons/";
import Tooltip from "../Tooltip/Tooltip";
import { useIsOverflowX } from "./helpers";
import { chip } from "./styles";
import { IconType } from "types/common";

export type Size = "md" | "lg";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: (e: MouseEvent) => void;
  size?: Size;
  icon?: IconType;
  children: ReactNode | string;
  closeButtonAriaLabel?: string;
  maxWidth?: number;
};

const Chip: FC<ChipProps> = ({
  size = "md",
  onClose,
  children,
  icon: Icon,
  style,
  closeButtonAriaLabel,
  maxWidth,
  ...rest
}) => {
  const isFilterOn = Boolean(Icon);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const isOverflow = useIsOverflowX(componentRef);

  return (
    <div
      css={(theme): SerializedStyles =>
        chip(theme, { size, isFilterOn, maxWidth: `${maxWidth}px` ?? "auto" })
      }
      style={style}
      {...rest}
    >
      {onClose && (
        <button onClick={onClose} aria-label={closeButtonAriaLabel} style={{ color: style?.color }}>
          {Icon && <Icon className="icon" data-testid="icon" />}
          <span className="close-icon">
            <CloseSVG height={16} />
          </span>
        </button>
      )}
      <Tooltip content={children} disabled={!isOverflow}>
        <div ref={componentRef} className="has-overflow">
          {children}
        </div>
      </Tooltip>
    </div>
  );
};

export default Chip;
