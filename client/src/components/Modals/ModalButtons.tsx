import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CloseForm } from "./Modals.styled";

interface CloseButtonProps {
    onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = (props) => {
    return (
        <CloseForm>
            <button type="button" onClick={props.onClick}>
                x
            </button>
        </CloseForm>
    );
};

export const SaveButton: React.FC = () => {
    return <button type="submit">Save</button>;
};

export const UpdateButton: React.FC = () => {
    return (
        <nav>
            <button type="submit">Update</button>
        </nav>
    );
};

export const DeleteButton: React.FC<{ handleClick: () => void }> = ({
    handleClick,
}) => {
    return (
        <nav>
            <button type="button" onClick={handleClick}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </nav>
    );
};
