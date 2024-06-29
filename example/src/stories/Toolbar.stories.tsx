import { Group } from "react-aria-components";

import type { Meta } from "@storybook/react";
import { Icon } from "../components/Icon";
import { css } from "../../styled-system/css";
import { ToggleButton } from "../components/ToggleButton";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Toolbar } from "../components/Toolbar";
import { Separator } from "../components/Separator";

const meta: Meta<typeof Toolbar> = {
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: any) => (
  <Toolbar aria-label="Text formatting" {...args}>
    <Group aria-label="Style" className={css({ display: "contents" })}>
      <ToggleButton aria-label="Bold" className={css({ p: "2.5" })}>
        <Icon name="bold" className={css({ w: "4", h: "4" })} />
      </ToggleButton>
      <ToggleButton aria-label="Italic" className={css({ p: "2.5" })}>
        <Icon name="italic" className={css({ w: "4", h: "4" })} />
      </ToggleButton>
      <ToggleButton aria-label="Underline" className={css({ p: "2.5" })}>
        <Icon name="underline" className={css({ w: "4", h: "4" })} />
      </ToggleButton>
    </Group>
    <Separator
      orientation={args.orientation === "vertical" ? "horizontal" : "vertical"}
    />
    <Group aria-label="Clipboard" className={css({ display: "contents" })}>
      <Button variant="secondary">Copy</Button>
      <Button variant="secondary">Paste</Button>
      <Button variant="secondary">Cut</Button>
    </Group>
    <Separator
      orientation={args.orientation === "vertical" ? "horizontal" : "vertical"}
    />
    <Checkbox>Night Mode</Checkbox>
  </Toolbar>
);
