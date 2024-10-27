import {
  type BreadcrumbProps,
  type BreadcrumbsProps,
  type LinkProps,
  Breadcrumb as RACBreadcrumb,
  Breadcrumbs as RACBreadcrumbs,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Icon } from "./Icon";
import { Link } from "./Link";

export const Breadcrumbs = <T extends object>(props: BreadcrumbsProps<T>) => {
  return (
    <RACBreadcrumbs
      {...props}
      className={cx(css({ display: "flex", gap: "1" }), props.className)}
    />
  );
};

export const Breadcrumb = (
  props: BreadcrumbProps & Omit<LinkProps, "className">,
) => {
  return (
    <RACBreadcrumb
      {...props}
      className={cx(
        props.className,
        css({ display: "flex", alignItems: "center", gap: "1" }),
      )}
    >
      <Link variant="secondary" {...props} />
      {props.href && (
        <Icon
          className={css({
            w: "3",
            h: "3",
            color: "gray.600",
            _dark: { color: "zinc.400" },
          })}
          name="chevron-right"
        />
      )}
    </RACBreadcrumb>
  );
};
