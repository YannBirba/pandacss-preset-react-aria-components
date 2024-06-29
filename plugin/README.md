[![Downloads][npm-shield]][npm-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# 🐼 PandaCSS preset for React Aria Components

A [🐼 PandaCSS](https://panda-css.com/) preset for [React Aria Components](https://github.com/adobe/react-spectrum) inspired by the [React Aria Components TailwindCSS plugin](https://github.com/adobe/react-spectrum/tree/main/packages/tailwindcss-react-aria-components)

## Installation

```bash
npm install --save-dev pandacss-preset-react-aria-components
```

```bash
pnpm add -D pandacss-preset-react-aria-components
```

```bash
yarn add -D pandacss-preset-react-aria-components
```

```bash
bun add -D pandacss-preset-react-aria-components
```

## Usage

Add the preset to your PandaCSS configuration (`panda.config.ts`)

```ts
// file: panda.config.ts
import { defineConfig } from "@pandacss/dev";

// Import the preset. The name can be anything you want
import { RACPreset } from "pandacss-preset-react-aria-components";

export default defineConfig({
  presets: [
    RACPreset(),
    // Re-add the panda presets if you want to keep
    // the default keyframes, breakpoints, tokens
    // and textStyles provided by PandaCSS
    "@pandacss/dev/presets",
  ],
});
```

Now you get access access to all new conditions provided by the plugin. It does not override any existing conditions but alters the default to be more specific for "React Aria" components.

```tsx
// file: Tooltip.tsx
import { Tooltip as RACTooltip, OverlayArrow, type TooltipProps } from "react-aria-components";
import { css } from "../../styled-system/css";

const styles = css({
  bgColor: "slate.700",
  _placementBottom: {
    backgroundColor: "slate.700",
  },
  _placementTop: {
    backgroundColor: "slate.700",
  },
  _groupPressed: {
    backgroundColor: "slate.800",
  },
});

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RACTooltip data-group {...props} offset={10} className={styles}>
      <OverlayArrow>
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
          className={css({
            fill: "slate.700",
            _dark: { fill: "slate.600", stroke: "white/10" },
            stroke: "gray.800",
          })}
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </RACTooltip>
  );
}
```

## Attributions

- [Chakra](https://github.com/chakra-ui) team for creating [🐼 PandaCSS](https://panda-css.com/)
- [React Aria Components](https://github.com/adobe/react-spectrum) team for creating the components
- [PandaCSS typography plugin](https://github.com/milandekruijf/pandacss-preset-typography) team for the plugin boilerplate

[contributors-shield]: https://img.shields.io/github/contributors/YannBirba/pandacss-preset-react-aria-components.svg?style=for-the-badge
[contributors-url]: https://github.com/YannBirba/pandacss-preset-react-aria-components/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/YannBirba/pandacss-preset-react-aria-components.svg?style=for-the-badge
[forks-url]: https://github.com/YannBirba/pandacss-preset-react-aria-components/network/members
[stars-shield]: https://img.shields.io/github/stars/YannBirba/pandacss-preset-react-aria-components.svg?style=for-the-badge
[stars-url]: https://github.com/YannBirba/pandacss-preset-react-aria-components/stargazers
[issues-shield]: https://img.shields.io/github/issues/YannBirba/pandacss-preset-react-aria-components.svg?style=for-the-badge
[issues-url]: https://github.com/YannBirba/pandacss-preset-react-aria-components/issues
[license-shield]: https://img.shields.io/github/license/YannBirba/pandacss-preset-react-aria-components.svg?style=for-the-badge
[license-url]: https://github.com/YannBirba/pandacss-preset-react-aria-components/blob/main/LICENSE
[npm-shield]: https://img.shields.io/npm/dw/pandacss-preset-react-aria-components?style=for-the-badge
[npm-url]: https://www.npmjs.com/package/pandacss-preset-react-aria-components
