import {
  Group,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  Text,
  type GroupProps,
  type FieldErrorProps as RACFieldErrorProps,
  type InputProps as RACInputProps,
  type TextProps,
} from "react-aria-components";
import { Styles, css, cx } from "../../styled-system/css";
import { focusRing } from "./focusRing";

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={cx(
        css({
          fontSize: "sm",
          color: { base: "gray.500", _dark: "zinc.400" },
          fontWeight: "medium",
          cursor: "default",
          w: "fit",
        }),
        props.className
      )}
    />
  );
}

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={cx(
        css({ fontSize: "sm", color: "gray.600" }),
        props.className
      )}
    />
  );
}

export type FieldErrorProps = Omit<RACFieldErrorProps, "className"> & {
  className?: string;
};

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={cx(props.className, css({ fontSize: "sm", color: "red.600" }))}
    />
  );
}

export const fieldBorder = {
  borderColor: { base: "gray.300", _dark: "zinc.500" },
  _focusWithin: {
    borderColor: "gray.600",
    _dark: { borderColor: "zinc.300" },
  },
  _invalid: {
    borderColor: "red.600!",
    _dark: { borderColor: "red.600!" },
  },
  _disabled: {
    borderColor: "gray.200",
    _dark: { borderColor: "zinc.700" },
  },
} as Styles;

export const fieldBorderStyles = css(fieldBorder);

export const groupFieldBorderStyles = css({
  ...Object.keys(fieldBorder).reduce((acc, key) => {
    if (key.startsWith("_")) {
      acc[`_group${key[1].toUpperCase()}${key.slice(2)}`] = fieldBorder[key];
    }
    return acc;
  }, {}),
});

export const fieldGroupBaseStyles = css({
  display: "flex",
  alignItems: "center",
  h: "9",
  bgColor: { base: "white", _dark: "zinc.900" },
  borderWidth: "2px",
  borderRadius: "lg",
  overflow: "hidden",
});

export const fieldGroupStyles = cx(
  fieldBorderStyles,
  fieldGroupBaseStyles,
  focusRing
);

export function FieldGroup(props: GroupProps) {
  return <Group data-group {...props} className={fieldGroupStyles} />;
}

export type InputProps = Omit<RACInputProps, "className"> & {
  className?: string;
};

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={cx(
        props.className,
        css({
          px: "2",
          py: "1.5",
          flex: "1",
          minW: "0",
          outlineStyle: "solid",
          ringWidth: "0",
          bgColor: "white",
          _dark: { bgColor: "zinc.900", color: "zinc.200" },
          fontSize: "sm",
          color: "gray.800",
          _disabled: { color: "gray.200", _dark: { color: "zinc.600" } },
        })
      )}
    />
  );
}
