import {
  type DateValue,
  DatePicker as RACDatePicker,
  type DatePickerProps as RACDatePickerProps,
  type ValidationResult,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { DateInput } from "./DateField";
import { Dialog } from "./Dialog";
import { Description, FieldError, FieldGroup, Label } from "./Field";
import { Icon } from "./Icon";
import { Popover } from "./Popover";

export interface DatePickerProps<T extends DateValue>
  extends Omit<RACDatePickerProps<T>, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
}

export const DatePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) => {
  return (
    <RACDatePicker
      data-group
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" }),
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className={css({ minW: "208px", w: "auto" })}>
        <DateInput
          className={css({
            flex: "1",
            minW: "150px",
            px: "2",
            py: "1.5",
            fontSize: "sm",
          })}
        />
        <Button
          className={css({
            w: "6",
            mr: "1",
            borderRadius: "sm",
            ringOffset: "0",
          })}
          variant="icon"
        >
          <Icon className={css({ w: "4", h: "4" })} name="calendar" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <Calendar />
        </Dialog>
      </Popover>
    </RACDatePicker>
  );
};
