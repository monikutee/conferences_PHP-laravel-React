import * as React from "react";
import {
    nextWeek,
    previousMonth,
    previousWeek,
    nextMonth,
    getLongMonthYearString,
} from "../../utils/dateHelper";
import { Context } from "../../contextStore";
import {
    StyledContentNav,
    TodayBtn,
    MonthNav,
    MonthNavArrows,
    MonthYearLabel,
} from "./Navbar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const ContentNavigation: React.FC = () => {
    const { t } = useTranslation();
    const { isWeekLayout, displayDate, setDisplayDate } =
        React.useContext(Context);

    function changeDisplayDate(
        callbackForWeek: (date: Date) => Date,
        callbackForMonth: (date: Date) => Date
    ) {
        if (isWeekLayout) {
            setDisplayDate(callbackForWeek(displayDate));
            setDisplayDate(callbackForWeek(displayDate));
        } else {
            setDisplayDate(callbackForMonth(displayDate));
            setDisplayDate(callbackForMonth(displayDate));
        }
    }

    return (
        <StyledContentNav>
            <TodayBtn
                type="button"
                id="today-button"
                onClick={() => {
                    setDisplayDate(new Date());
                }}
            >
                {t("conference_calendar.today")}
            </TodayBtn>
            <MonthNav>
                <MonthNavArrows
                    id="navbar_previous"
                    onClick={() => {
                        changeDisplayDate(previousWeek, previousMonth);
                    }}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </MonthNavArrows>
                <MonthNavArrows
                    id="navbar_next"
                    onClick={() => {
                        changeDisplayDate(nextWeek, nextMonth);
                    }}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </MonthNavArrows>
            </MonthNav>
            <MonthYearLabel>
                {getLongMonthYearString(displayDate)}
            </MonthYearLabel>
        </StyledContentNav>
    );
};
