import React, { FC, MouseEvent } from "react";
import { SerializedStyles } from "@emotion/react";
import { chip } from "./styles";
import { CloseSVG } from "@icons/core";

export type Size = "md" | "lg";

export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: (e: MouseEvent) => void;
  size?: Size;
  children: string;
};

const Chip: FC<ChipProps> = ({ size = "md", onClose, children, ...rest }) => {
  const restDivPropsWithDefaults = {
    style: { backgroundColor: "#5c5c5c", color: "#fff" },
    ...rest,
  };

  return (
    <div css={(theme): SerializedStyles => chip(theme, { size })} {...restDivPropsWithDefaults}>
      {onClose && (
        <button
          onClick={onClose}
          aria-label={`Remove ${children}`}
          style={{ color: restDivPropsWithDefaults.style.color }}
        >
          <CloseSVG height={16} />
        </button>
      )}

      {children}
    </div>
  );
};

export default Chip;
