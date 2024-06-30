import {
  DateInputProps,
  DateSegment,
  DateValue,
  DateField as RACDateField,
  DateFieldProps as RACDateFieldProps,
  DateInput as RACDateInput,
  ValidationResult,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Description, FieldError, Label, fieldGroupStyles } from "./Field";

export interface DateFieldProps<T extends DateValue>
  extends Omit<RACDateFieldProps<T>, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <RACDateField
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" })
      )}
    >
      {label && <Label>{label}</Label>}
      <DateInput />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACDateField>
  );
}

const segmentStyles = css({
  display: "inline",
  p: "0.5",
  borderRadius: "sm",
  outlineStyle: "solid",
  ringWidth: "0",
  caretColor: "transparent",
  color: {
    base: "gray.600",
    _typeLiteral: "gray.800",
    _dark: {
      base: "zinc.400",
      _typeLiteral: "zinc.200",
    },
  },
  _placeholder: {
    color: "gray.600",
    _dark: { color: "zinc.400" },
    fontStyle: "italic",
  },
  _disabled: { color: "gray.200", _dark: { color: "zinc.600" } },
  _focus: {
    bgColor: "blue.600",
    color: "white",
    _dark: { color: "white" },
  },
  _typeLiteral: {
    px: "0",
  },
});

export function DateInput(props: Omit<DateInputProps, "children">) {
  return (
    <RACDateInput
      data-group
      className={cx(
        fieldGroupStyles,
        css({
          display: "block",
          minW: "150px",
          pl: "2",
          pr: "2",
          pt: "1.5",
          pb: "1.5",
          fontSize: "sm",
        })
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </RACDateInput>
  );
}
