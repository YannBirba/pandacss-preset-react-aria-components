import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Icon as IconComponent } from "../components/Icon";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "icon"],
    },
  },
  args: {
    isDisabled: false,
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: <IconComponent name="heart" />,
  },
};
