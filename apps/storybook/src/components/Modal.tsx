import {
  ModalOverlay,
  type ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import { css } from "../../styled-system/css";

const overlayStyles = css({
  pos: "fixed",
  top: "0",
  left: "0",
  w: "full",
  h: "var(--visual-viewport-height)",
  isolation: "isolate",
  zIndex: "20",
  bgColor: "black/15",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  p: "4",
  textAlign: "center",
  backdropFilter: "blur(16px)",
  _entering: {
    animation: "animateIn",
  },
  _exiting: {
    animation: "animateOut",
  },
});

const modalStyles = css({
  w: "full",
  maxW: "md",
  maxH: "full",
  borderRadius: "2xl",
  bgColor: "white",
  _dark: {
    bgColor: "zinc.800/70",
    backdropFilter: "blur(40px)",
    backdropSaturate: "2",
    color: "zinc.300",
    borderColor: "white/10",
  },
  textAlign: "left",
  verticalAlign: "middle",
  color: "zinc.700",
  shadow: "2xl",
  bgClip: "padding-box",
  borderWidth: "1px",
  borderColor: "black/10",
  _entering: {
    animation: "animateIn",
  },
  _exiting: {
    animation: "animateOut",
  },
});

export function Modal(props: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <RACModal {...props} className={modalStyles} />
    </ModalOverlay>
  );
}
