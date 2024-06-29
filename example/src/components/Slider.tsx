import { css, cx } from "../../styled-system/css";

import {
  Slider as RACSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderProps as RACSliderProps,
} from "react-aria-components";
import { Label } from "./Field";
import { focusRing } from "./focusRing";

const trackStyles = css({
  rounded: "full",
  _groupOrientationHorizontal: {
    w: "full",
    h: "6px",
  },
  _groupOrientationVertical: {
    h: "full",
    w: "6px",
    ml: "50%",
    transform: "translateX(-50%)",
  },
  bgColor: "gray.300",
  _dark: { bgColor: "zinc.500" },
  _disabled: {
    bgColor: "gray.100",
    _dark: { bgColor: "zinc.800" },
  },
});

const thumbStyles = css({
  w: "6",
  h: "6",
  rounded: "full",
  bgColor: "gray.50",
  _dark: { bgColor: "zinc.900", borderColor: "gray.300" },
  borderWidth: "2px",
  borderColor: "gray.700",
  _dragging: {
    bgColor: "gray.700",
    _dark: { bgColor: "gray.300" },
  },
  _disabled: {
    borderColor: "gray.300",
    _dark: { borderColor: "zinc.700" },
  },
  _groupOrientationHorizontal: {
    mt: "6",
  },
  _groupOrientationVertical: {
    ml: "3",
  },
});

export type SliderProps<T> = Omit<RACSliderProps<T>, "className"> & {
  label?: string;
  thumbLabels?: string[];
  className?: string;
};

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: SliderProps<T>) {
  return (
    <RACSlider
      {...props}
      className={cx(
        props.className,
        css({
          gridTemplateColumns: "1fr auto",
          flexDir: "column",
          alignItems: "center",
          gap: "2",
          _orientationHorizontal: {
            display: "grid",
            w: "64",
          },
          _orientationVertical: {
            display: "flex",
          },
        })
      )}
    >
      <Label>{label}</Label>
      <SliderOutput
        className={css({
          fontSize: "sm",
          color: "gray.500",
          _dark: { color: "zinc.400" },
          fontWeight: "medium",
          _orientationVertical: {
            display: "none",
          },
        })}
      >
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
        }
      </SliderOutput>
      <SliderTrack
        data-group
        className={css({
          gridColumn: "span 2 / span 2",
          display: "flex",
          alignItems: "center",
          _orientationHorizontal: {
            h: "6",
          },
          _orientationVertical: {
            w: "6",
            h: "64",
          },
        })}
      >
        {({ state }) => (
          <>
            <div className={trackStyles} />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                rAC-label={thumbLabels?.[i]}
                className={cx(focusRing, thumbStyles)}
              />
            ))}
          </>
        )}
      </SliderTrack>
    </RACSlider>
  );
}
