import { type DialogProps, Dialog as RACDialog } from "react-aria-components";
import { css, cx } from "../../styled-system/css";

export function Dialog(props: DialogProps) {
  return (
    <RACDialog
      {...props}
      className={cx(
        css({
          outlineStyle: "solid",
          ringWidth: "0px",
          p: "6",
          maxH: "inherit",
          overflow: "auto",
          pos: "relative",
          _placement: {
            "> &": {
              p: "4",
            },
          },
        }),
        props.className,
      )}
    />
  );
}
