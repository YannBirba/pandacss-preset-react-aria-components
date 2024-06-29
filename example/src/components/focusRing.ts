import { Styles, css } from "../../styled-system/css";

const focusRingGenericStyles = {
  outlineStyle: "solid",
  ringColor: {
    base: "blue.600",
    _dark: "blue.500",
  },
  ringOffset: "0.5",
  ringWidth: {
    base: "0",
  },
} as Styles;

export const focusRing = css({
  ...focusRingGenericStyles,
  ringWidth: {
    ...focusRingGenericStyles.ringWidth,
    _focusVisible: "2px",
  },
});

export const groupFocusRing = css({
  ...focusRingGenericStyles,
  ringWidth: {
    ...focusRingGenericStyles.ringWidth,
    _groupFocusVisible: "2px",
  },
});

export const peerFocusRing = css({
  ...focusRingGenericStyles,
  ringWidth: {
    ...focusRingGenericStyles.ringWidth,
    _peerFocusVisible: "2px",
  },
});
