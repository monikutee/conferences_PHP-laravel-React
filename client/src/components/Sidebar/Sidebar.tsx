import * as React from "react";
import { Calendar } from "./Calendar";
import { Context } from "../../contextStore";
import { StyledAside, CreateBtn } from "./Sidebar.styled";
import { useTranslation } from "react-i18next";

export const Sidebar: React.FC = () => {
    const { t } = useTranslation();
    const { setModalVisibility, user } = React.useContext(Context);
    return (
        <StyledAside>
            {user && (
                <CreateBtn
                    id="create-event"
                    onClick={() => setModalVisibility(true)}
                >
                    {t("conference_calendar.create_new_event")}
                </CreateBtn>
            )}
            <Calendar />
        </StyledAside>
    );
};
