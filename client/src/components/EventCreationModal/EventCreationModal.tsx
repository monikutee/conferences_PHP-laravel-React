import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import { Context } from "../../contextStore";
import { SaveButton, CloseButton } from "./ModalButtons";
import {
    getYearMonthDayString,
    getTimeHourString,
} from "../../utils/dateHelper";
import apiFetch from "../../services/api";

export const EventCreationModal: React.FC = () => {
    const { setModalVisibility, displayDate, setDisplayDate } =
        React.useContext(Context);

    const currentDate = new Date(displayDate);
    const initialEndTime = getTimeHourString(
        new Date(currentDate.setHours(currentDate.getHours() + 1))
    );
    const validationSchema = yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Title is required"),
        address: yup.string().required("start time cannot be empty"),
        start_date: yup.string().required("aa"),
        start_time: yup.string().required("start time cannot be empty"),
        end_time: yup
            .string()
            .required("end time cannot be empty")
            .test("is-greater", "end time should be greater", function (value) {
                const { start_time } = this.parent;
                return moment(value, "HH:mm").isAfter(
                    moment(start_time, "HH:mm")
                );
            }),

        participant_count: yup.number().nullable(),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            address: "",
            start_date: getYearMonthDayString(displayDate),
            start_time: getTimeHourString(displayDate),
            end_time: initialEndTime,
            participant_count: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const event = {
                title: values.title,
                description: values.description,
                start_date: new Date(
                    values.start_date + " " + values.start_time
                ),
                end_date: new Date(values.start_date + " " + values.end_time),
                participant_count: values.participant_count,
                address: values.address,
            };

            Date.prototype.toJSON = function () {
                return moment(this).format();
            };
            apiFetch("/conferences", {
                method: "POST",
                body: JSON.stringify(event),
            }).then((res) => console.log(res, "DEBUG"));

            // if (response) {
            //     closeForm();
            // } else {
            //     alert("Error creating conference");
            // }
        },
    });

    function closeForm() {
        setModalVisibility(false);
    }

    return (
        <div className="create-event_modal" id="create-event-modal">
            <form
                className="create-event_modal-content"
                name="create-event-form"
                id="event-form"
                onSubmit={formik.handleSubmit}
            >
                <CloseButton onClick={closeForm} />
                <div className="create-event_modal-event">
                    <div className="create-event_modal-event-title">
                        <input
                            type="text"
                            className="create-event_modal-event-titleInput"
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.title &&
                            Boolean(formik.errors.title) && (
                                <span
                                    className="error"
                                    id="title-error-message"
                                >
                                    Title is required. Please complete this
                                    field
                                </span>
                            )}
                    </div>
                    <div className="create-event_modal-event-title">
                        <input
                            type="text"
                            className="create-event_modal-event-titleInput"
                            id="address"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.address &&
                            Boolean(formik.errors.address) && (
                                <span
                                    className="error"
                                    id="title-error-message"
                                >
                                    Title is required. Please complete this
                                    field
                                </span>
                            )}
                    </div>
                    <div className="create-event_modal-event-date">
                        <div className={`create-event_modal-event-date-start`}>
                            <label
                                htmlFor={`create-event_modal-event-dateInput-start`}
                            >
                                Start date:
                            </label>
                            <input
                                type="date"
                                className={`create-event_modal-event-dateInput-start`}
                                id="start_date"
                                name="start_date"
                                value={formik.values.start_date}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setDisplayDate(new Date(e.target.value));
                                }}
                            />
                            <input
                                type="time"
                                className={`create-event_modal-event-timeInput-start`}
                                id="start_time"
                                name="start_time"
                                value={formik.values.start_time}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className={`create-event_modal-event-date-end`}>
                            <label
                                htmlFor={`create-event_modal-event-dateInput-end`}
                            >
                                End date:
                            </label>
                            <input
                                type="date"
                                className={`create-event_modal-event-dateInput-end`}
                                value={formik.values.start_date}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setDisplayDate(new Date(e.target.value));
                                }}
                            />
                            <input
                                type="time"
                                className={`create-event_modal-event-timeInput-end`}
                                id="end_time"
                                name="end_time"
                                value={formik.values.end_time}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="create-event_modal-event-description">
                        <textarea
                            id="description"
                            placeholder="Description..."
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.description &&
                            Boolean(formik.errors.description) && (
                                <span
                                    className="error"
                                    id="title-error-message"
                                >
                                    Title is required. Please complete this
                                    field
                                </span>
                            )}
                    </div>
                    <input
                        type="number"
                        className="create-event_modal-event-titleInput"
                        id="participant_count"
                        name="participant_count"
                        value={formik.values.participant_count}
                        onChange={formik.handleChange}
                    />
                </div>
                {(formik.touched.start_date &&
                    Boolean(formik.errors.start_date)) ||
                    (formik.touched.start_time &&
                        Boolean(formik.errors.start_time)) ||
                    (formik.touched.end_time &&
                        Boolean(formik.errors.end_time) && (
                            <span className="error" id="date-error-message">
                                Something is wrong with dates, mate
                            </span>
                        ))}
                <SaveButton />
            </form>
        </div>
    );
};
