import * as React from "react";
import { CalendarEvent } from "./../../types";
import { getEventTime } from "../../utils/layoutHelper";
import { ShowMoreBtn, StyledEvent } from "./MonthLayout.styled";

interface EventProps {
    event: CalendarEvent;
    index: number;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const EventInMonth: React.FC<EventProps> = ({
    event,
    index,
    onClick,
}) => {
    if (index > 3) {
        return (
            <ShowMoreBtn
                role="button"
                data-date={event.startDate.toString()}
                onClick={(e) => {
                    onClick(e);
                }}
            >
                Show more events
            </ShowMoreBtn>
        );
    } else {
        const eventTiming =
            getEventTime(event).startTime +
            " - " +
            getEventTime(event).endTime +
            " ";
        return (
            <StyledEvent role="button">
                <span className="month_table-event__time">{eventTiming}</span>
                <span className="month_table-event__title">{event.title}</span>
            </StyledEvent>
        );
    }
};
