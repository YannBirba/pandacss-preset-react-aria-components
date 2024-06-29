import {
  RangeCalendar as RACRangeCalendar,
  type RangeCalendarProps as RACRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { CalendarGridHeader, CalendarHeader } from "./Calendar";
import { focusRing } from "./focusRing";

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<RACRangeCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string;
}

// TODO: fix

const cell = css({
  w: "full",
  h: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "full",
  bgColor: {
      _groupHover: {
        base: "gray.100",
        _dark: "zinc.700",
      },
      _groupPressed: { base: "gray.200", _dark: "zinc.600" },
      _groupSelected: {
        _hover: {
          base: "blue.200",
          _dark: "blue.900",
          _invalid: {
            base: "red.200",
            _dark: "red.900",
          },
        },
        _pressed: {
          base: "blue.300",
          _dark: "blue.800",
          _invalid: {
            base: "red.300",
            _dark: "red.800",
          },
        },
        _selectionStart: { base: "blue.600", _invalid: "red.600" },
        _selectionEnd: { base: "blue.600", _invalid: "red.600" },
      },
  },
  color: {
    base: "zinc.900",
    _dark: "zinc.200",
    _groupOutsideMonth: {
      base: "gray.300",
      _dark: "zinc.600",
    },
    _groupSelected: {
      _invalid: {
        base: "red.100",
        _dark: "red.700/30",
      },
      _selectionStart: "white",
      _selectionEnd: "white",
    },
    _groupDisabled: {
      base: "gray.200",
      _dark: "zinc.600",
    },
  },
});

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <RACRangeCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid className={css({ "& td": { px: "0" } })}>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              data-group
              date={date}
              className={css({
                w: "9",
                h: "9",
                fontSize: "sm",
                outlineStyle: "solid",
                ringWidth: "0",
                cursor: "default",
                _outsideMonth: { color: "gray.300" },
                _selected: {
                  bgColor: "blue.100",
                  _dark: { bgColor: "blue.700/30" },
                  _invalid: {
                    bgColor: "red.100",
                    _dark: { bgColor: "red.700/30" },
                  },
                },
                "& td:first-child": {
                  borderTopRadius: "full",
                },
                "& td:last-child": {
                  borderBottomRadius: "full",
                },
                _selectionStart: {
                  borderStartRadius: "full",
                },
                _selectionEnd: {
                  borderEndRadius: "full",
                },
              })}
            >
              {({ formattedDate }) => (
                <span className={cx(focusRing, cell)}>{formattedDate}</span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
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
    </RACRangeCalendar>
  );
}
