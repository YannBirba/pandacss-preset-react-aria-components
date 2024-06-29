import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  type MenuProps as RACMenuProps,
  type MenuItemProps,
  Separator,
  SeparatorProps,
  composeRenderProps,
} from "react-aria-components";
import {
  DropdownSection,
  DropdownSectionProps,
  dropdownItemStyles,
} from "./ListBox";
import { Popover, PopoverProps } from "./Popover";
import { css } from "../../styled-system/css";
import { Icon } from "./Icon";

type MenuProps<T> = RACMenuProps<T> & {
  placement?: PopoverProps["placement"];
};

export const Menu = <T extends object>(props: MenuProps<T>) => {
  return (
    <Popover placement={props.placement} className={css({ minW: "150px" })}>
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
}

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
                  <Icon name="check" className={css({ w: "4", h: "4" })} />
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
                name="chevron-right"
                // TODO: fix this
                className={css({ pos: "absolute", w: "4", h: "4", right: "8px" })}
              />
            )}
          </>
        )
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
