import React, { FC, MouseEvent } from "react";
import { SerializedStyles } from "@emotion/react";
import { CloseSVG } from "../../icons/";
import { chip } from "./styles";

export type Size = "md" | "lg";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: (e: MouseEvent) => void;
  size?: Size;
  children: string;
};

const Chip: FC<ChipProps> = ({ size = "md", onClose, children, style, ...rest }) => (
  <div css={(theme): SerializedStyles => chip(theme, { size })} style={style} {...rest}>
    {onClose && (
      <button onClick={onClose} aria-label={`Remove ${children}`} style={{ color: style?.color }}>
        <CloseSVG height={16} />
      </button>
    )}

    {children}
  </div>
);

export default Chip;
