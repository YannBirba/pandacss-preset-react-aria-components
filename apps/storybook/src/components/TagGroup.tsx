import { createContext, useContext } from "react";
import {
  Button,
  Tag as RACTag,
  TagGroup as RACTagGroup,
  TagList,
  Text,
  type TagGroupProps as RACTagGroupProps,
  type TagProps as RACTagProps,
  type TagListProps,
} from "react-aria-components";
import { css, cva, cx, type RecipeVariantProps } from "../../styled-system/css";
import { type RecipeVariantRecord } from "../../styled-system/types";
import { Description, Label } from "./Field";
import { Icon } from "./Icon";
import { focusRing } from "./focusRing";

const colors: RecipeVariantRecord = {
  gray: {
    bgColor: "gray.100",
    color: "gray.600",
    borderColor: "gray.200",
    "&[data-hovered]:not([data-selected])": {
      borderColor: "gray.300",
      _dark: { borderColor: "zinc.500" },
    },
    _dark: {
      bgColor: "zinc.700",
      color: "zinc.300",
      borderColor: "zinc.600",
    },
  },
  green: {
    bgColor: "green.100",
    color: "green.700",
    borderColor: "green.200",
    "&[data-hovered]:not([data-selected])": {
      borderColor: "green.300",
      _dark: { borderColor: "green.300/20" },
    },
    _dark: {
      bgColor: "green.300/20",
      color: "green.400",
      borderColor: "green.300/10",
    },
  },
  yellow: {
    bgColor: "yellow.100",
    color: "yellow.700",
    borderColor: "yellow.200",
    "&[data-hovered]:not([data-selected])": {
      borderColor: "yellow.300",
      _dark: { borderColor: "yellow.300/20" },
    },
    _dark: {
      bgColor: "yellow.300/20",
      color: "yellow.400",
      borderColor: "yellow.300/10",
    },
  },
  blue: {
    bgColor: "blue.100",
    color: "blue.700",
    borderColor: "blue.200",
    "&[data-hovered]:not([data-selected])": {
      borderColor: "blue.300",
      _dark: { borderColor: "blue.400/20" },
    },
    _dark: {
      bgColor: "blue.400/20",
      color: "blue.300",
      borderColor: "blue.400/10",
    },
  },
};

const tagRecipe = cva({
  base: {
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "default",
    transitionDuration: "fast",
    cursor: "default",
    fontSize: "xs",
    borderRadius: "full",
    borderWidth: "1px",
    px: "3",
    py: "0.5",
    display: "flex",
    alignItems: "center",
    maxW: "fit",
    gap: "1",
    _allowsRemoving: {
      pr: "1",
    },
    _selected: {
      bgColor: "blue.600",
      color: "white",
      borderColor: "transparent",
    },
    _disabled: {
      bgColor: "gray.100",
      color: "gray.300",
      _dark: {
        bgColor: "zinc.800",
        color: "zinc.600",
        borderColor: "white/5",
      }
    },
  },
  variants: {
    color: colors,
  },
});

type Color = keyof typeof colors;

export type TagProps = RecipeVariantProps<typeof tagRecipe> &
  Omit<RACTagProps, "className"> & {
    className?: string;
  };

const ColorContext = createContext<Color>("gray");

export type TagGroupProps<T> = Omit<
  RACTagGroupProps,
  "children" | "className"
> &
  Pick<TagListProps<T>, "items" | "children" | "renderEmptyState"> &
  RecipeVariantProps<typeof tagRecipe> & {
    label?: string;
    description?: string;
    errorMessage?: string;
    className?: string;
  };

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: TagGroupProps<T>) {
  return (
    <RACTagGroup
      {...props}
      className={cx(
        css({ display: "flex", flexDir: "column", gap: "1" }),
        props.className
      )}
    >
      <Label>{label}</Label>
      <ColorContext.Provider value={props.color || "gray"}>
        <TagList
          items={items}
          renderEmptyState={renderEmptyState}
          className={css({ display: "flex", flexWrap: "wrap", gap: "1" })}
        >
          {children}
        </TagList>
      </ColorContext.Provider>
      {description && <Description>{description}</Description>}
      {errorMessage && (
        <Text
          slot="errorMessage"
          className={css({
            fontSize: "sm",
            color: "red.600",
          })}
        >
          {errorMessage}
        </Text>
      )}
    </RACTagGroup>
  );
}

const removeButtonStyles = css({
  cursor: "default",
  rounded: "full",
  transitionProperty: "background-color",
  transitionTimingFunction: "default",
  transitionDuration: "fast",
  p: "0.5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  _hover: { bgColor: "black/10", _dark: { bgColor: "white/10" } },
});

export function Tag({ children, color, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined;
  const groupColor = useContext(ColorContext);
  return (
    <RACTag
      textValue={textValue}
      {...props}
      className={cx(
        focusRing,
        tagRecipe({ color: color || groupColor }),
        props.className
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button
              isDisabled={props.isDisabled}
              slot="remove"
              className={cx(focusRing, removeButtonStyles)}
            >
              <Icon name="x" className={css({ w: "3", h: "3" })} />
            </Button>
          )}
        </>
      )}
    </RACTag>
  );
}
