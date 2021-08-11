import * as EmotionReact from "@emotion/react";
import { GnosisTheme } from "@theme/default/defaultTheme";

declare module "@emotion/react" {
  export { EmotionReact as default };
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends GnosisTheme {}
}
