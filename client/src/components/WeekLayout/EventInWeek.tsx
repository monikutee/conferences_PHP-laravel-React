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
    events: CalendarEvent[];
    date: Date;
}

export const EventInWeek: React.FC<EventComponentProps> = ({
    event,
    events,
    date,
}) => {
    let indexOfevent = 0;
    const dayEvents = getEventsByDay(date, events);
    sortEventsAndCountNeighbours(dayEvents).forEach((dayEvent) => {
        if (dayEvent.event.id === event.id) {
            indexOfevent = dayEvent.indexOfEvent;
        }
    });
    const startHours = new Date(event.start_date).getHours();
    const startMinutes = new Date(event.start_date).getMinutes();
    const endHours = new Date(event.end_date).getHours();
    const endMinutes = new Date(event.end_date).getMinutes();
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
