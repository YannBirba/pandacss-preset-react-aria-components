import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  type TabListProps as RACTabListProps,
  type TabPanelProps as RACTabPanelProps,
  type TabProps as RACTabProps,
  type TabsProps as RACTabsProps,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { focusRing } from "./focusRing";

const tabsStyles = css({
  display: "flex",
  gap: "4",
  _orientationHorizontal: { flexDir: "column" },
  _orientationVertical: { flexDir: "row", w: "800px" },
});

export type TabsProps = Omit<RACTabsProps, "className"> & {
  className?: string;
};

export function Tabs(props: TabsProps) {
  return <RACTabs {...props} className={cx(props.className, tabsStyles)} />;
}

const tabListStyles = css({
  display: "flex",
  gap: "1",
  _orientationHorizontal: { flexDir: "row" },
  _orientationVertical: { flexDir: "column", alignItems: "flex-start" },
});

export type TabListProps<T extends object> = Omit<
  RACTabListProps<T>,
  "className"
> & {
  className?: string;
};

export function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <RACTabList {...props} className={cx(props.className, tabListStyles)} />
  );
}

const tabProps = css({
  display: "flex",
  alignItems: "center",
  cursor: "default",
  rounded: "full",
  pl: "4",
  pr: "4",
  pt: "1.5",
  pb: "1.5",
  fontSize: "sm",
  fontWeight: "medium",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  transitionTimingFunction: "default",
  transitionDuration: "fast",
  color: "gray.600",
  _dark: { color: "zinc.300" },
  "&[data-hovered]:not([data-selected])": {
    color: "gray.700",
    _dark: { color: "zinc.200", bgColor: "zinc.800" },
    bgColor: "gray.200",
  },
  _selected: {
    color: "white",
    _dark: { color: "black", bgColor: "zinc.200" },
    bgColor: "gray.800",
  },
  _disabled: {
    color: "gray.200",
    _dark: { color: "zinc.600" },
  },
});

export type TabProps = Omit<RACTabProps, "className"> & {
  className?: string;
};

export function Tab(props: TabProps) {
  return (
    <RACTab {...props} className={cx(props.className, focusRing, tabProps)} />
  );
}

const tabPanelStyles = css({
  flex: "1",
  p: "4",
  fontSize: "sm",
  color: "gray.900",
  _dark: { color: "zinc.100" },
});

export type TabPanelProps = Omit<RACTabPanelProps, "className"> & {
  className?: string;
};

export function TabPanel(props: TabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={cx(props.className, focusRing, tabPanelStyles)}
    />
  );
}
