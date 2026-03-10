import { applyPureReactInVue } from 'veaury'
import { createRoot } from 'react-dom/client'
import { setVeauryOptions } from 'veaury'
import { withVModel, inputLike, checkboxLike, selectLike, toggleLike } from './utils/withVModel'

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
} from '@epignosis_llc/gnosis'

// ─── Veaury init ────────────────────────────────────────────────
setVeauryOptions({ react: { createRoot } })

// ─── Presentational components ──────────────────────────────────
export const ThemeProvider = applyPureReactInVue(ReactThemeProvider)
export const Button = applyPureReactInVue(ReactButton)
export const Loader = applyPureReactInVue(ReactLoader)
export const Chip = applyPureReactInVue(ReactChip)
export const Avatar = applyPureReactInVue(ReactAvatar)
export const Tag = applyPureReactInVue(ReactTag)
export const Badge = applyPureReactInVue(ReactBadge)
export const Alert = applyPureReactInVue(ReactAlert)
export const ProgressBar = applyPureReactInVue(ReactProgressBar)
export const Tooltip = applyPureReactInVue(ReactTooltip)
export const Modal = applyPureReactInVue(ReactModal)
export const Pagination = applyPureReactInVue(ReactPagination)
export const Tabs = applyPureReactInVue(ReactTabs)
export const Result = applyPureReactInVue(ReactResult)
export const Drawer = applyPureReactInVue(ReactDrawer)
export const Sidebar = applyPureReactInVue(ReactSidebar)
export const Card = applyPureReactInVue(ReactCard)
export const Grid = applyPureReactInVue(ReactGrid)
export const Table = applyPureReactInVue(ReactTable)
export const Dropdown = applyPureReactInVue(ReactDropdown)
export const StatusTag = applyPureReactInVue(ReactStatusTag)
export const Breadcrumbs = applyPureReactInVue(ReactBreadcrumbs)
export const ToastNotification = applyPureReactInVue(ReactToastNotification)
export const Heading = applyPureReactInVue(ReactHeading)
export const Text = applyPureReactInVue(ReactText)
export const Label = applyPureReactInVue(ReactLabel)
export const FormError = applyPureReactInVue(ReactFormError)
export const InputError = applyPureReactInVue(ReactInputError)

// ─── Form components (with v-model) ────────────────────────────
export const Input = withVModel(ReactInput, inputLike)
export const Textarea = withVModel(ReactTextarea, inputLike)
export const Select = withVModel(ReactSelect, selectLike)
export const Checkbox = withVModel(ReactCheckbox, checkboxLike)
export const CheckboxGroup = withVModel(ReactCheckboxGroup, inputLike)
export const RadioButtonGroup = withVModel(ReactRadioButtonGroup, inputLike)
export const RadioGroup = withVModel(ReactRadioGroup, inputLike)
export const Radio = withVModel(ReactRadio, checkboxLike)
export const ToggleSwitch = withVModel(ReactToggleSwitch, toggleLike)

// ─── Theme & types ──────────────────────────────────────────────
export { DefaultTheme, typeScale }
export { withVModel, type VModelMapping } from './utils/withVModel'
export type {
  GnosisTheme, TableProps, Column, Row,
  DropdownProps, DropdownItem, TableHandlers,
  StatusTagColors, Color,
} from '@epignosis_llc/gnosis'
