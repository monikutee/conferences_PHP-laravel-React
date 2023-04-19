import * as React from "react";
import { CalendarEvent } from "../../types";
import { getEventTime } from "../../utils/layoutHelper";
import { getEventsByDay } from "../../utils/layoutHelper";
import {
    sortEventsAndCountNeighbours,
    getEventPosition,
} from "../../utils/eventPlacing";

interface EventComponentProps {
    event: CalendarEvent;
    eventsFromStorage: CalendarEvent[];
    date: Date;
}

export const EventInWeek: React.FC<EventComponentProps> = ({
    event,
    eventsFromStorage,
    date,
}) => {
    let indexOfevent = 0;
    const dayEvents = getEventsByDay(date, eventsFromStorage);
    sortEventsAndCountNeighbours(dayEvents).forEach((dayEvent) => {
        if (dayEvent.event.id === event.id) {
            indexOfevent = dayEvent.indexOfEvent;
        }
    });
    const startHours = event.startDate.getHours();
    const startMinutes = event.startDate.getMinutes();
    const endHours = event.endDate.getHours();
    const endMinutes = event.endDate.getMinutes();
    const position = getEventPosition(
        startHours,
        endHours,
        startMinutes,
        endMinutes,
        indexOfevent
    );
    const eventTiming =
        getEventTime(event).startTime + " - " + getEventTime(event).endTime;

    return (
        <div
            className="week_table-event event_hover"
            role="button"
            style={{
                top: position.top + "%",
                left: position.left + "%",
                bottom: position.bottom + "%",
                width: position.width + "%",
            }}
        >
            <span className="week_table-event__title" data-title="event_title">
                {event.title}
            </span>
            <span className="week_table-event__time">{eventTiming}</span>
        </div>
    );
};
