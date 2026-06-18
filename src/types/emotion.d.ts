import "@emotion/react";
import { GnosisTheme } from "@theme/default/defaultTheme";

declare module "@emotion/react" {
  export interface Theme extends GnosisTheme {}
}
