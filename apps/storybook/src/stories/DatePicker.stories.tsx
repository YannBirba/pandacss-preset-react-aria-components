
import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { css } from "../../styled-system/css";
import { DatePicker } from "../components/DatePicker";
import { Button } from "../components/Button";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Event date",
  },
};

export default meta;

export const Example = (args: any) => <DatePicker {...args} />;

export const Validation = (args: any) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <DatePicker {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
