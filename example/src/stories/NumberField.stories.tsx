import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { css } from "../../styled-system/css";
import { NumberField } from "../components/NumberField";
import { Button } from "../components/Button";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Cookies",
  },
};

export default meta;

export const Example = (args: any) => <NumberField {...args} />;

export const Validation = (args: any) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <NumberField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
