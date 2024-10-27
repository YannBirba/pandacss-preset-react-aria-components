import {
  Button,
  type CellProps,
  Collection,
  ColumnResizer,
  Group,
  Cell as RACCell,
  Column as RACColumn,
  type ColumnProps as RACColumnProps,
  Row as RACRow,
  Table as RACTable,
  TableHeader as RACTableHeader,
  ResizableTableContainer,
  type RowProps,
  type TableHeaderProps,
  type TableProps,
  composeRenderProps,
  useTableOptions,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Checkbox } from "./Checkbox";
import { Icon } from "./Icon";
import { focusRing } from "./focusRing";

export function Table(props: TableProps) {
  return (
    <ResizableTableContainer
      className={css({
        maxH: "280px",
        w: "550px",
        overflow: "auto",
        scrollPaddingTop: "2.281rem",
        pos: "relative",
        borderWidth: "1px",
        _dark: { borderColor: "zinc.600" },
        borderRadius: "lg",
      })}
    >
      <RACTable
        {...props}
        className={css({
          borderCollapse: "separate",
          borderSpacing: "0",
        })}
      />
    </ResizableTableContainer>
  );
}

const columnStyles = css({
  px: "2",
  h: "5",
  flex: "1",
  display: "flex",
  gap: "1",
  alignItems: "center",
  overflow: "hidden",
});

const resizerStyles = css({
  w: "1px",
  px: "8px",
  transform: "translateX(8px)",
  boxSizing: "content-box",
  py: "1",
  h: "5",
  bgClip: "content-box",
  bgColor: "gray.400",
  _dark: { bgColor: "zinc.500" },
  cursor: "col-resize",
  borderRadius: ".25rem",
  ringOffset: "-2px",
  _resizing: { bgColor: "blue.600", w: "2px", pl: "7px" },
});

export type ColumnProps = Omit<RACColumnProps, "className"> & {
  className?: string;
};

export function Column(props: ColumnProps) {
  return (
    <RACColumn
      {...props}
      className={cx(
        props.className,
        css({
          "& [data-hovered]": { zIndex: "20" },
          "& [data-focus-within]": { zIndex: "20" },
          textAlign: "start",
          fontSize: "sm",
          fontWeight: "semibold",
          color: "gray.700",
          _dark: { color: "zinc.300" },
          cursor: "default",
        }),
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className={css({ display: "flex", alignItems: "center" })}>
            <Group
              className={cx(focusRing, columnStyles)}
              data-group
              role="presentation"
              tabIndex={-1}
            >
              <span
                className={css({
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                })}
              >
                {children}
              </span>
              {allowsSorting && (
                <span
                  className={cx(
                    css({
                      w: "4",
                      h: "4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "default",
                      transitionDuration: "fast",
                    }),
                    sortDirection === "descending"
                      ? css({
                          transform: "rotate(180deg)",
                        })
                      : "",
                  )}
                >
                  {sortDirection && (
                    <Icon
                      className={css({
                        w: "4",
                        h: "4",
                        color: "gray.500",
                        _dark: { color: "zinc.400" },
                      })}
                      name="arrow-up"
                    />
                  )}
                </span>
              )}
            </Group>
            {!props.width && (
              <ColumnResizer className={cx(focusRing, resizerStyles)} />
            )}
          </div>
        ),
      )}
    </RACColumn>
  );
}

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <RACTableHeader
      {...props}
      className={cx(
        css({
          pos: "sticky",
          top: "0",
          zIndex: "10",
          bgColor: "gray.100/60",
          _dark: { bgColor: "zinc.700/60", borderBottomColor: "zinc.700" },
          backdropFilter: "blur(20px)",
          "@supports (-moz-appearance:none)": {
            bgColor: "gray.100",
            _dark: { bgColor: "zinc.700" },
          },
          borderRadiusTop: "lg",
          borderBottomWidth: "1px",
        }),
        props.className,
      )}
    >
      {allowsDragging && <Column />}
      {selectionBehavior === "toggle" && (
        <RACColumn
          className={css({
            textAlign: "start",
            fontSize: "sm",
            fontWeight: "semibold",
            cursor: "default",
            p: "2",
          })}
          minWidth={36}
          width={36}
        >
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </RACColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </RACTableHeader>
  );
}

const rowStyles = css({
  pos: "relative",
  cursor: "default",
  userSelect: "none",
  outlineOffset: "-2px!",
  color: "gray.900",
  _disabled: { color: "gray.300", _dark: { color: "zinc.600" } },
  _dark: { color: "zinc.200" },
  fontSize: "sm",
  _hover: { bgColor: "gray.100", _dark: { bgColor: "zinc.700/60" } },
  _selected: {
    bgColor: "blue.100",
    _dark: { bgColor: "blue.700/30" },
    _hover: {
      bgColor: "blue.200",
      _dark: { bgColor: "blue.700/40" },
    },
  },
  "&:last-child td": {
    borderBottomWidth: "0",
  },
});

export function Row<T extends object>({
  id,
  columns,
  children,
  ...otherProps
}: RowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <RACRow
      data-group
      id={id}
      {...otherProps}
      className={cx(focusRing, rowStyles)}
    >
      {allowsDragging && (
        <Cell>
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell>
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </RACRow>
  );
}

const cellStyles = css({
  borderBottomWidth: "1px",
  borderStyle: "solid",
  p: "2",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  ringOffset: "-2px",
  _dark: { borderBottomColor: "zinc.700" },
  _groupSelected: {
    borderColor: "blue.200",
    _dark: {
      borderColor: "blue.900",
    },
  },
  "&:has(+[data-selected])": {
    borderColor: "blue.200",
    _dark: {
      borderColor: "blue.900",
    },
  },
});

export function Cell(props: CellProps) {
  return <RACCell {...props} className={cx(focusRing, cellStyles)} />;
}
