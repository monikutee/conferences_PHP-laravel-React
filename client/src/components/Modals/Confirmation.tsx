import React from "react";
import { Backdrop, StyledConfirmation } from "./Modals.styled";
import { useTranslation } from "react-i18next";

export const ConfirmationModal: React.FC<{
    proceedHandler: () => void;
    cancelHandler: () => void;
}> = ({ proceedHandler, cancelHandler }) => {
    const { t } = useTranslation();
    return (
        <Backdrop>
            <StyledConfirmation>
                {t("conference_calendar.confirmation")}
                <div className="action">
                    <button
                        className="create-event_modal-saveBtn"
                        onClick={proceedHandler}
                    >
                        {t("conference_calendar.proceed")}
                    </button>
                    <button
                        className="create-event_modal-saveBtn"
                        onClick={cancelHandler}
                    >
                        {t("conference_calendar.cancel")}
                    </button>
                </div>
            </StyledConfirmation>
        </Backdrop>
    );
};
