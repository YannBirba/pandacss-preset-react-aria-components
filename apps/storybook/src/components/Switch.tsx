import React from "react";
import {
  Switch as AriaSwitch,
  type SwitchProps as RACSwitchProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { groupFocusRing } from "./focusRing";

const track = css({
  display: "flex",
  h: "4",
  w: "7",
  pl: "1px",
  pr: "1px",
  alignItems: "center",
  flexShrink: "0",
  cursor: "default",
  rounded: "full",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  transitionTimingFunction: "in-out",
  transitionDuration: "normal",
  boxShadow: "inner",
  borderWidth: "1px",
  borderColor: "transparent",
  bgColor: "gray.400",
  _dark: { bgColor: "zinc.400" },
  _groupPressed: {
    bgColor: "gray.500",
    _dark: { bgColor: "zinc.300" },
  },
  _groupSelected: {
    bgColor: "gray.700",
    _dark: { bgColor: "zinc.300" },
    _groupPressed: {
      bgColor: "gray.800",
      _dark: {
        bgColor: "zinc.200",
      },
    },
  },
  _groupDisabled: {
    bgColor: "gray.200",
    _dark: { bgColor: "zinc.700" },
  },
});

const handle = css({
  h: "3",
  w: "3",
  rounded: "full",
  bgColor: "white",
  _dark: { bgColor: "zinc.900" },
  outlineStyle: "solid",
  ringWidth: "1px",
  ringOffset: "-1px",
  ringColor: "transparent",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  transitionTimingFunction: "in-out",
  transitionDuration: "normal",
  transform: "translateX(0%)",
  _groupSelected: {
    transform: "translateX(100%)",
  },
  // _disabled: {

  // }
});

export type SwitchProps = Omit<RACSwitchProps, "className" | "children"> & {
  className?: string;
  children: React.ReactNode;
};

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      data-group
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
        })
      )}
    >
      <div className={cx(groupFocusRing, track)}>
        <span className={handle} />
      </div>
      {children}
    </AriaSwitch>
  );
}
