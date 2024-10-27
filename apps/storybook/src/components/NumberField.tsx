import {
  Button,
  type ButtonProps,
  NumberField as RACNumberField,
  type NumberFieldProps as RACNumberFieldProps,
  type ValidationResult,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  groupFieldBorderStyles,
} from "./Field";
import { Icon } from "./Icon";

export interface NumberFieldProps
  extends Omit<RACNumberFieldProps, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
}

export function NumberField({
  label,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <RACNumberField
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" }),
      )}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <Input />
        <div
          className={cx(
            groupFieldBorderStyles,
            css({
              display: "flex",
              flexDir: "column",
              borderInlineStartWidth: "2px",
            }),
          )}
        >
          <StepperButton slot="increment">
            <Icon className={css({ w: "4", h: "4" })} name="chevron-up" />
          </StepperButton>
          <div
            aria-hidden
            className={cx(
              groupFieldBorderStyles,
              css({ borderBottomWidth: "2px" }),
            )}
          />
          <StepperButton slot="decrement">
            <Icon className={css({ w: "4", h: "4" })} name="chevron-down" />
          </StepperButton>
        </div>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACNumberField>
  );
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={css({
        pl: "0.5",
        pr: "0.5",
        cursor: "default",
        color: "gray.500",
        _groupDisabled: { color: "gray.200", _dark: { color: "zinc.600" } },
        _dark: { color: "zinc.400" },
      })}
    />
  );
}
