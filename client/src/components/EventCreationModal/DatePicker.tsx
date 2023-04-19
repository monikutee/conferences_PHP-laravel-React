import * as React from "react";
import { ModalProps } from "../../types";

interface DatePickerProps {
  id: string;
  props: ModalProps;
  maxDate: string;
  timeValue: string;
  onChange(value: React.ChangeEvent<HTMLInputElement>): void;
}

export const DatePicker: React.FC<DatePickerProps> = React.memo(
  ({ id, props, maxDate, timeValue, onChange }) => {
    const label = id.charAt(0).toUpperCase() + id.slice(1);
    return (
      <div className={`create-event_modal-event-date-${id}`}>
        <label htmlFor={`create-event_modal-event-dateInput-${id}`}>
          {label} date:
        </label>
        <input
          type="date"
          className={`create-event_modal-event-dateInput-${id}`}
          id={`event-dateInput-${id}`}
          min={props.selectedDate}
          max={maxDate}
          value={props.selectedDate}
          onChange={(e) => {
            props.setSelectedDate(e.target.value);
          }}
        />
        <input
          type="time"
          className={`create-event_modal-event-timeInput-${id}`}
          id={`event-timeInput-${id}`}
          value={timeValue}
          onChange={onChange}
        />
      </div>
    );
  }
);
