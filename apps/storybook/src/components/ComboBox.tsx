import {
  ListBox,
  ListBoxItemProps,
  ComboBox as RACComboBox,
  ValidationResult,
  type ComboBoxProps as RACComboBoxProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Button } from "./Button";
import { Description, FieldError, FieldGroup, Input, Label } from "./Field";
import { Icon } from "./Icon";
import { DropdownItem, DropdownSection, DropdownSectionProps } from "./ListBox";
import { Popover } from "./Popover";

export interface ComboBoxProps<T extends object>
  extends Omit<RACComboBoxProps<T>, "children" | "className"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode | ((item: T) => React.ReactNode);
  className?: string;
}

export const ComboBox = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: ComboBoxProps<T>) => {
  return (
    <RACComboBox
      data-group
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", flexDir: "column", gap: "1" })
      )}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <Input />
        <Button
          variant="icon"
          className={css({
            w: "6",
            mr: "1",
            borderRadius: "sm",
            outlineOffset: "0",
          })}
        >
          <Icon name="chevron-down" className={css({ w: "4", h: "4" })} />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className={css({ w: "var(--trigger-width)" })}>
        <ListBox
          items={items}
          className={css({
            ringWidth: "0",
            p: "1",
            maxH: "inherit",
            overflow: "auto",
            clipPath: "inset(0 0 0 0 round .75rem)",
          })}
        >
          {children}
        </ListBox>
      </Popover>
    </RACComboBox>
  );
}

export const ComboBoxItem = (props: ListBoxItemProps) => {
  return <DropdownItem {...props} />;
};

export const ComboBoxSection = <T extends object>(
  props: DropdownSectionProps<T>
) => {
  return <DropdownSection {...props} />;
};