import React, { FC, MouseEvent } from "react";
import { SerializedStyles } from "@emotion/react";
import { chip } from "./styles";
import { CloseSVG } from "@icons/core";

export type Size = "md" | "lg";

export type ChipProps = Omit<React.HTMLAttributes<HTMLDivElement>, "css"> & {
  onClose?: (e: MouseEvent) => void;
  size?: "md" | "lg";
  bgColor?: "filter";
  children: string;
};

const Chip: FC<ChipProps> = (props) => {
  const { size = "md", bgColor = "filter", onClose, children, ...rest } = props;

  return (
    <div css={(theme): SerializedStyles => chip(theme, { size, bgColor })} {...rest}>
      {onClose && (
        <button onClick={onClose} aria-label={`Remove ${children}`}>
          <CloseSVG height={16} />
        </button>
      )}

      {children}
    </div>
  );
};

export default Chip;
