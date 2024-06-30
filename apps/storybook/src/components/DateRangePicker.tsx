
import { CalendarIcon } from "lucide-react";
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { Button } from "./Button";
import { DateInput } from "./DateField";
import { Dialog } from "./Dialog";
import { Description, FieldError, FieldGroup, Label } from "./Field";
import { Popover } from "./Popover";
import { css, cx } from "../../styled-system/css";
import { RangeCalendar } from "./RangeCalendar";

export interface DateRangePickerProps<T extends DateValue>
  extends Omit<AriaDateRangePickerProps<T>, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" })
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup className={css({ minW: "208px", w: "auto" })}>
        <DateInput
          slot="start"
          className={css({
            px: "2",
            py: "1.5",
            fontSize: "sm",
          })}
        />
        <span
          aria-hidden="true"
          className={css({
            color: "gray.800",
            _dark: { color: "zinc.200", _groupDisabled: { color: "zinc.600" } },
            _groupDisabled: { color: "gray.200" },
          })}
        >
          –
        </span>
        <DateInput
          slot="end"
          className={css({
            flex: "1",
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
          <CalendarIcon aria-hidden className={css({ w: "4", h: "4" })} />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
}
