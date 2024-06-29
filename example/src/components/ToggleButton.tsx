import {
  ToggleButton as RACToggleButton,
  type ToggleButtonProps as RACToggleButtonProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { focusRing } from "./focusRing";

const styles = css({
  px: "5",
  py: "2",
  fontSize: "sm",
  textAlign: "center",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  transitionTimingFunction: "default",
  transitionDuration: "fast",
  rounded: "lg",
  borderWidth: "1px",
  borderColor: "black/10",
  _dark: {
    borderColor: "white/10",
    shadow: "none",
    bgColor: "zinc.600",
    color: "zinc.100",
  },
  shadow: "buttonInset",
  cursor: "default",
  bgColor: "gray.100",
  _hover: { bgColor: "gray.200", _dark: { bgColor: "zinc.500" } },
  color: "gray.800",
  _selected: {
    bgColor: "gray.700",
    _hover: { bgColor: "gray.800", _dark: { bgColor: "slate.200" } },
    color: "white",
    _dark: { bgColor: "slate.300", color: "black" },
    _pressed: { bgColor: "gray.900", _dark: { bgColor: "slate.100" } },
  },
  _disabled: {
    bgColor: "gray.100",
    _dark: {
      bgColor: "zinc.800",
      color: "zinc.600",
      borderColor: "white/5",
    },
    color: "gray.300",
    borderColor: "black/5",
  },
  _pressed: { bgColor: "gray.300", _dark: { bgColor: "zinc.400" } },
});

export type ToggleButtonProps = Omit<RACToggleButtonProps, "className"> & {
  className?: string;
};

export function ToggleButton(props: ToggleButtonProps) {
  return (
    <RACToggleButton
      {...props}
      className={cx(focusRing, styles, props.className)}
    />
  );
}
