import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { css } from "../../styled-system/css";
import { Button } from "../components/Button";
import { DateField } from "../components/DateField";

const meta: Meta<typeof DateField> = {
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Event date",
  },
};

export default meta;

export const Example = (args: Record<string, unknown>) => (
  <DateField {...args} />
);

export const Validation = (args: Record<string, unknown>) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <DateField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
