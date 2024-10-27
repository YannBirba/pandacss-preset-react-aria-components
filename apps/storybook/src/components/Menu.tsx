import {
  type MenuItemProps,
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  type MenuProps as RACMenuProps,
  Separator,
  type SeparatorProps,
  composeRenderProps,
} from "react-aria-components";
import { css } from "../../styled-system/css";
import { Icon } from "./Icon";
import {
  DropdownSection,
  type DropdownSectionProps,
  dropdownItemStyles,
} from "./ListBox";
import { Popover, type PopoverProps } from "./Popover";

type MenuProps<T> = RACMenuProps<T> & {
  placement?: PopoverProps["placement"];
};

export const Menu = <T extends object>(props: MenuProps<T>) => {
  return (
    <Popover className={css({ minW: "150px" })} placement={props.placement}>
      <RACMenu
        {...props}
        className={css({
          p: "1",
          outlineStyle: "solid",
          ringWidth: "0px",
          maxH: "inherit",
          overflow: "auto",
          clipPath: "inset(0 0 0 0 round .75rem)",
        })}
      />
    </Popover>
  );
};

export function MenuItem(props: MenuItemProps) {
  return (
    <RACMenuItem {...props} className={dropdownItemStyles}>
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== "none" && (
              <span
                className={css({
                  display: "flex",
                  alignItems: "center",
                  w: "4",
                })}
              >
                {isSelected && (
                  <Icon className={css({ w: "4", h: "4" })} name="check" />
                )}
              </span>
            )}
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
            {hasSubmenu && (
              <Icon
                className={css({
                  pos: "absolute",
                  w: "4",
                  h: "4",
                  right: "8px",
                })}
                // TODO: fix this
                name="chevron-right"
              />
            )}
          </>
        ),
      )}
    </RACMenuItem>
  );
}

export function MenuSeparator(props: SeparatorProps) {
  return (
    <Separator
      {...props}
      className={css({
        mx: "3",
        my: "1",
        borderBottomWidth: "1px",
        borderColor: "gray.300",
        _dark: { borderColor: "zinc.700" },
      })}
    />
  );
}

export function MenuSection<T extends object>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
