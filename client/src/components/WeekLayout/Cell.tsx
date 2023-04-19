import * as React from "react";
import { Context } from "../../contextStore";
import { getEventsByHour } from "../../utils/layoutHelper";
import { EventInWeek } from "./EventInWeek";

interface CellProps {
    cellDate: Date;
    hour: number;
    day: number;
}
export const Cell: React.FC<CellProps> = ({ cellDate, hour, day }) => {
    const { setDisplayDate, setModalVisibility, events } =
        React.useContext(Context);

    const dateString = new Date(cellDate.setHours(hour)).toString();

    function changeSelectedDate(event: React.MouseEvent<HTMLElement>) {
        if (event.target instanceof HTMLTableCellElement) {
            if (event.target.dataset.date) {
                setDisplayDate(new Date(event.target.dataset.date));
                setModalVisibility(true);
            }
        }
    }

    return (
        <td
            data-date={dateString}
            data-cell={`week-cell_${day}_${hour}`}
            onClick={changeSelectedDate}
        >
            <div className="week_table-events_list">
                {getEventsByHour(cellDate, events).map((event) => {
                    return (
                        <EventInWeek
                            event={event}
                            key={event.id.toString() + "week-event"}
                            eventsFromStorage={events}
                            date={cellDate}
                        />
                    );
                })}
            </div>
        </td>
    );
};
