import {
  Link as RACLink,
  type LinkProps as RACLinkProps,
} from "react-aria-components";
import { type RecipeVariantProps, cva, cx } from "../../styled-system/css";
import { focusRing } from "./focusRing";

const linkRecipe = cva({
  base: {
    textDecorationLine: "underline",
    _disabled: { textDecorationLine: "none", cursor: "default" },
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "default",
    transitionDuration: "fast",
    borderRadius: "sm",
  },
  variants: {
    variant: {
      primary: {
        color: "blue.600",
        _dark: { color: "blue.500", textDecorationColor: "blue.500/60" },
        textDecorationLine: "underline",
        textDecorationColor: "blue.600/60",
        _hover: {
          textDecorationColor: "blue.600",
          _dark: { textDecorationColor: "blue.500" },
        },
      },
      secondary: {
        color: "gray.700",
        _dark: { color: "zinc.300", textDecorationColor: "zinc.300/70" },
        textDecorationLine: "underline",
        textDecorationColor: "gray.700/50",
        _hover: {
          textDecorationColor: "gray.700",
          _dark: { textDecorationColor: "zinc.300" },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type LinkVariantProps = RecipeVariantProps<typeof linkRecipe>;

export type LinkProps = Omit<RACLinkProps, "className"> &
  LinkVariantProps & { className?: string };

export function Link(props: LinkProps) {
  const [variantProps, localProps] = linkRecipe.splitVariantProps(props);
  const className = cx(
    linkRecipe(variantProps),
    focusRing,
    localProps.className,
  );
  return <RACLink {...localProps} className={className} />;
}
