import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import { Context } from "../../../contextStore";
import { CloseButton, ActionButton, DeleteButton } from "../ModalButtons";
import { ConfirmationModal } from "../Confirmation";
import {
    getYearMonthDayString,
    getTimeHourString,
} from "../../../utils/dateHelper";
import apiFetch from "../../../services/api";
import { CalendarEvent } from "../../../types";
import {
    Backdrop,
    StyledForm,
    EventInputsWrap,
    BasicInputWrap,
    DatePickerWrap,
    StyledError,
    StyledDescriptionWrap,
    ActionNav,
} from "../Modals.styled";
import { useTranslation } from "react-i18next";

export const EventCreationModal: React.FC = () => {
    const { t } = useTranslation();
    const {
        setModalVisibility,
        displayDate,
        setDisplayDate,
        selectedEvent,
        user,
        csrfToken,
        setSelectedEvent,
    } = React.useContext(Context);

    const [popup, setPopup] = React.useState(false);

    const isDisabled = !user;

    const currentDate = new Date(displayDate);
    const initialEndTime = selectedEvent
        ? getTimeHourString(
              new Date(
                  new Date(selectedEvent.end_date).setHours(
                      new Date(selectedEvent.end_date).getHours()
                  )
              )
          )
        : getTimeHourString(
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
        _token: yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            title: selectedEvent ? selectedEvent.title : "",
            description: selectedEvent ? selectedEvent.description : "",
            address: selectedEvent ? selectedEvent.address : "",
            start_date: selectedEvent
                ? getYearMonthDayString(new Date(selectedEvent.start_date))
                : getYearMonthDayString(displayDate),
            start_time: selectedEvent
                ? getTimeHourString(new Date(selectedEvent.start_date))
                : getTimeHourString(displayDate),
            end_time: initialEndTime,
            participant_count: selectedEvent
                ? selectedEvent.participant_count ?? ""
                : "",
            _token: csrfToken,
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
                _token: values._token,
            };

            // eslint-disable-next-line
            Date.prototype.toJSON = function () {
                return moment(this).format();
            };

            if (selectedEvent) {
                console.log(event);
                apiFetch(`/conferences/${selectedEvent.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(event),
                });
            } else {
                apiFetch("/conferences", {
                    method: "POST",
                    body: JSON.stringify(event),
                });
            }

            closeForm();
        },
    });

    function closeForm() {
        setSelectedEvent(null);
        setModalVisibility(false);
    }

    const deleteEvent = async (event: CalendarEvent) => {
        await apiFetch(`/conferences/${event.id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "X-CSRF-Token": csrfToken,
            },
        });
        closeForm();
    };

    return (
        <Backdrop>
            <StyledForm
                className="create-event_modal-content"
                name="create-event-form"
                id="event-form"
                onSubmit={formik.handleSubmit}
                width="500px"
                height="60%"
            >
                <CloseButton onClick={closeForm} />
                <input
                    hidden
                    name="_token"
                    value={formik.values._token}
                    onChange={() => {
                        return;
                    }}
                />
                <EventInputsWrap>
                    <BasicInputWrap>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder={t("conference_calendar.title") ?? ""}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            disabled={isDisabled}
                        />
                        {formik.touched.title &&
                            Boolean(formik.errors.title) && (
                                <StyledError>
                                    {t("conference_calendar.title_error") ?? ""}
                                </StyledError>
                            )}
                    </BasicInputWrap>
                    <BasicInputWrap>
                        <input
                            disabled={isDisabled}
                            type="text"
                            id="address"
                            name="address"
                            placeholder={t("conference_calendar.address") ?? ""}
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.address &&
                            Boolean(formik.errors.address) && (
                                <StyledError>
                                    {t("conference_calendar.address_error") ??
                                        ""}
                                </StyledError>
                            )}
                    </BasicInputWrap>
                    <DatePickerWrap>
                        <div className={`start`}>
                            <label>
                                {t("conference_calendar.start_date_label") ??
                                    ""}
                            </label>
                            <input
                                type="date"
                                className={`start`}
                                id="start_date"
                                name="start_date"
                                value={formik.values.start_date}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setDisplayDate(new Date(e.target.value));
                                }}
                                disabled={isDisabled}
                            />
                            <input
                                type="time"
                                className={`start`}
                                id="start_time"
                                name="start_time"
                                value={formik.values.start_time}
                                onChange={formik.handleChange}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className={`end`}>
                            <label>
                                {t("conference_calendar.end_date_label") ?? ""}
                            </label>
                            <input
                                type="date"
                                className={`end`}
                                value={formik.values.start_date}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setDisplayDate(new Date(e.target.value));
                                }}
                                disabled={isDisabled}
                            />
                            <input
                                type="time"
                                className={`end`}
                                id="end_time"
                                name="end_time"
                                value={formik.values.end_time}
                                onChange={formik.handleChange}
                                disabled={isDisabled}
                            />
                        </div>
                    </DatePickerWrap>
                    <StyledDescriptionWrap>
                        <textarea
                            id="description"
                            placeholder={
                                t("conference_calendar.description") ?? ""
                            }
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            disabled={isDisabled}
                        />
                        {formik.touched.description &&
                            Boolean(formik.errors.description) && (
                                <StyledError>
                                    {t(
                                        "conference_calendar.description_error"
                                    ) ?? ""}
                                </StyledError>
                            )}
                    </StyledDescriptionWrap>
                    <BasicInputWrap>
                        <input
                            type="number"
                            id="participant_count"
                            name="participant_count"
                            placeholder={
                                t("conference_calendar.participant_count") ?? ""
                            }
                            value={formik.values.participant_count}
                            onChange={formik.handleChange}
                            disabled={isDisabled}
                        />
                    </BasicInputWrap>
                </EventInputsWrap>
                {(formik.touched.start_date &&
                    Boolean(formik.errors.start_date)) ||
                    (formik.touched.start_time &&
                        Boolean(formik.errors.start_time)) ||
                    (formik.touched.end_time &&
                        Boolean(formik.errors.end_time) && (
                            <StyledError>
                                {t("conference_calendar.dates_error") ?? ""}
                            </StyledError>
                        ))}
                {isDisabled ? null : (
                    <ActionNav>
                        {selectedEvent ? (
                            <ActionButton
                                label={t("conference_calendar.update") ?? "Upd"}
                            />
                        ) : (
                            <ActionButton
                                label={t("conference_calendar.save") ?? "Save"}
                            />
                        )}
                        {selectedEvent && (
                            <DeleteButton handleClick={() => setPopup(true)} />
                        )}
                    </ActionNav>
                )}
            </StyledForm>

            {popup && selectedEvent && (
                <ConfirmationModal
                    proceedHandler={() => {
                        setPopup(false);
                        deleteEvent(selectedEvent);
                    }}
                    cancelHandler={() => setPopup(false)}
                />
            )}
        </Backdrop>
    );
};
