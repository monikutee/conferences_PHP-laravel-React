import * as React from "react";
import { ContentNavigation } from "./ContentNavigation";
import { LayoutSelector } from "./LayoutSelector";
import { StyledNav, StyledLabel, AuthBtn } from "./Navbar.styled";
import { Context } from "../../contextStore";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
    const { setLoginVisibility, user, logout } = React.useContext(Context);
    const { t } = useTranslation();

    return (
        <StyledNav>
            <StyledLabel>{t("conference_calendar.project_name")}</StyledLabel>
            <ContentNavigation />
            <LayoutSelector />
            {user ? (
                <AuthBtn onClick={logout}>
                    {t("conference_calendar.logout")}
                </AuthBtn>
            ) : (
                <AuthBtn onClick={() => setLoginVisibility(true)}>
                    {t("conference_calendar.login")}
                </AuthBtn>
            )}
        </StyledNav>
    );
};
