import * as React from "react";
import { getMonthDays } from "../../utils/layoutHelper";
import { isNextMonth, isPreviousMonth, isEqual } from "../../utils/dateHelper";
import { WEEKDAYS_TO_SUN } from "../../constants";
import { Context } from "../../contextStore";
import { getEventsByDay } from "../../utils/layoutHelper";
import { EventInMonth } from "./EventInMonth";
import {
    StyledMonthLayout,
    StyledMonthDays,
    StyledDaysBtn,
    EventList,
} from "./MonthLayout.styled";

export const MonthLayout: React.FC = () => {
    const { displayDate, setDisplayDate, events, setWeekLayout } =
        React.useContext(Context);

    function getClassName(date: Date) {
        if (
            isPreviousMonth(displayDate, date) ||
            isNextMonth(displayDate, date)
        ) {
            return "month_table-outer_date";
        }
        if (isEqual(new Date(), date)) {
            return "month_table-today_date";
        } else if (isEqual(displayDate, date)) {
            return "selected";
        }
    }

    const changeSelectedDate = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (
                event.target instanceof HTMLElement &&
                event.target.dataset.date
            ) {
                setDisplayDate(new Date(event.target.dataset.date));
                setWeekLayout(true);
            }
        },
        [setDisplayDate, setWeekLayout]
    );

    return (
        <StyledMonthLayout id="selectMonth">
            {getMonthDays(displayDate).map((day, index) => (
                <StyledMonthDays key={day.toString() + "month"}>
                    {index < 7 && (
                        <div style={{ marginTop: 8 }}>
                            {WEEKDAYS_TO_SUN[day.getDay()]}
                        </div>
                    )}
                    <StyledDaysBtn
                        className={getClassName(day)}
                        data-date={day.toString()}
                        onClick={changeSelectedDate}
                        key={index + "month"}
                    >
                        {day.getDate().toString()}
                    </StyledDaysBtn>
                    <EventList>
                        {getEventsByDay(day, events).map((event, index) => {
                            if (index > 4) {
                                return null;
                            }
                            return (
                                <EventInMonth
                                    event={event}
                                    key={event.id + "month-event"}
                                    index={index}
                                    onClick={changeSelectedDate}
                                />
                            );
                        })}
                    </EventList>
                </StyledMonthDays>
            ))}
        </StyledMonthLayout>
    );
};
