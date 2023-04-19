import * as React from "react";
import { Context } from "../../contextStore";
import { TableSelector, TableSelectorWrap } from "./Navbar.styled";

export const LayoutSelector: React.FC = () => {
    const { isWeekLayout, setWeekLayout } = React.useContext(Context);
    const handleChangeLayout = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const layout = event.target;
        if (layout.value === "week") {
            setWeekLayout(true);
        } else {
            setWeekLayout(false);
        }
    };
    return (
        <TableSelectorWrap>
            <TableSelector
                id="layoutSelector"
                onChange={handleChangeLayout}
                value={isWeekLayout ? "week" : "month"}
            >
                <option value="week">Week</option>
                <option value="month">Month</option>
            </TableSelector>
        </TableSelectorWrap>
    );
};
