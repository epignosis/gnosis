import { CustomOption } from "./types";

export interface ColourOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  isDisabled?: boolean;
  testId?: string;
}

export const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", testId: "ocean" },
  { value: "blue", label: "Blue", color: "#0052CC", testId: "blue" },
  { value: "purple", label: "Purple", color: "#5243AA", testId: "purple" },
  { value: "red", label: "Red", color: "#FF5630", testId: "red" },
  { value: "orange", label: "Orange", color: "#FF8B00", testId: "orange" },
  { value: "yellow", label: "Yellow", color: "#FFC400", testId: "yellow" },
  { value: "green", label: "Green", color: "#36B37E", testId: "green" },
  { value: "forest", label: "Forest", color: "#00875A", testId: "forest" },
  { value: "slate", label: "Slate", color: "#253858", testId: "slate" },
  { value: "silver", label: "Silver", color: "#666666", testId: "silver" },
];

export interface FlavourOption {
  value: string;
  label: string;
  testId?: string;
}

export const flavourOptions: FlavourOption[] = [
  { value: "vanilla", label: "Vanilla", testId: "vanilla" },
  { value: "chocolate", label: "Chocolate", testId: "chocolate" },
  { value: "strawberry", label: "Strawberry", testId: "strawberry" },
  { value: "salted-caramel", label: "Salted Caramel", testId: "salted-caramel" },
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

export const defaultOptions: CustomOption[] = [
  { label: "Rust", value: "rs", testId: "rust" },
  { label: "JavaScript is the best in the world", value: "js", testId: "javascript" },
  { label: "TypeScript", value: "ts", testId: "typescript" },
  { label: "GoLang", value: "go", testId: "golang" },
  { label: "Python", value: "python", testId: "python" },
  { label: "PHP", value: "php", testId: "php" },
  { label: "C++", value: "c++", testId: "c++" },
  { label: "C#", value: "c#", testId: "c#" },
  { label: "Java", value: "java", testId: "java" },
  { label: "Krust", value: "Krust", testId: "krust" },
  { label: "DontGo", value: "DontGo", hint: "Contact us", testId: "dontgo" },
  { label: "Cobol", value: "Cobol", testId: "cobol" },
  { label: "Haskell", value: "Haskell", testId: "haskell" },
  { label: "Erlang", value: "Erlang", testId: "erlang" },
  { label: "Perl", value: "Perl", testId: "perl" },
  { label: "Ruby", value: "Ruby", testId: "ruby" },
  { label: "Scala", value: "Scala", testId: "scala" },
  { label: "Kotlin", value: "Kotlin", testId: "kotlin" },
  { label: "Disabled option", value: "disabled", testId: "disabled-option", disabled: true },
];

export const menuMaxWidthOptions: CustomOption[] = [
  {
    label:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    value: "lorem",
    testId: "lorem",
  },
  { label: "JavaScript is the best in the world", value: "js", testId: "javascript" },
  { label: "TypeScript", value: "ts", testId: "typescript" },
  { label: "GoLang", value: "go", testId: "golang" },
  { label: "Python", value: "python", testId: "python" },
  { label: "PHP", value: "php", testId: "php" },
  { label: "C++", value: "c++", testId: "c++" },
  { label: "C#", value: "c#", testId: "c#" },
  { label: "Java", value: "java", testId: "java" },
  {
    label:
      "Disabled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    value: "lorem disabled",
    testId: "lorem-disabled",
    disabled: true,
  },
];
