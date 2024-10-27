import {
  Collection,
  Header,
  type ListBoxItemProps,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  type ListBoxProps as RACListBoxProps,
  Section,
  type SectionProps,
  composeRenderProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Icon } from "./Icon";
import { focusRing } from "./focusRing";

interface ListBoxProps<T>
  extends Omit<RACListBoxProps<T>, "layout" | "orientation" | "className"> {
  className?: string;
}

export function ListBox<T extends object>({
  children,
  ...props
}: ListBoxProps<T>) {
  return (
    <RACListBox
      {...props}
      className={cx(
        props.className,
        css({
          ringWidth: "0",
          p: "1",
          borderWidth: "1px",
          borderColor: { base: "gray.300", _dark: "zinc.600" },
          borderRadius: "lg",
        }),
      )}
    >
      {children}
    </RACListBox>
  );
}

export const itemStyles = css({
  pos: "relative",
  display: "flex",
  alignItems: "center",
  gap: "8",
  cursor: "default",
  userSelect: "none",
  py: "1.5",
  px: "2.5",
  borderRadius: "md",
  willChange: "transform",
  fontSize: "sm",
  color: { base: "slate.700", _dark: "zinc.300" },
  "&:not([data-selected])": {
    _hover: { bgColor: "slate.200", _dark: { bgColor: "zinc.700" } },
  },
  ringOffset: "-2",
  _selected: {
    bgColor: "blue.600",
    color: "white",
    "&:has(+[data-selected])": {
      borderBottomRadius: "0",
    },
    "&+[data-selected]": {
      borderTopRadius: "0",
    },
    ringOffset: "-4",
    ringColor: "white",
    _dark: { ringColor: "white" },
  },
  _disabled: {
    color: { base: "slate.300", _dark: "zinc.600" },
  },
});

export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <RACListBoxItem
      {...props}
      className={cx(focusRing, itemStyles)}
      data-group
      textValue={textValue}
    >
      <>
        {props.children}
        <div
          className={css({
            pos: "absolute",
            left: "4",
            right: "4",
            bottom: "0",
            h: "1px",
            bgColor: "white/20",
            display: "none",
            "[data-group][data-selected]:has(+[data-selected]) &": {
              display: "block",
            },
          })}
        />
      </>
    </RACListBoxItem>
  );
}

export const dropdownItemStyles = css({
  display: "flex",
  alignItems: "center",
  gap: "4",
  cursor: "default",
  userSelect: "none",
  py: "2",
  pl: "3",
  pr: "1",
  borderRadius: "lg",
  outlineStyle: "solid",
  ringWidth: "0px",
  fontSize: "sm",
  color: { base: "gray.900", _dark: "zinc.100" },
  _disabled: {
    color: { base: "gray.300", _dark: "zinc.600" },
  },
  _focus: {
    bgColor: "blue.600",
    color: "white",
  },
  "&:not([data-focused])[data-open]": {
    bgColor: {
      base: "gray.100",
      _dark: "zinc.700/60",
    },
  },
});

export function DropdownItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <RACListBoxItem
      {...props}
      className={dropdownItemStyles}
      data-group
      textValue={textValue}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              flex: "1",
              gap: "2",
              fontWeight: "normal",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            {children}
          </span>
          <span
            className={css({ display: "flex", alignItems: "center", w: "5" })}
          >
            {isSelected && (
              <Icon className={css({ w: "4", h: "4" })} name="check" />
            )}
          </span>
        </>
      ))}
    </RACListBoxItem>
  );
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string;
}

export function DropdownSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return (
    <Section
      className={css({
        _first: { mt: "-5px" },
        _after: { content: "''", display: "block", h: "5px" },
      })}
    >
      <Header
        className={css({
          fontSize: "sm",
          fontWeight: "semibold",
          color: "gray.500",
          _dark: {
            color: "zinc.300",
            bgColor: "zinc.700/60",
            borderTopColor: "zinc.700",
            borderBottomColor: "zinc.700",
          },
          px: "4",
          py: "1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          pos: "sticky",
          top: "-5px",
          mt: "-1px",
          mx: "-1",
          zIndex: "10",
          bgColor: "gray.100/60",
          backdropFilter: "blur(20px)",
          "@supports (-moz-appearance:none)": {
            bgColor: "gray.100",
          },
          borderTopWidth: "1px",
          borderBottomWidth: "1px",
          borderColor: "gray.200",
          "&+*": { mt: "1" },
        })}
      >
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
