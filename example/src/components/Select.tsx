import { css, cx } from "../../styled-system/css";

import React from "react";
import {
  Button,
  ListBox,
  type ListBoxItemProps,
  Select as RACSelect,
  type SelectProps as RACSelectProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { Description, FieldError, Label } from "./Field";
import { Icon } from "./Icon";
import { DropdownItem, DropdownSection, DropdownSectionProps } from "./ListBox";
import { Popover } from "./Popover";
import { focusRing } from "./focusRing";

const styles = css({
  display: "flex",
  alignItems: "center",
  textAlign: "start",
  gap: "4",
  w: "full",
  cursor: "default",
  borderWidth: "1px",
  borderColor: "black/10",
  _dark: {
    borderColor: "white/10",
    shadow: "none",
    bgColor: "zinc.700",
    color: "zinc.300",
  },
  shadow: "buttonInset",
  borderRadius: "lg",
  pl: "3",
  pr: "2",
  pt: "2",
  pb: "2",
  minW: "150px",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  transitionTimingFunction: "default",
  transitionDuration: "fast",
  bgColor: "gray.50",
  color: "gray.800",
  _hover: { bgColor: "gray.100", _dark: { bgColor: "zinc.600" } },
  _groupInvalid: { borderColor: "red.600" },
  _pressed: { bgColor: "gray.200", _dark: { bgColor: "zinc.500" } },
  _disabled: {
    color: "gray.200",
    _dark: {
      color: "zinc.600",
      bgColor: "zinc.800",
      borderColor: "white/5",
    },
  },
});

export interface SelectProps<T extends object>
  extends Omit<RACSelectProps<T>, "children" | "className"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  className?: string;
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <RACSelect
      data-group
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" })
      )}
    >
      {label && <Label>{label}</Label>}
      <Button className={cx(focusRing, styles)}>
        <SelectValue
          className={css({
            flex: "1",
            fontSize: "sm",
            fontStyle: "italic",
          })}
        />
        <Icon
          name="chevron-down"
          className={css({
            w: "4",
            h: "4",
            color: "gray.600",
            _dark: { color: "zinc.400" },
            _groupDisabled: { color: "gray.200", _dark: { color: "zinc.600" } },
          })}
        />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className={css({ minW: "var(--trigger-width)" })}>
        <ListBox
          items={items}
          className={css({
            ring: "none",
            ringOffset: "0",
            p: "1",
            maxH: "inherit",
            overflow: "auto",
            clipPath: "inset(0 0 0 0 round .75rem)",
          })}
        >
          {children}
        </ListBox>
      </Popover>
    </RACSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export function SelectSection<T extends object>(
  props: DropdownSectionProps<T>
) {
  return <DropdownSection {...props} />;
}
