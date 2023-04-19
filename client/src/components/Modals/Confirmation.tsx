import React from "react";
import { Backdrop, StyledConfirmation } from "./Modals.styled";

export const ConfirmationModal: React.FC<{
    proceedHandler: () => void;
    cancelHandler: () => void;
}> = ({ proceedHandler, cancelHandler }) => {
    return (
        <Backdrop>
            <StyledConfirmation>
                are u sure?
                <button
                    className="create-event_modal-saveBtn"
                    onClick={proceedHandler}
                >
                    proceed
                </button>
                <button
                    className="create-event_modal-saveBtn"
                    onClick={cancelHandler}
                >
                    cancel
                </button>
            </StyledConfirmation>
        </Backdrop>
    );
};
