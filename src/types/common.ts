import { FunctionComponent, PropsWithChildren } from "react";

// Common
export type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

// Define your custom FC type, which always includes children as an optional prop
export type FCWithChildren<P = object> = FunctionComponent<P & PropsWithChildren<P>>;

// Utility types
export type {
  PropsOf,
  ExtendableProps,
  InheritableElementProps,
  PolymorphicComponentProps,
  ValueOf,
} from "./utils";
