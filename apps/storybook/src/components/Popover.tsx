import {
  OverlayArrow,
  PopoverContext,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps,
  useSlottedContext,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";

export interface PopoverProps
  extends Omit<RACPopoverProps, "children" | "classBame"> {
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const styles = css({
  bgColor: "white",
  _dark: {
    bgColor: "zinc.900/70",
    backdropFilter: "blur(40px)",
    backdropSaturate: "2",
    borderColor: "white/15",
    color: "zinc.300",
  },
  shadow: "2xl",
  borderRadius: "xl",
  bgClip: "padding-box",
  borderWidth: "1px",
  borderColor: "black/10",
  color: "slate.700",
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

export const Popover = ({
  children,
  showArrow,
  className,
  ...props
}: PopoverProps) => {
  const popoverContext = useSlottedContext(PopoverContext);
  const isSubmenu = popoverContext?.trigger === "SubmenuTrigger";
  let offset = showArrow ? 12 : 8;
  offset = isSubmenu ? offset - 6 : offset;
  return (
    <RACPopover offset={offset} {...props} className={cx(styles, className)}>
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            className={css({
              display: "block",
              fill: "white",
              _dark: { fill: "#1f1f21", stroke: "zinc.600" },
              strokeWidth: "1px",
              stroke: "black/10",
              _groupPlacementBottom: {
                rotate: "180deg",
              },
              _groupPlacementLeft: {
                rotate: "-90deg",
              },
              _groupPlacementRight: {
                rotate: "90deg",
              },
            })}
            height={12}
            viewBox="0 0 12 12"
            width={12}
          >
            <path d="M0 0 L6 6 L12 0" />
            <title>Close</title>
          </svg>
        </OverlayArrow>
      )}
      {children}
    </RACPopover>
  );
};
