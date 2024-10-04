/* eslint-disable import/export */
import React, { ReactElement } from "react";
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import ThemeProvider from "../components/ThemeProvider/ThemeProvider";
import { FCWithChildren } from "types/common";

const AllTheProviders: FCWithChildren = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
