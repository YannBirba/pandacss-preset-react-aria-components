import type { ReactNode } from "react";
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps,
  type ValidationResult,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Description, FieldError, Label } from "./Field";
import { Icon } from "./Icon";
import { focusRing } from "./focusRing";

export interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, "children" | "className"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "2" }),
      )}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RACCheckboxGroup>
  );
}

const checkboxStyles = css({
  base: {
    display: "flex",
    gap: "2",
    alignItems: "center",
    fontSize: "sm",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "default",
    transitionDuration: "fast",
    color: { base: "gray.800", _dark: "zinc.200" },
    _disabled: {
      color: { base: "gray.300", _dark: "zinc.600" },
    },
  },
});

const boxStyles = css({
  base: {
    w: "5",
    h: "5",
    flexShrink: "0",
    borderRadius: "sm",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "2px",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "default",
    transitionDuration: "fast",
    color: { base: "gray.700", _dark: "slate.300" },
    bgColor: {
      base: "white",
      _dark: "zinc.900",
      _groupSelected: "currentColor!",
    },
    borderColor: "gray.400",
    _groupSelected: {
      borderColor: "currentColor",
    },
    _groupInvalid: {
      color: {
        base: "red.700",
        _dark: "red.600",
        _groupPressed: {
          base: "red.800",
          _dark: "red.700",
        },
      },
      borderColor: "currentColor",
    },
    _groupDisabled: {
      borderColor: "currentColor",
      color: {
        base: "gray.200",
        _dark: "zinc.700",
      },
    },
  },
});

const iconStyles = css({
  w: "4",
  h: "4",
  color: {
    base: "white",
    _dark: "slate.900",
    _groupDisabled: {
      base: "gray.400",
      _dark: "slate.600",
    },
  },
});

export type CheckboxProps = Omit<RACCheckboxProps, "className"> & {
  className?: string;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <RACCheckbox
      data-group
      {...props}
      className={cx(props.className, checkboxStyles)}
    >
      {({ isSelected, isIndeterminate }) => (
        <>
          <div className={cx(boxStyles, focusRing)}>
            {isIndeterminate ? (
              <Icon className={iconStyles} name="minus" />
            ) : isSelected ? (
              <Icon className={iconStyles} name="check" />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </RACCheckbox>
  );
};
