import type { ReactNode } from "react";
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
  type ValidationResult,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Description, FieldError, Label } from "./Field";
import { focusRing } from "./focusRing";

export type RadioGroupProps = Omit<
  RACRadioGroupProps,
  "children" | "className"
> & {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
};

export function RadioGroup(props: RadioGroupProps) {
  return (
    <RACRadioGroup
      data-group
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "2" }),
      )}
    >
      <Label>{props.label}</Label>
      <div
        className={css({
          display: "flex",
          gap: "2",
          _groupOrientationVertical: {
            flexDir: "column",
            gap: "2",
          },
        })}
      >
        {props.children}
      </div>
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RACRadioGroup>
  );
}

const styles = css({
  w: "5",
  h: "5",
  borderRadius: "full",
  borderWidth: "2px",
  bgColor: {
    base: "white",
    _dark: "zinc.900",
  },
  transitionProperty: "all",
  transitionTimingFunction: "default",
  transitionDuration: "fast",
  borderColor: {
    base: "gray.400",
    _dark: "zinc.400",
  },
  _groupSelected: {
    borderWidth: "7px",
    borderColor: "gray.700",
    _dark: { borderColor: "slate.300" },
  },
  _groupInvalid: {
    borderColor: "red.700",
    _dark: { borderColor: "red.600" },
  },
  _groupDisabled: {
    borderColor: "gray.200",
    _dark: { borderColor: "zinc.700" },
  },
  _groupPressed: {
    _selected: {
      borderColor: "gray.500",
      _dark: { borderColor: "zinc.500" },
    },
  },
});
export type RadioProps = Omit<RACRadioProps, "className"> & {
  className?: string;
};

export function Radio(props: RadioProps) {
  return (
    <RACRadio
      {...props}
      className={cx(
        props.className,
        css({
          display: "flex",
          gap: "2",
          alignItems: "center",
          color: "gray.800",
          _disabled: { color: "gray.300", _dark: { color: "zinc.600" } },
          _dark: { color: "zinc.200" },
          fontSize: "sm",
          transitionProperty:
            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
          transitionTimingFunction: "default",
          transitionDuration: "fast",
        }),
      )}
      data-group
    >
      <div className={cx(focusRing, styles)} />
      {/* biome-ignore lint/complexity/noUselessFragments: <children can be a render function so we need to wrap it in a fragment> */}
      <>{props.children}</>
    </RACRadio>
  );
}
