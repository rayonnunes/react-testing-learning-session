import React from "react";
import MockProvider from "./MockProvider";

interface RenderOptions {
    initialTheme?: "light" | "dark";
    initialAuth?: {
        id: string;
        name: string;
    };
}
import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function renderUI(ui: React.ReactElement, options: RenderOptions = {}) {
  console.log("options", options);
  return {
    user: userEvent.setup(),
    ...rtlRender(ui, {
      wrapper: ({ children }) => <MockProvider {...options}>{children}</MockProvider>,
    }),
  };
}