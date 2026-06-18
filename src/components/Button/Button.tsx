import React, { ReactElement, ReactNode, ElementType, SVGProps } from "react";
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
  iconBeforeProps?: SVGProps<SVGSVGElement>;
  iconAfter?: IconType;
  iconAfterProps?: SVGProps<SVGSVGElement>;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "link";
  underlined?: boolean;
  active?: boolean;
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
    iconBeforeProps,
    iconAfter,
    iconAfterProps,
    children,
    disabled,
    underlined,
    active,
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
    active: active,
  });

  const iconBeforePropsWithDefaults = {
    ...iconBeforeProps,
    height: iconBeforeProps?.height ?? iconSizes[size],
    className: classNames("icon", iconBeforeProps?.className),
    "data-testid": "prefix-icon",
  };

  const iconAfterPropsWithDefaults = {
    ...iconAfterProps,
    height: iconAfterProps?.height ?? iconSizes[size],
    className: classNames("icon", iconAfterProps?.className),
    "data-testid": "suffix-icon",
  };

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
        {PrefixIcon && <PrefixIcon {...iconBeforePropsWithDefaults} />}
        <span className="btn-text">{children}</span>
        {SuffixIcon && <SuffixIcon {...iconAfterPropsWithDefaults} />}
      </Component>
    </LazyMotion>
  );
};

export default Button;
