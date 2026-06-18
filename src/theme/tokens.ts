/**
 * Gnosis Design Tokens
 *
 * This file is a single source of truth for all design tokens in the Gnosis design system.
 * Tokens are aligned with Figma design tokens.
 */

// ---------------------------------------------------------------------------
// COLORS
// ---------------------------------------------------------------------------
// Base hex values
export const colorBase = {
  primary: "#0046AB",
  secondary: "#9EA5A9",
  green: "#1B7855",
  orange: "#FF9C28",
  red: "#D12525",
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0046AB",
} as const;

// Full palette — each color generated with palletGenerator (color lib lighten/darken)
export const colors = {
  primary: {
    lightest25: "rgba(36, 125, 255, 0.25)",
    lightest50: "rgba(36, 125, 255, 0.5)",
    lightest: "#247DFF",
    lighter: "#0169FF",
    light: "#0054CD",
    base: "#0046AB",
    dark: "#003889",
    darker50: "rgba(0, 42, 103, 0.5)",
    darker: "#002A67",
    darkest: "#001C44",
  },
  secondary: {
    lightest: "#FFFFFF",
    lighter: "#F5F5F6",
    light: "#C1C5C8",
    base: "#9EA5A9",
    dark: "#7B858A",
    darker: "#5C6468",
    darkest: "#3D4245",
  },
  green: {
    lightest: "#2ECC90",
    lighter: "#29B47F",
    light50: "rgba(32, 144, 102, 0.5)",
    light: "#209066",
    base: "#1B7855",
    dark: "#166044",
    darker: "#104833",
    darkest: "#0B3022",
  },
  orange: {
    lightest: "#FFFBF6",
    lighter: "#FFE0BB",
    light: "#FFB763",
    base50: "rgba(255, 156, 40, 0.5)",
    base: "#FF9C28",
    dark: "#EC7F00",
    darker: "#B15F00",
    darkest: "#764000",
  },
  red: {
    lightest: "#F1B1B1",
    lighter: "#EA8787",
    light50: "rgba(223, 73, 73, 0.5)",
    light: "#DF4949",
    base: "#D12525",
    dark: "#A71E1E",
    darker: "#7D1616",
    darkest: "#540F0F",
  },
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0046AB",
} as const;

// ---------------------------------------------------------------------------
// TYPOGRAPHY
// ---------------------------------------------------------------------------
export const typography = {
  // Font families
  fontFamily: {
    body: '"Mulish", Arial, sans-serif',
  },

  // Type scale (aligned with Figma design tokens)
  fontSize: {
    xxs: "0.5rem", //  8px
    xs: "0.75rem", //  12px
    sm: "0.875rem", //  14px
    md: "1rem", //  16px  ← base
    lg: "1.125rem", //  18px
    xl: "1.375rem", //  22px
    "2xl": "1.75rem", //  28px
    "3xl": "2.125rem", //  34px
  },

  // Global line height
  lineHeight: {
    base: 1.5715,
  },

  // Font weights (browser defaults relied upon; explicit values used in components)
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

// ---------------------------------------------------------------------------
// SPACING
// ---------------------------------------------------------------------------
// Aligned with Figma design tokens
export const spacing = {
  none: "0", //  0px
  xxs: "0.25rem", //  4px
  xs: "0.5rem", //  8px
  sm: "0.75rem", //  12px
  md: "1rem", //  16px
  lg: "1.5rem", //  24px
  xl: "2rem", //  32px
} as const;

// ---------------------------------------------------------------------------
// BORDER RADIUS
// ---------------------------------------------------------------------------
// Aligned with Figma design tokens
export const borderRadius = {
  none: "0", // 0px
  sm: "5px", // 5px - buttons, cards, alerts, chips, dropdowns, tooltips, pagination
  xl: "30px", // 30px - rounded elements
  full: "50%", // circular elements
} as const;

// ---------------------------------------------------------------------------
// SHADOWS
// ---------------------------------------------------------------------------
// Shadow color = colors.secondary.light (#C1C5C8)
export const shadows = {
  sm: "0 3px 6px #C1C5C8", // dropdown, pagination, result card
  checkbox: "0px 0px 0px 9px rgba(36, 125, 255, 0.25)", // focus ring on checkboxes
} as const;

// ---------------------------------------------------------------------------
// BREAKPOINTS
// ---------------------------------------------------------------------------
// From src/theme/utils/breakpoints.ts
export const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  "3xl": 1920,
} as const;

// Corresponding media queries (min-width)
export const mediaQueries = {
  xs: "@media screen and (min-width: 320px)",
  sm: "@media screen and (min-width: 576px)",
  md: "@media screen and (min-width: 768px)",
  lg: "@media screen and (min-width: 992px)",
  xl: "@media screen and (min-width: 1200px)",
  xxl: "@media screen and (min-width: 1600px)",
  "3xl": "@media screen and (min-width: 1920px)",
} as const;

// ---------------------------------------------------------------------------
// Z-INDEX
// ---------------------------------------------------------------------------
export const zIndex = {
  base: 0,
  raised: 1,
  overlay: 2,
  drawer: 3,
  dropdown: 100,
  sidebar: 1001,
  modal: 1001,
} as const;

// ---------------------------------------------------------------------------
// TRANSITIONS
// ---------------------------------------------------------------------------
export const transitions = {
  fast: "0.2s",
  base: "0.3s",
  easeIn: "0.2s ease-in",
  easeInOut: "0.3s ease-in-out",
  easeOut: "0.2s ease",
} as const;
