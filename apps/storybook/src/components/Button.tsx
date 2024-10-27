import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { type RecipeVariantProps, cva, cx } from "../../styled-system/css";
import { focusRing } from "./focusRing";

const buttonRecipe = cva({
  base: {
    px: "5",
    py: "2",
    fontSize: "sm",
    lineHeight: "snug",
    textAlign: "center",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    transitionTimingFunction: "default",
    transitionDuration: "fast",
    borderRadius: "lg",
    borderWidth: "1px",
    borderColor: {
      base: "black/10",
      _dark: "white/10",
    },
    shadow: {
      base: "buttonInset",
      _dark: "none",
    },
    cursor: "default",
    _disabled: {
      base: {
        bgColor: "gray.100",
        color: "gray.300",
        borderColor: "black/5",
      },
      _dark: {
        bgColor: "zinc.800",
        color: "zinc.600",
        borderColor: "white/5",
      },
    },
  },
  variants: {
    variant: {
      primary: {
        bgColor: {
          base: "blue.600",
          _hover: "blue.700",
          _pressed: "blue.800",
        },
        color: "white",
      },
      secondary: {
        bgColor: {
          base: "gray.100",
          _dark: "zinc.600",
          _hover: {
            base: "gray.200",
            _dark: "zinc.500",
          },
          _pressed: {
            base: "gray.300",
            _dark: "zinc.400",
          },
        },
        color: {
          base: "gray.800",
          _dark: "zinc.100",
        },
      },
      destructive: {
        bgColor: {
          base: "red.700",
          _hover: "red.800",
          _pressed: "red.900",
        },
        color: "white",
      },
      icon: {
        borderWidth: "0",
        p: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: {
          base: "gray.600",
          _dark: "zinc.400",
        },
        bgColor: {
          base: "transparent",
          _hover: {
            base: "black/5",
            _dark: "white/10",
          },
          _disabled: "transparent",
          _pressed: {
            base: "black/10",
            _dark: "white/20",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = Omit<RACButtonProps, "className"> &
  ButtonVariantProps & { className?: string };

export const Button = (props: ButtonProps) => {
  const [variantProps, localProps] = buttonRecipe.splitVariantProps(props);
  const className = cx(
    buttonRecipe(variantProps),
    focusRing,
    localProps.className,
  );

  return <RACButton {...localProps} className={className} />;
};
