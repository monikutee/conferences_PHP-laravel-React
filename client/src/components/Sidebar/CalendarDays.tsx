import * as React from "react";
import { Context } from "../../contextStore";
import { SidebarCalendarDate } from "../../types/index";
import { getMonthDays } from "../../utils/layoutHelper";
import { isNextMonth, isPreviousMonth, isEqual } from "../../utils/dateHelper";
import { CalendarDaysNav } from "./Sidebar.styled";

export const CalendarDays: React.FC<SidebarCalendarDate> = React.memo(
    ({ displayMonthDate, setDisplayMonthDate }) => {
        const { displayDate, setDisplayDate } = React.useContext(Context);

        function getClassName(date: Date) {
            if (
                isPreviousMonth(displayMonthDate, date) ||
                isNextMonth(displayMonthDate, date)
            ) {
                return "outer-month-date";
            }
            if (isEqual(new Date(), date)) {
                return "today";
            } else if (isEqual(displayDate, date)) {
                return "selected";
            }
        }

        const changeSelectedDate = React.useCallback(
            (event: React.MouseEvent<HTMLElement>) => {
                if (
                    event.target instanceof HTMLButtonElement &&
                    event.target.dataset.date
                ) {
                    setDisplayDate(new Date(event.target.dataset.date));
                    setDisplayMonthDate(new Date(event.target.dataset.date));
                }
            },
            [setDisplayDate, setDisplayMonthDate]
        );

        return (
            <CalendarDaysNav id="calendar-days" onClick={changeSelectedDate}>
                {getMonthDays(displayMonthDate).map((day) => (
                    <button
                        data-date={day.toString()}
                        key={day.toString()}
                        className={getClassName(day)}
                    >
                        {day.getDate().toString()}
                    </button>
                ))}
            </CalendarDaysNav>
        );
    }
);
