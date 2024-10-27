import {
  Toolbar as RACToolbar,
  type ToolbarProps,
} from "react-aria-components";
import { css } from "../../styled-system/css";

export function Toolbar(props: ToolbarProps) {
  return (
    <RACToolbar
      {...props}
      className={css({
        display: "flex",
        gap: "2",
        _orientationHorizontal: { flexDir: "row" },
        _orientationVertical: { flexDir: "column" },
      })}
    />
  );
}
