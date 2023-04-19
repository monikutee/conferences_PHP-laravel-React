import * as React from "react";
import { CalendarEvent } from "./../../types";
import { getEventTime } from "../../utils/layoutHelper";
import { ShowMoreBtn, StyledEvent } from "./MonthLayout.styled";
import { Context } from "../../contextStore";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const { setModalVisibility, setSelectedEvent } = React.useContext(Context);

    if (index > 3) {
        return (
            <ShowMoreBtn
                role="button"
                data-date={event.start_date.toString()}
                onClick={(e) => {
                    onClick(e);
                }}
            >
                {t("conference_calendar.show_more")}
            </ShowMoreBtn>
        );
    } else {
        const eventTiming =
            getEventTime(event).startTime +
            " - " +
            getEventTime(event).endTime +
            " ";
        return (
            <StyledEvent
                role="button"
                onClick={() => {
                    setSelectedEvent(event);
                    setModalVisibility(true);
                }}
            >
                <span className="month_table-event__time">{eventTiming}</span>
                <span className="month_table-event__title">{event.title}</span>
            </StyledEvent>
        );
    }
};
