import { createElement } from "react";
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
import { withVModel, inputLike, checkboxLike, selectLike, toggleLike } from "./utils/withVModel";

// ─── Veaury init ────────────────────────────────────────────────
setVeauryOptions({ react: { createRoot } });

// Wrap React components with ThemeProvider so they receive theme when used in Vue (e.g. Storybook) without a root ThemeProvider
function wrapWithTheme(ReactComponent: React.ComponentType<any>) {
  return applyPureReactInVue((props: any) =>
    createElement(ReactThemeProvider, null, createElement(ReactComponent, props)),
  );
}

// ─── Presentational components ──────────────────────────────────
export const ThemeProvider = applyPureReactInVue(ReactThemeProvider);
export const Button = wrapWithTheme(ReactButton);
export const Loader = wrapWithTheme(ReactLoader);
export const Chip = wrapWithTheme(ReactChip);
export const Avatar = wrapWithTheme(ReactAvatar);
export const Tag = wrapWithTheme(ReactTag);
export const Badge = wrapWithTheme(ReactBadge);
export const Alert = wrapWithTheme(ReactAlert);
export const ProgressBar = wrapWithTheme(ReactProgressBar);
export const Tooltip = wrapWithTheme(ReactTooltip);
export const Modal = wrapWithTheme(ReactModal);
export const Pagination = wrapWithTheme(ReactPagination);
export const Tabs = wrapWithTheme(ReactTabs);
export const Result = wrapWithTheme(ReactResult);
export const Drawer = wrapWithTheme(ReactDrawer);
export const Sidebar = wrapWithTheme(ReactSidebar);
export const Card = wrapWithTheme(ReactCard);
export const Grid = wrapWithTheme(ReactGrid);
export const Table = wrapWithTheme(ReactTable);
export const Dropdown = wrapWithTheme(ReactDropdown);
export const StatusTag = wrapWithTheme(ReactStatusTag);
export const Breadcrumbs = wrapWithTheme(ReactBreadcrumbs);
export const ToastNotification = wrapWithTheme(ReactToastNotification);
export const Heading = wrapWithTheme(ReactHeading);
export const Text = wrapWithTheme(ReactText);
export const Label = wrapWithTheme(ReactLabel);
export const FormError = wrapWithTheme(ReactFormError);
export const InputError = wrapWithTheme(ReactInputError);

// ─── Form components (with v-model) ────────────────────────────
export const Input = withVModel(wrapWithTheme(ReactInput), inputLike);
export const Textarea = withVModel(wrapWithTheme(ReactTextarea), inputLike);
export const Select = withVModel(wrapWithTheme(ReactSelect), selectLike);
export const Checkbox = withVModel(wrapWithTheme(ReactCheckbox), checkboxLike);
export const CheckboxGroup = withVModel(wrapWithTheme(ReactCheckboxGroup), inputLike);
export const RadioButtonGroup = withVModel(wrapWithTheme(ReactRadioButtonGroup), inputLike);
export const RadioGroup = withVModel(wrapWithTheme(ReactRadioGroup), inputLike);
export const Radio = withVModel(wrapWithTheme(ReactRadio), checkboxLike);
export const ToggleSwitch = withVModel(wrapWithTheme(ReactToggleSwitch), toggleLike);

// ─── Theme & types ──────────────────────────────────────────────
export { DefaultTheme, typeScale };
export { withVModel, type VModelMapping } from "./utils/withVModel";
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
