import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    docs: {
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themes.dark
        : themes.light,
    },
    layout: "padded",
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: "light",
      themes: {
        light: "",
        dark: "dark",
      },
    }),
    (Story) => Story(),
  ],

  tags: ["autodocs"],
};

export default preview;
