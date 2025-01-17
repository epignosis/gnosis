import React, { ReactElement, ReactNode, ElementType } from "react";
import { SerializedStyles } from "@emotion/react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import Loader from "../Loaders/Loader";
import { btnContainer } from "./styles";
import { iconSizes, spinnerWrapperVariants } from "./constants";
import { IconType, PolymorphicComponentProps } from "types/common";

export type Color =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "primaryLight"
  | "primaryDarker"
  | "white"
  | "orange";

export type Size = "sm" | "md" | "lg";

export type Props = {
  color?: Color;
  size?: Size;
  noGutters?: boolean;
  block?: boolean;
  isLoading?: boolean;
  iconBefore?: IconType;
  iconAfter?: IconType;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "link";
  underlined?: boolean;
};

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<C, Props>;

const Button = <C extends ElementType = "button">(props: ButtonProps<C>): ReactElement => {
  const {
    as,
    color = "primary",
    size = "md",
    variant = "solid",
    block = false,
    isLoading = false,
    noGutters = false,
    className = "",
    rounded = false,
    iconBefore,
    iconAfter,
    children,
    disabled,
    underlined,
    ...rest
  } = props;

  const Component = as || "button";
  const PrefixIcon = iconBefore;
  const SuffixIcon = iconAfter;
  const containerClassNames = classNames({
    [className]: Boolean(className),
    disabled: disabled || isLoading,
    rounded,
    solid: variant === "solid",
    outline: variant === "outline",
    ghost: variant === "ghost",
    linkButton: variant === "link",
    "icon-after": SuffixIcon,
    "icon-before": PrefixIcon,
    underlined: underlined,
  });

  return (
    <LazyMotion features={domAnimation}>
      <Component
        css={(theme): SerializedStyles => btnContainer(theme, { color, block, size, noGutters })}
        className={containerClassNames}
        {...((as === "button" || as === undefined) && { disabled: disabled || isLoading })}
        {...rest}
      >
        <AnimatePresence>
          {isLoading && (
            <m.div
              key={props.id ?? "spinner"}
              className="loading"
              aria-label="loading"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={spinnerWrapperVariants}
            >
              <Loader size="md" />
            </m.div>
          )}
        </AnimatePresence>
        {PrefixIcon && (
          <PrefixIcon height={iconSizes[size]} className="icon" data-testid="prefix-icon" />
        )}
        <span className="btn-text">{children}</span>
        {SuffixIcon && (
          <SuffixIcon height={iconSizes[size]} className="icon" data-testid="suffix-icon" />
        )}
      </Component>
    </LazyMotion>
  );
};

export default Button;
