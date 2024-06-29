import {
  OverlayArrow,
  Tooltip as RACTooltip,
  TooltipProps as RACTooltipProps,
} from "react-aria-components";
import { css } from "../../styled-system/css";

export interface TooltipProps extends Omit<RACTooltipProps, "children"> {
  children: React.ReactNode;
}

const styles = css({
  bgColor: "slate.700",
  _dark: { bgColor: "slate.600", borderColor: "white/10", shadow: "none" },
  borderWidth: "1px",
  borderColor: "slate.800",
  shadow: "buttonInset",
  color: "white",
  fontSize: "sm",
  rounded: "lg",
  filter:
    "drop-shadow(0 10px 8px rgb(0 0 0 / .04)) drop-shadow(0 4px 3px rgb(0 0 0 / .1))",
  willChange: "transform",
  px: "3",
  py: "1",
  // TODO: fix this
  _entering: {
    animation: "animateIn fadeIn",
    _placementBottom: {
      animation: "slideInFromTop",
    },
    _placementTop: {
      animation: "slideInFromBottom",
    },
    _placementLeft: {
      animation: "slideInFromRight",
    },
    _placementRight: {
      animation: "slideInFromLeft",
    },
    transitionTimingFunction: "out",
    transitionDuration: "normal",
  },
  _exiting: {
    animation: "animateOut fadeOut",
    _placementBottom: {
      animation: "slideOutToTop",
    },
    _placementTop: {
      animation: "slideOutToBottom",
    },
    _placementLeft: {
      animation: "slideOutToRight",
    },
    _placementRight: {
      animation: "slideOutToLeft",
    },
    transitionTimingFunction: "in",
    transitionDuration: "fast",
  },
});

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RACTooltip data-group {...props} offset={10} className={styles}>
      <OverlayArrow>
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
          className={css({
            fill: "slate.700",
            _dark: { fill: "slate.600", stroke: "white/10" },
            stroke: "gray.800",
          })}
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </RACTooltip>
  );
}
