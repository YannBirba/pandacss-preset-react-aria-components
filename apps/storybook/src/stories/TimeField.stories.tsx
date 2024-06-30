
import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { TimeField } from "../components/TimeField";
import { css } from "../../styled-system/css";
import { Button } from "../components/Button";

const meta: Meta<typeof TimeField> = {
  component: TimeField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Event time",
  },
};

export default meta;

export const Example = (args: any) => <TimeField {...args} />;

export const Validation = (args: any) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <TimeField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
