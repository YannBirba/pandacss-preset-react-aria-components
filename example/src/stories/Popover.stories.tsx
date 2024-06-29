import { css } from "../../styled-system/css";

import type { Meta } from "@storybook/react";
import { DialogTrigger, Heading } from "react-aria-components";
import { Button } from "../components/Button";
import { Dialog } from "../components/Dialog";
import { Icon } from "../components/Icon";
import { Popover } from "../components/Popover";

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    showArrow: true,
  },
};

export default meta;

export const Example = (args: any) => (
  <DialogTrigger>
    <Button variant="icon" aria-label="Help">
      <Icon name="circle-help" className={css({ w: "4", h: "4" })} />
    </Button>
    <Popover {...args} className={css({ maxW: "250px" })}>
      <Dialog>
        <Heading
          slot="title"
          className={css({
            fontSize: "lg",
            fontWeight: "semibold",
            mb: "2",
          })}
        >
          Help
        </Heading>
        <p className={css({ fontSize: "sm" })}>
          For help accessing your account, please contact support.
        </p>
      </Dialog>
    </Popover>
  </DialogTrigger>
);
