import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
  type ValidationResult,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import {
  Description,
  FieldError,
  Input,
  Label,
  fieldBorderStyles,
} from "./Field";
import { focusRing } from "./focusRing";

const inputStyles = css({
  borderWidth: "2px",
  borderRadius: "md",
});

export type TextFieldProps = Omit<RACTextFieldProps, "className"> & {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
};

export const TextField = ({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) => {
  return (
    <RACTextField
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" }),
      )}
    >
      {label && <Label>{label}</Label>}
      <Input className={cx(focusRing, fieldBorderStyles, inputStyles)} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
};
