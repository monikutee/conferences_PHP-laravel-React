import * as React from "react";
import { ContentNavigation } from "./ContentNavigation";
import { LayoutSelector } from "./LayoutSelector";
import { StyledNav, StyledLabel } from "./Navbar.styled";

export const Navbar: React.FC = () => {
    return (
        <StyledNav>
            <StyledLabel>Conferences calendar</StyledLabel>
            <ContentNavigation />
            <LayoutSelector />
        </StyledNav>
    );
};
