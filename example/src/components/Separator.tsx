import {
  Separator as RACSeparator,
  SeparatorProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";

const styles = css({
  bgColor: "gray.300",
  _dark: { bgColor: "zinc.600" },
  w: "1px",
  _orientationVertical: { h: "1px", w: "full" },
});

export function Separator(props: SeparatorProps) {
  return <RACSeparator {...props} className={cx(styles, props.className)} />;
}
