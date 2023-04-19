import * as React from "react";
import { WeekLayoutHeader } from "./WeekLayoutHeader";
import { WeekLayoutTable } from "./WeekLayoutTable";
import { createTimeline } from "../../utils/layoutHelper";

export const WeekLayout: React.FC = () => {
    return (
        <div id="selectWeek" className="week_layout">
            <WeekLayoutHeader />
            <div className="layout_table">
                <ul className="timeline">
                    {createTimeline().map((timeline, index) => (
                        <li
                            key={index + "timeline"}
                            id={(index + 1).toString()}
                        >
                            {timeline}:00
                        </li>
                    ))}
                </ul>
                <div className="week_table">
                    <WeekLayoutTable />
                </div>
            </div>
        </div>
    );
};
