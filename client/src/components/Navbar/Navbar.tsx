import * as React from "react";
import { ContentNavigation } from "./ContentNavigation";
import { LayoutSelector } from "./LayoutSelector";
import { StyledNav, StyledLabel, AuthBtn } from "./Navbar.styled";
import { Context } from "../../contextStore";

export const Navbar: React.FC = () => {
    const { setLoginVisibility, user, logout } = React.useContext(Context);
    return (
        <StyledNav>
            <StyledLabel>Conferences calendar</StyledLabel>
            <ContentNavigation />
            <LayoutSelector />
            {user ? (
                <AuthBtn onClick={logout}>Logout</AuthBtn>
            ) : (
                <AuthBtn onClick={() => setLoginVisibility(true)}>
                    Login
                </AuthBtn>
            )}
        </StyledNav>
    );
};
