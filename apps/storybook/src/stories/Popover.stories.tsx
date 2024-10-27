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

export const Example = (args: Record<string, unknown>) => (
  <DialogTrigger>
    <Button aria-label="Help" variant="icon">
      <Icon className={css({ w: "4", h: "4" })} name="circle-help" />
    </Button>
    <Popover {...args} className={css({ maxW: "250px" })}>
      <Dialog>
        <Heading
          className={css({
            fontSize: "lg",
            fontWeight: "semibold",
            mb: "2",
          })}
          slot="title"
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
