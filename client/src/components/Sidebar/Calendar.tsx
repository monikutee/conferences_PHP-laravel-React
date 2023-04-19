import * as React from "react";
import { CalendarNavigation } from "./CalendarNavigation";
import { CalendarDays } from "./CalendarDays";
import { Context } from "../../contextStore";
import { MiniCalendar, Weekdays } from "./Sidebar.styled";

export const Calendar: React.FC = () => {
    const { displayDate } = React.useContext(Context);
    const [displayMonthDate, setDisplayMonthDate] = React.useState(new Date());

    React.useEffect(() => {
        setDisplayMonthDate(displayDate);
    }, [displayDate]);

    return (
        <MiniCalendar>
            <CalendarNavigation
                displayMonthDate={displayMonthDate}
                setDisplayMonthDate={setDisplayMonthDate}
            />
            <Weekdays>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
            </Weekdays>
            <CalendarDays
                displayMonthDate={displayMonthDate}
                setDisplayMonthDate={setDisplayMonthDate}
            />
        </MiniCalendar>
    );
};
