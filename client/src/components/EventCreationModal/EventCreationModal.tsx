import * as React from "react";
import { Context } from "../../contextStore";
import { SaveButton, CloseButton } from "./ModalButtons";
import {
    getYearMonthDayString,
    getTimeHourString,
    padWithZero,
} from "../../utils/dateHelper";
import { EventDetails } from "./EventDetails";
import { CalendarEvent, NewEvent } from "../../types";

export const EventCreationModal: React.FC = () => {
    const {
        setModalVisibility,
        displayDate,
        setDisplayDate,
        events,
        setEvents,
    } = React.useContext(Context);

    const currentDate = new Date(displayDate);
    const initialEndTime = getTimeHourString(
        new Date(currentDate.setHours(currentDate.getHours() + 1))
    );
    const [selectedDate, setSelectedDate] = React.useState(
        getYearMonthDayString(displayDate)
    );
    const [selectedStartTime, setSelectedStartTime] = React.useState(
        getTimeHourString(displayDate)
    );
    const [selectedEndTime, setSelectedEndTime] =
        React.useState(initialEndTime);

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [isTitleError, setTitleError] = React.useState(false);
    const [isDateError, setDateError] = React.useState(false);

    const eventProps: NewEvent = {
        selectedDate,
        selectedStartTime,
        selectedEndTime,
        title,
        description,
    };

    const modalProps = {
        ...eventProps,
        setSelectedDate,
        setSelectedStartTime,
        setSelectedEndTime,
        setTitle,
        setDescription,
        isTitleError,
        setTitleError,
        isDateError,
        setDateError,
    };

    React.useEffect(() => {
        const hrs = padWithZero(+selectedStartTime.substr(0, 2) + 1);
        setSelectedEndTime(
            selectedStartTime === "23:00" ? "23:59" : `${hrs}:00`
        );
    }, [selectedStartTime]);

    function showError(createdEvent: CalendarEvent) {
        const validate = isValid(createdEvent);
        setTitleError(validate.titleErr);
        setDateError(validate.dateErr);
        return validate.invalid;
    }

    function submitFormHandler(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const createdEvent = buildEventWithID(eventProps);

        if (showError(createdEvent)) {
            return;
        }

        // addEvent(createdEvent);
        setDisplayDate(createdEvent.startDate);
        setEvents([...events, createdEvent]);
        closeForm();
    }

    function closeForm() {
        setModalVisibility(false);
    }

    return (
        <div className="create-event_modal" id="create-event-modal">
            <form
                className="create-event_modal-content"
                name="create-event-form"
                id="event-form"
                onSubmit={submitFormHandler}
            >
                <CloseButton onClick={closeForm} />
                <EventDetails {...modalProps} />
                {isDateError && (
                    <span className="error" id="date-error-message">
                        Something is wrong with dates, mate
                    </span>
                )}
                <SaveButton />
            </form>
        </div>
    );
};

function buildEventWithID(event: NewEvent): CalendarEvent {
    const startDate = new Date(
        event.selectedDate + " " + event.selectedStartTime
    );
    const endDate = new Date(event.selectedDate + " " + event.selectedEndTime);

    return {
        id: (Date.now() + Math.random()).toString(),
        title: event.title,
        startDate,
        endDate,
        description: event.description,
    };
}

function isValid(event: CalendarEvent) {
    const titleErr = event.title === "";
    const dateErr = event.startDate.getTime() >= event.endDate.getTime();

    return { invalid: titleErr || dateErr, titleErr, dateErr };
}
