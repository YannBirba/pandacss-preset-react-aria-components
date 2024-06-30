import {
  DateValue,
  DatePicker as RACDatePicker,
  ValidationResult,
  type DatePickerProps as RACDatePickerProps,
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
        css({ display: "flex", flexDir: "column", gap: "1" })
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
          variant="icon"
          className={css({
            w: "6",
            mr: "1",
            borderRadius: "sm",
            ringOffset: "0",
          })}
        >
          <Icon name="calendar" className={css({ w: "4", h: "4" })} />
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
