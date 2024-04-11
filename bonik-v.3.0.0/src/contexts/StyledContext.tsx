"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

// CUSTOM THEME
import theme from "theme";
import GlobalStyles from "theme/global-styles/globalStyles";

export default function StyledContext({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
