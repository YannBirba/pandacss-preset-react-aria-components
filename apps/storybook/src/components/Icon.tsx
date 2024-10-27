import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense, lazy } from "react";
import { css } from "../../styled-system/css";

const fallback = (
  <span
    className={css({
      display: "inline-block",
      w: "4",
      h: "4",
      borderRadius: "full",
      transitionProperty: "all",
      transitionDuration: "fast",
      transitionTimingFunction: "default",
    })}
    style={{ width: 24, height: 24, borderRadius: "full" }}
  />
);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon aria-hidden focusable={false} role="img" {...props} />
    </Suspense>
  );
};
