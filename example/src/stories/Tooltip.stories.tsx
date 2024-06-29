import type { Meta } from "@storybook/react";
import { PrinterIcon, SaveIcon } from "lucide-react";
import { TooltipTrigger } from "react-aria-components";
import { css } from "../../styled-system/css";
import { Button } from "../components/Button";
import { Tooltip } from "../components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: any) => (
  <div className={css({ display: "flex", gap: "2" })}>
    <TooltipTrigger>
      <Button variant="secondary" className={css({ pl: "2", pr: "2" })}>
        <SaveIcon className={css({ w: "5", h: "5" })} />
      </Button>
      <Tooltip {...args}>Save</Tooltip>
    </TooltipTrigger>
    <TooltipTrigger>
      <Button variant="secondary" className={css({ pl: "2", pr: "2" })}>
        <PrinterIcon className={css({ w: "5", h: "5" })} />
      </Button>
      <Tooltip {...args}>Print</Tooltip>
    </TooltipTrigger>
  </div>
);
