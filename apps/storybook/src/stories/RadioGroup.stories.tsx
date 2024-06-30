import { Form } from "react-aria-components";
import { css } from "../../styled-system/css";
import { Radio, RadioGroup } from "../components/RadioGroup";
import { Button } from "../components/Button";

export default {
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Favorite sport",
    isDisabled: false,
    isRequired: false,
    description: "",
    children: (
      <>
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </>
    ),
  },
};

export const Default = {
  args: {},
};

export const Validation = (args: any) => (
  <Form
    className={css({
      display: "flex",
      flexDir: "column",
      gap: "2",
      alignItems: "flex-start",
    })}
  >
    <RadioGroup {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);

Validation.args = {
  isRequired: true,
};
