import { Checkbox } from "../components/Checkbox";

export default {
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isDisabled: false,
    children: "Checkbox",
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
};

export const Default = {
  args: {},
};
