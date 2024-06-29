
import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { Button } from "../components/Button";
import { css } from "../../styled-system/css";
import { DateRangePicker } from "../components/DateRangePicker";

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Trip dates",
  },
};

export default meta;

export const Example = (args: any) => <DateRangePicker {...args} />;

export const Validation = (args: any) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <DateRangePicker {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};

// TODO: fix