import { css, cx } from "../../styled-system/css";

import {
  ProgressBar as RACProgressBar,
  type ProgressBarProps as RACProgressBarProps,
} from "react-aria-components";
import { Label } from "./Field";

export type ProgressBarProps = Omit<RACProgressBarProps, "className"> & {
  label?: string;
  className?: string;
};

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <RACProgressBar
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" })
      )}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              gap: "2",
            })}
          >
            <Label>{label}</Label>
            <span
              className={css({
                fontSize: "sm",
                color: "gray.600",
                _dark: { color: "zinc.400" },
              })}
            >
              {valueText}
            </span>
          </div>
          <div
            className={css({
              w: "64",
              h: "2",
              borderRadius: "full",
              bgColor: {
                base: "gray.300",
                _dark: "zinc.700",
              },
              outlineStyle: "solid",
              ringWidth: "1px",
              ringOffset: "-1px",
              ringColor: "transparent",
              pos: "relative",
              overflow: "hidden",
            })}
          >
            <div
              className={cx(
                css({
                  pos: "absolute",
                  top: "0",
                  h: "full",
                  borderRadius: "full",
                  bgColor: {
                    base: "blue.600",
                    _dark: "blue.500",
                  },
                }),
                //TODO: fix the animation
                isIndeterminate
                  ? css({
                      left: "100%",
                      animationDuration: "1s",
                      animationTimingFunction: "out",
                      animation: "slideOutToRightFull",
                      animationIterationCount: "infinite",
                    })
                  : css({ left: "0" })
              )}
              style={{ width: (isIndeterminate ? 40 : percentage) + "%" }}
            />
          </div>
        </>
      )}
    </RACProgressBar>
  );
}
