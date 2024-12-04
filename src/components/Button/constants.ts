import { Variants } from "framer-motion";

export const iconSizes = {
  sm: 28,
  md: 30,
  lg: 32,
};

export const spinnerWrapperVariants: Variants = {
  hidden: {
    opacity: 0,
    marginInlineEnd: 6,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    opacity: 1,
    marginInlineEnd: 6,
    transition: {
      duration: 0.1,
    },
  },
};
