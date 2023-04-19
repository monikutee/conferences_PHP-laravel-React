import * as React from "react";
import { SidebarCalendarDate } from "../../types/index";
import {
    getShortMonthYearString,
    nextMonth,
    previousMonth,
} from "../../utils/dateHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CalendarHeader } from "./Sidebar.styled";

export const CalendarNavigation: React.FC<SidebarCalendarDate> = React.memo(
    ({ displayMonthDate, setDisplayMonthDate }) => {
        return (
            <CalendarHeader>
                <span id="calendar-date" className="label">
                    {getShortMonthYearString(displayMonthDate)}
                </span>
                <div className="nav">
                    <div
                        className="prev"
                        id="sidebar__previous-month"
                        onClick={() => {
                            setDisplayMonthDate(
                                previousMonth(displayMonthDate)
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div
                        className="next"
                        id="sidebar__next-month"
                        onClick={() => {
                            setDisplayMonthDate(nextMonth(displayMonthDate));
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
            </CalendarHeader>
        );
    }
);
