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

export const ActionButton: React.FC<{ label: string }> = ({ label }) => {
    return <button type="submit">{label}</button>;
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
