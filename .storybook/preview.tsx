import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Preview } from "@storybook/react";
import React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";

const light = createTheme();
const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

const themes = { light, dark };
const themeNames = Object.keys(themes);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySort: {
    order: ["Introduction", "Getting Started"],
  },
  viewMode: "docs",
};

const preview: Preview = {
  decorators: [
    (Story) => {
      const theme = select("Theme", themeNames, themeNames[0], "Themes");

      return (
        <ThemeProvider theme={themes[theme]}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
    withKnobs,
  ],
};

export default preview;
