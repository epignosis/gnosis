import React, { FC, MouseEvent, ReactElement } from "react";
import { SerializedStyles } from "@emotion/react";
import { CloseSVG } from "../../icons/";
import { chip } from "./styles";

export type Size = "md" | "lg";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: (e: MouseEvent) => void;
  size?: Size;
  icon?: ReactElement;
  isFilter?: boolean;
  children: string;
};

const Chip: FC<ChipProps> = ({
  size = "md",
  onClose,
  children,
  isFilter,
  icon,
  style,
  ...rest
}) => {
  const isFilterOn = Boolean(isFilter);

  return (
    <div
      css={(theme): SerializedStyles => chip(theme, { size, isFilterOn })}
      style={style}
      {...rest}
    >
      {onClose && (
        <button onClick={onClose} aria-label={`Remove ${children}`} style={{ color: style?.color }}>
          {isFilterOn && <span className="icon">{icon}</span>}
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
