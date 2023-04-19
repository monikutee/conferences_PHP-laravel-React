import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface CloseButtonProps {
    onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = (props) => {
    return (
        <div className="create-event_modal-close">
            <nav>
                <button
                    type="button"
                    className="create-event_modal-closeBtn"
                    id="create-event-modal-close"
                    onClick={props.onClick}
                >
                    x
                </button>
            </nav>
        </div>
    );
};

export const SaveButton: React.FC = () => {
    return (
        <button type="submit" className="create-event_modal-saveBtn">
            Save
        </button>
    );
};

export const UpdateButton: React.FC = () => {
    return (
        <nav>
            <button type="submit" className="create-event_modal-saveBtn">
                Update
            </button>
        </nav>
    );
};

export const DeleteButton: React.FC<{ handleClick: () => void }> = ({
    handleClick,
}) => {
    return (
        <nav>
            <button
                type="button"
                className="create-event_modal-saveBtn"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </nav>
    );
};
