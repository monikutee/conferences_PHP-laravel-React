import * as React from "react";
import { Context } from "../../contextStore";
import { isEqual } from "../../utils/dateHelper";

interface HeaderProps {
    day: Date;
    weekday: string;
}

function getClassName(date: Date, displayDate: Date) {
    if (isEqual(new Date(), date)) {
        return "layout_date_box today";
    } else if (isEqual(displayDate, date)) {
        return "layout_date_box selected";
    } else {
        return "layout_date_box";
    }
}

export const WeekLayoutHeaderCell: React.FC<HeaderProps> = ({
    day,
    weekday,
}) => {
    const { displayDate } = React.useContext(Context);

    return (
        <div className="layout_day-date">
            <div className="layout_stick"></div>
            <h2 className="date">
                <div className="layout_days">{weekday}</div>
                <div className={getClassName(day, displayDate)}>
                    {
                        <button data-date={day} className={"layout_date"}>
                            {day.getDate().toString()}
                        </button>
                    }
                </div>
            </h2>
        </div>
    );
};
