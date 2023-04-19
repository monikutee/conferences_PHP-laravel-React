import * as React from "react";
import { Context } from "../../contextStore";
import { TableSelector, TableSelectorWrap } from "./Navbar.styled";
import { useTranslation } from "react-i18next";

export const LayoutSelector: React.FC = () => {
    const { t } = useTranslation();
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
                <option value="week">{t("conference_calendar.week")}</option>
                <option value="month">{t("conference_calendar.month")}</option>
            </TableSelector>
        </TableSelectorWrap>
    );
};
