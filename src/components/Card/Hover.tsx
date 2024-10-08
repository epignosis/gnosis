import React from "react";
import { m, Variants } from "framer-motion";
import { SerializedStyles } from "@emotion/react";
import { hoverContainer } from "./styles";
import { FCWithChildren } from "types/common";

export type HoverProps = FCWithChildren<{
  transparent?: boolean;
  className?: string;
}>;

const hoverContainerVariants: Variants = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

const hoverContent: Variants = {
  rest: {
    display: "none",
  },
  hover: {
    display: "block",
  },
};

const Hover: HoverProps = ({ transparent = false, className, children }) => (
  <m.div
    transition={{
      duration: 0.15,
      ease: "easeIn",
    }}
    variants={hoverContainerVariants}
    css={(theme): SerializedStyles => hoverContainer(theme, { transparent })}
    className={className}
    data-testid="card-hover"
  >
    <m.div className="hover-wrapper" variants={hoverContent}>
      {children}
    </m.div>
  </m.div>
);

export default Hover;
