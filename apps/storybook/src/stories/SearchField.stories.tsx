import { css } from "../../styled-system/css";

import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { Button } from "../components/Button";
import { SearchField } from "../components/SearchField";

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Search",
  },
};

export default meta;

export const Example = (args: any) => <SearchField {...args} />;

export const Validation = (args: any) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <SearchField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
