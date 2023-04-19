import * as React from "react";
import { DatePicker } from "./DatePicker";
import { ModalProps } from "../../types";

export const EventDetails: React.FC<ModalProps> = React.memo((props) => {
  return (
    <div className="create-event_modal-event">
      <div className="create-event_modal-event-title">
        <input
          type="text"
          className="create-event_modal-event-titleInput"
          id="event-title"
          placeholder="Add title"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        {props.isTitleError && (
          <span className="error" id="title-error-message">
            Title is required. Please complete this field
          </span>
        )}
      </div>
      <div className="create-event_modal-event-date">
        <DatePicker
          props={props}
          id="start"
          maxDate={"2101-01-01"}
          timeValue={props.selectedStartTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setSelectedStartTime(e.target.value);
          }}
        />
        <DatePicker
          props={props}
          id="end"
          maxDate={props.selectedDate}
          timeValue={props.selectedEndTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setSelectedEndTime(e.target.value);
          }}
        />
      </div>
      <div className="create-event_modal-event-description">
        <textarea
          id="event-description"
          placeholder="Description..."
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
        />
      </div>
    </div>
  );
});
