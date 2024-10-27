import {
  Meter as RACMeter,
  type MeterProps as RACMeterProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Label } from "./Field";
import { Icon } from "./Icon";

export type MeterProps = Omit<RACMeterProps, "className"> & {
  className?: string;
  label?: string;
};

export function Meter({ label, ...props }: MeterProps) {
  return (
    <RACMeter
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" }),
      )}
    >
      {({ percentage, valueText }) => (
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
              className={cx(
                css({ fontSize: "sm" }),
                percentage >= 80
                  ? css({ color: "red.600", _dark: { color: "red.500" } })
                  : css({ color: "gray.600", _dark: { color: "zinc.400" } }),
              )}
            >
              {percentage >= 80 && (
                <Icon
                  aria-label="Alert"
                  className={css({
                    display: "inline-block",
                    w: "4",
                    h: "4",
                    verticalAlign: "text-bottom",
                  })}
                  name="triangle-alert"
                />
              )}
              {` ${valueText}`}
            </span>
          </div>
          <div
            className={css({
              w: "64",
              h: "2",
              borderRadius: "full",
              bgColor: "gray.300",
              _dark: { bgColor: "zinc.700" },
              outlineStyle: "solid",
              ringWidth: "1px",
              ringOffset: "-1px",
              ringColor: "transparent",
              pos: "relative",
            })}
          >
            <div
              className={cx(
                css({
                  pos: "absolute",
                  top: "0",
                  left: "0",
                  h: "full",
                  borderRadius: "full",
                }),
                percentage < 70
                  ? css({ bgColor: "green.600" })
                  : percentage < 80
                    ? css({ bgColor: "orange.500" })
                    : css({ bgColor: "red.600" }),
              )}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </>
      )}
    </RACMeter>
  );
}
