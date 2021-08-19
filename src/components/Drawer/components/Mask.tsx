import React, { FC } from "react";
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
  onClose: () => void;
};

const Mask: FC<MaskProps> = ({ onClose }) => (
  <m.div
    css={maskContainer}
    onClick={onClose}
    initial="hidden"
    animate="expanded"
    exit="hidden"
    variants={maskVariants}
    data-testid="mask"
  />
);

export default Mask;
