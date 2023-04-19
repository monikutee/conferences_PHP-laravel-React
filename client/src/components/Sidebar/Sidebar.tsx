import * as React from "react";
import { Calendar } from "./Calendar";
import { Context } from "../../contextStore";
import { StyledAside, CreateBtn } from "./Sidebar.styled";

export const Sidebar: React.FC = () => {
    const { setModalVisibility, user } = React.useContext(Context);
    return (
        <StyledAside>
            {user && (
                <CreateBtn
                    id="create-event"
                    onClick={() => setModalVisibility(true)}
                >
                    Create Event
                </CreateBtn>
            )}
            <Calendar />
        </StyledAside>
    );
};
