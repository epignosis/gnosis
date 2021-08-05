import { configResponsive } from "@umijs/hooks";

export const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const;

export const mq: Record<string, string> = Object.keys(breakpoints).reduce(
  (acc, breakpointName) => ({
    ...acc,
    [breakpointName]: `@media screen and (min-width: ${breakpoints[breakpointName]}px)`,
  }),
  {},
);

// Configures useResponsive hook
configResponsive(breakpoints);
