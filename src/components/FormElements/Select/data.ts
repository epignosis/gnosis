export interface ColourOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  isDisabled?: boolean;
}

type OptionType = { label: string; value: string; disabled?: boolean };

export const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export interface FlavourOption {
  value: string;
  label: string;
}

export const flavourOptions: FlavourOption[] = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "salted-caramel", label: "Salted Caramel" },
];

export interface GroupedOption {
  label: string;
  options: ColourOption[] | FlavourOption[];
}

export const groupedOptions: GroupedOption[] = [
  {
    label: "Colours",
    options: colourOptions,
  },
  {
    label: "Flavours",
    options: flavourOptions,
  },
];

export const defaultOptions: OptionType[] = [
  { label: "Rust", value: "rs" },
  { label: "JavaScript is the best in the world", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "GoLang", value: "go" },
  { label: "Python", value: "python" },
  { label: "PHP", value: "php" },
  { label: "C++", value: "c++" },
  { label: "C#", value: "c#" },
  { label: "Java", value: "java" },
  { label: "Disabled option", value: "disabled", disabled: true },
];

export const menuMaxWidthOptions: OptionType[] = [
  {
    label:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    value: "lorem",
  },
  { label: "JavaScript is the best in the world", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "GoLang", value: "go" },
  { label: "Python", value: "python" },
  { label: "PHP", value: "php" },
  { label: "C++", value: "c++" },
  { label: "C#", value: "c#" },
  { label: "Java", value: "java" },
  {
    label:
      "Disabled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    value: "lorem disabled",
    disabled: true,
  },
];
