import * as React from "react";
import { getWeekDays } from "../../utils/layoutHelper";
import { Cell } from "./Cell";

interface RowProps {
    date: Date;
    hour: number;
}

export const Row: React.FC<RowProps> = ({ date, hour }) => {
    return (
        <tr>
            {getWeekDays(date).map((cell: Date, idx: number) => {
                return (
                    <Cell
                        key={cell + "-" + hour}
                        cellDate={cell}
                        hour={hour}
                        day={idx}
                    />
                );
            })}
        </tr>
    );
};
