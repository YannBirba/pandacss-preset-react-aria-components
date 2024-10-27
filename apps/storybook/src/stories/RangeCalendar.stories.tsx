import type { Meta } from "@storybook/react";
import { RangeCalendar } from "../components/RangeCalendar";

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: Record<string, unknown>) => (
  <RangeCalendar aria-label="Trip dates" {...args} />
);
