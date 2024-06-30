import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Calendar as RACCalendar,
  CalendarGridHeader as RACCalendarGridHeader,
  CalendarProps as RACCalendarProps,
  Text,
  useLocale,
} from "react-aria-components";
import { css, cx } from "../../styled-system/css";
import { Button } from "./Button";
import { focusRing } from "./focusRing";

const calendarStyle = css({
  base: {
    w: "9",
    h: "9",
    fontSize: "sm",
    cursor: "default",
    borderRadius: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "zinc.900",
    _dark: { color: "zinc.200" },
    _hover: { bgColor: "gray.100", _dark: { bgColor: "zinc.700" } },
    _selected: {
      bgColor: "blue.600",
      _invalid: { bgColor: "red.600" },
      color: "white",
    },
    _disabled: {
      color: "gray.300",
      _dark: { color: "zinc.600" },
    },
  },
});

export type CalendarProps<T extends DateValue> = Omit<
  RACCalendarProps<T>,
  "visibleDuration"
> & { errorMessage?: string };

export const Calendar = <T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) => {
  return (
    <RACCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid
        className={css({
          borderCollapse: "initial",
        })}
      >
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={cx(calendarStyle, focusRing)}
            />
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
    </RACCalendar>
  );
};

export const CalendarHeader = () => {
  let { direction } = useLocale();

  return (
    <header
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "1",
        pb: "4",
        pl: "1",
        pr: "1",
        w: "full",
      })}
    >
      <Button variant="icon" slot="previous">
        {direction === "rtl" ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )}
      </Button>
      <Heading
        className={css({
          flex: "1",
          fontWeight: "semibold",
          fontSize: "xl",
          textAlign: "center",
          ml: "2",
          mr: "2",
          color: "zinc.900",
          _dark: { color: "zinc.200" },
        })}
      />
      <Button variant="icon" slot="next">
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden />
        ) : (
          <ChevronRight aria-hidden />
        )}
      </Button>
    </header>
  );
};

export const CalendarGridHeader = () => {
  return (
    <RACCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell
          className={css({
            fontSize: "xs",
            color: "gray.500",
            fontWeight: "semibold",
          })}
        >
          {day}
        </CalendarHeaderCell>
      )}
    </RACCalendarGridHeader>
  );
};
