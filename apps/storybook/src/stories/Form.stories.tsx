import type { Meta } from "@storybook/react";
import { css } from "../../styled-system/css";
import { Button } from "../components/Button";
import { DateField } from "../components/DateField";
import { Form } from "../components/Form";
import { TextField } from "../components/TextField";

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: Record<string, unknown>) => (
  <Form {...args}>
    <TextField isRequired label="Email" name="email" type="email" />
    <DateField isRequired label="Birth date" />
    <div
      className={css({
        display: "flex",
        gap: "2",
      })}
    >
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  </Form>
);
