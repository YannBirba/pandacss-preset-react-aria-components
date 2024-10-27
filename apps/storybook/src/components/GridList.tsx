import {
  Button,
  type GridListItemProps,
  GridList as RACGridList,
  GridListItem as RACGridListItem,
  type GridListProps as RACGridListProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Checkbox } from "./Checkbox";
import { focusRing } from "./focusRing";

export type GridListProps<T extends object> = Omit<
  RACGridListProps<T>,
  "className"
> & {
  className?: string;
};

export const GridList = <T extends object>({
  children,
  ...props
}: GridListProps<T>) => {
  return (
    <RACGridList
      {...props}
      className={cx(
        props.className,
        css({
          overflow: "auto",
          pos: "relative",
          borderWidth: "1px",
          _dark: { borderColor: "zinc.600" },
          borderRadius: "lg",
        }),
      )}
    >
      {children}
    </RACGridList>
  );
};

const itemStyles = css({
  pos: "relative",
  display: "flex",
  gap: "3",
  cursor: "default",
  userSelect: "none",
  pt: "2",
  pb: "2",
  pl: "3",
  pr: "3",
  fontSize: "sm",
  color: "gray.900",
  _dark: {
    color: "zinc.200",
    borderTopColor: "zinc.700",
    borderBottomColor: "zinc.700",
  },
  borderTopWidth: "1px",
  borderBottomWidth: "1px",
  borderColor: "transparent",
  _first: {
    borderTopWidth: "0px",
    borderRadiusTopLeft: "md",
    borderRadiusTopRight: "md",
  },
  _last: {
    borderBottomWidth: "0",
    borderRadiusBottomRight: "md",
    borderRadiusBottomLeft: "md",
    mb: "0",
  },
  mb: "-1px",
  ringOffset: "-2px",
  _hover: { bgColor: "gray.100", _dark: { bgColor: "zinc.700/60" } },
  _selected: {
    bgColor: "blue.100",
    _dark: {
      bgColor: "blue.700/30",
      borderTopColor: "blue.900",
      borderBottomColor: "blue.900",
    },
    _hover: { bgColor: "blue.200", _dark: { bgColor: "blue.700/40" } },
    borderTopColor: "blue.200",
    borderBottomColor: "blue.200",
    zIndex: "20",
  },
  _disabled: {
    color: {
      base: "slate.300",
      _dark: "zinc.600",
    },
    zIndex: "10",
  },
});

export function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <RACGridListItem
      textValue={textValue}
      {...props}
      className={cx(focusRing, itemStyles)}
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionMode === "multiple" && selectionBehavior === "toggle" && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </RACGridListItem>
  );
}
