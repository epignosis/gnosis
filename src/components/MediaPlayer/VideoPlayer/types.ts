import { ReactPlayerProps } from "react-player";

export type PlayerProps = Omit<ReactPlayerProps, "url"> & {
  src: ReactPlayerProps["url"];
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};
