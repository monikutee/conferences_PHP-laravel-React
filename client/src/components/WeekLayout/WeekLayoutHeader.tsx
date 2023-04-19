import * as React from "react";
import { getWeekDays } from "../../utils/layoutHelper";
import { WEEKDAYS } from "../../constants";
import { WeekLayoutHeaderCell } from "./WeekLayoutHeaderCell";
import { Context } from "../../contextStore";

export const WeekLayoutHeader: React.FC = () => {
    const { displayDate, setDisplayDate } = React.useContext(Context);

    const changeSelectedDate = React.useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (
                event.target instanceof HTMLButtonElement &&
                event.target.dataset.date
            ) {
                setDisplayDate(new Date(event.target.dataset.date));
            }
        },
        [setDisplayDate]
    );

    return (
        <header className="week_header">
            <div className="timezone">GMT+03</div>
            <div
                id="layout_weekdays"
                className="layout_weekdays"
                onClick={changeSelectedDate}
            >
                {getWeekDays(displayDate).map((day, index) => (
                    <WeekLayoutHeaderCell
                        weekday={WEEKDAYS[index]}
                        day={new Date(day)}
                        key={index}
                    />
                ))}
            </div>
        </header>
    );
};
