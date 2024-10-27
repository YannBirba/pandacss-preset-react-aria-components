import { type FormProps, Form as RACForm } from "react-aria-components";
import { css, cx } from "../../styled-system/css";

export function Form(props: FormProps) {
  return (
    <RACForm
      {...props}
      className={cx(
        css({ display: "flex", flexDir: "column", gap: "4" }),
        props.className,
      )}
    />
  );
}
