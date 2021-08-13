import "@emotion/react";
import { GnosisTheme } from "@theme/default/defaultTheme";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends GnosisTheme {}
}
