import { type ReactNode } from "react";
import { chain } from "react-aria";
import { Heading, type DialogProps } from "react-aria-components";
import { css, cva, type RecipeVariantProps } from "../../styled-system/css";
import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { Icon } from "./Icon";

const alertDialogRecipe = cva({
  base: {
    w: "6",
    h: "6",
    pos: "absolute",
    right: "6",
    top: "6",
    strokeWidth: "2",
  },
  variants: {
    variant: {
      info: {
        color: "blue.500",
      },
      destructive: {
        color: "red.500",
      },
    },
  },
  defaultVariants: {
    variant: "destructive",
  },
});

type AlertDialogVariantProps = RecipeVariantProps<typeof alertDialogRecipe>;

type AlertDialogProps = AlertDialogVariantProps &
  Omit<DialogProps, "children"> & {
    title: string;
    children: ReactNode;
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
  };

export function AlertDialog(props: AlertDialogProps) {
  const [variantProps, localProps] = alertDialogRecipe.splitVariantProps(props);
  const { title, children, actionLabel, cancelLabel, onAction } = localProps;
  return (
    <Dialog role="alertdialog" {...localProps}>
      {({ close }) => (
        <>
          <Heading
            slot="title"
            className={css({
              fontSize: "xl",
              lineHeight: "tight",
              fontWeight: "semibold",
              my: "0",
            })}
          >
            {title}
          </Heading>
          <div className={alertDialogRecipe(variantProps)}>
            {variantProps.variant === "destructive" ? (
              <Icon name="circle-alert" />
            ) : (
              <Icon name="info" />
            )}
          </div>
          <p
            className={css({
              mt: "3",
              color: "slate.500",
              _dark: { color: "zinc.400" },
            })}
          >
            {children}
          </p>
          <div
            className={css({
              mt: "6",
              display: "flex",
              justifyContent: "flex-end",
              gap: "2",
            })}
          >
            <Button variant="secondary" onPress={close}>
              {cancelLabel || "Cancel"}
            </Button>
            <Button
              variant={
                variantProps.variant === "destructive"
                  ? "destructive"
                  : "primary"
              }
              autoFocus
              onPress={chain(onAction, close)}
            >
              {actionLabel}
            </Button>
          </div>
        </>
      )}
    </Dialog>
  );
}