import * as React from "react";
import { applyPureReactInVue, setVeauryOptions } from "veaury";
import { createRoot } from "react-dom/client";
import {
  ThemeProvider as ReactThemeProvider,
  Button as ReactButton,
  Loader as ReactLoader,
  Chip as ReactChip,
  Avatar as ReactAvatar,
  Tag as ReactTag,
  Badge as ReactBadge,
  Alert as ReactAlert,
  ProgressBar as ReactProgressBar,
  Tooltip as ReactTooltip,
  Modal as ReactModal,
  Pagination as ReactPagination,
  Tabs as ReactTabs,
  Result as ReactResult,
  Drawer as ReactDrawer,
  Sidebar as ReactSidebar,
  Card as ReactCard,
  Grid as ReactGrid,
  Table as ReactTable,
  Dropdown as ReactDropdown,
  StatusTag as ReactStatusTag,
  Breadcrumbs as ReactBreadcrumbs,
  ToastNotification as ReactToastNotification,
  Heading as ReactHeading,
  Text as ReactText,
  Label as ReactLabel,
  Input as ReactInput,
  FormError as ReactFormError,
  InputError as ReactInputError,
  Textarea as ReactTextarea,
  Select as ReactSelect,
  Checkbox as ReactCheckbox,
  CheckboxGroup as ReactCheckboxGroup,
  RadioButtonGroup as ReactRadioButtonGroup,
  RadioGroup as ReactRadioGroup,
  Radio as ReactRadio,
  ToggleSwitch as ReactToggleSwitch,
  DefaultTheme,
  typeScale,
} from "@epignosis_llc/gnosis";
import {
  applyPureReactInVueWithVModel,
  inputLike,
  checkboxLike,
  selectLike,
  toggleLike,
} from "./utils/applyPureReactInVueWithVModel";

// ─── Veaury init ────────────────────────────────────────────────
setVeauryOptions({ react: { createRoot } });

// Unwrap ESM/CJS interop: @epignosis_llc/gnosis may export components as { default: Component }, which React.createElement rejects (expects function/class)
function resolveComponent(Comp: unknown): React.ComponentType<any> {
  if (Comp && typeof Comp === "object" && "default" in (Comp as object)) {
    const defaultComp = (Comp as { default?: React.ComponentType<any> }).default;
    return (defaultComp ?? Comp) as React.ComponentType<any>;
  }
  return Comp as React.ComponentType<any>;
}

// Same as applyPureReactInVue but wraps the React component with ThemeProvider so it receives theme (e.g. in Storybook) without a root ThemeProvider
function withTheme(ReactComponent: React.ComponentType<any>) {
  const ThemeProvider = resolveComponent(ReactThemeProvider);
  const WrappedWithTheme = (props: any) =>
    React.createElement(
      ThemeProvider,
      null,
      React.createElement(resolveComponent(ReactComponent), props),
    );
  WrappedWithTheme.displayName = `WithTheme(${
    ReactComponent.displayName || ReactComponent.name || "Component"
  })`;
  return WrappedWithTheme;
}

// Same as applyPureReactInVue but wraps the React component with ThemeProvider so it receives theme (e.g. in Storybook) without a root ThemeProvider
function applyPureReactInVueWithTheme(ReactComponent: React.ComponentType<any>) {
  return applyPureReactInVue(withTheme(ReactComponent));
}

// ─── Presentational components ──────────────────────────────────
export const ThemeProvider = applyPureReactInVue(ReactThemeProvider);
export const Button = applyPureReactInVueWithTheme(ReactButton);
export const Loader = applyPureReactInVueWithTheme(ReactLoader);
export const Chip = applyPureReactInVueWithTheme(ReactChip);
export const Avatar = applyPureReactInVueWithTheme(ReactAvatar);
export const Tag = applyPureReactInVueWithTheme(ReactTag);
export const Badge = applyPureReactInVueWithTheme(ReactBadge);
export const Alert = applyPureReactInVueWithTheme(ReactAlert);
export const ProgressBar = applyPureReactInVueWithTheme(ReactProgressBar);
export const Tooltip = applyPureReactInVueWithTheme(ReactTooltip);
export const Modal = applyPureReactInVueWithTheme(ReactModal);
export const Pagination = applyPureReactInVueWithTheme(ReactPagination);
export const Tabs = applyPureReactInVueWithTheme(ReactTabs);
export const Result = applyPureReactInVueWithTheme(ReactResult);
export const Drawer = applyPureReactInVueWithTheme(ReactDrawer);
export const Sidebar = applyPureReactInVueWithTheme(ReactSidebar);
export const Card = applyPureReactInVueWithTheme(ReactCard);
export const Grid = applyPureReactInVueWithTheme(ReactGrid);
export const Table = applyPureReactInVueWithTheme(ReactTable);
export const Dropdown = applyPureReactInVueWithTheme(ReactDropdown);
export const StatusTag = applyPureReactInVueWithTheme(ReactStatusTag);
export const Breadcrumbs = applyPureReactInVueWithTheme(ReactBreadcrumbs);
export const ToastNotification = applyPureReactInVueWithTheme(ReactToastNotification);
export const Heading = applyPureReactInVueWithTheme(ReactHeading);
export const Text = applyPureReactInVueWithTheme(ReactText);
export const Label = applyPureReactInVueWithTheme(ReactLabel);
export const FormError = applyPureReactInVueWithTheme(ReactFormError);
export const InputError = applyPureReactInVueWithTheme(ReactInputError);

// ─── Form components (with v-model) ────────────────────────────
export const Input = applyPureReactInVueWithVModel(withTheme(ReactInput), inputLike);
export const Textarea = applyPureReactInVueWithVModel(withTheme(ReactTextarea), inputLike);
export const Select = applyPureReactInVueWithVModel(withTheme(ReactSelect), selectLike);
export const Checkbox = applyPureReactInVueWithVModel(withTheme(ReactCheckbox), checkboxLike);
export const CheckboxGroup = applyPureReactInVueWithVModel(
  withTheme(ReactCheckboxGroup),
  inputLike,
);
export const RadioButtonGroup = applyPureReactInVueWithVModel(
  withTheme(ReactRadioButtonGroup),
  inputLike,
);
export const RadioGroup = applyPureReactInVueWithVModel(withTheme(ReactRadioGroup), inputLike);
export const Radio = applyPureReactInVueWithVModel(withTheme(ReactRadio), checkboxLike);
export const ToggleSwitch = applyPureReactInVueWithVModel(withTheme(ReactToggleSwitch), toggleLike);

// ─── Theme & types ──────────────────────────────────────────────
export { DefaultTheme, typeScale };
export {
  applyPureReactInVueWithVModel,
  type VModelMapping,
} from "./utils/applyPureReactInVueWithVModel";
export type {
  GnosisTheme,
  TableProps,
  Column,
  Row,
  DropdownProps,
  DropdownItem,
  TableHandlers,
  StatusTagColors,
  Color,
} from "@epignosis_llc/gnosis";
