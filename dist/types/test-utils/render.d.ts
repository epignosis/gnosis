import { ReactElement } from "react";
import { RenderResult, RenderOptions } from "@testing-library/react";
declare const customRender: (ui: ReactElement, options?: RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement> | undefined) => RenderResult;
export * from "@testing-library/react";
export { customRender as render };
