import * as React from "react";
import { CalendarNavigation } from "./CalendarNavigation";
import { CalendarDays } from "./CalendarDays";
import { Context } from "../../contextStore";
import { MiniCalendar, Weekdays } from "./Sidebar.styled";
import { useTranslation } from "react-i18next";

export const Calendar: React.FC = () => {
    const { t } = useTranslation();
    const { displayDate } = React.useContext(Context);
    const [displayMonthDate, setDisplayMonthDate] = React.useState(new Date());

    React.useEffect(() => {
        setDisplayMonthDate(displayDate);
    }, [displayDate]);

    return (
        <MiniCalendar>
            <CalendarNavigation
                displayMonthDate={displayMonthDate}
                setDisplayMonthDate={setDisplayMonthDate}
            />
            <Weekdays>
                <div>{t("conference_calendar.monday_char")}</div>
                <div>{t("conference_calendar.tuesday_char")}</div>
                <div>{t("conference_calendar.wednesday_char")}</div>
                <div>{t("conference_calendar.thursday_char")}</div>
                <div>{t("conference_calendar.friday_char")}</div>
                <div>{t("conference_calendar.saturday_char")}</div>
                <div>{t("conference_calendar.sunday_char")}</div>
            </Weekdays>
            <CalendarDays
                displayMonthDate={displayMonthDate}
                setDisplayMonthDate={setDisplayMonthDate}
            />
        </MiniCalendar>
    );
};
