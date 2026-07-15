import React, { FC, MouseEvent } from "react";
import { m, Variants } from "framer-motion";
import { maskContainer } from "./styles";

const maskVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  expanded: {
    opacity: 1,
  },
};

export type MaskProps = {
  visible?: boolean;
  onClick?: (e: MouseEvent) => void;
};

const Mask: FC<MaskProps> = ({ visible = true, onClick }) => (
  <m.div
    css={maskContainer(visible)}
    onClick={onClick}
    initial="hidden"
    animate="expanded"
    exit="hidden"
    variants={maskVariants}
    data-testid="mask"
    data-overlay={visible}
  />
);

export default Mask;
