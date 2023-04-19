import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 10px;
    border-bottom: 1px solid rgb(219, 219, 219);
    padding-left: 22px;
    height: 64px;

    @media screen and (max-width: 768px) {
        padding: 20px 0;
        height: auto;
        flex-wrap: wrap;
    }
`;

export const StyledContentNav = styled.div`
    align-items: center;
    justify-content: left;
    display: flex;
    padding-left: 40px;
    flex: 6;
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const StyledLabel = styled.span`
    align-items: center;
    justify-content: left;
    margin-left: 15px;
    display: flex;
    flex: 2;
    font-size: 25px;
    padding-left: 25px;
    color: rgb(109, 109, 109);
    white-space: nowrap;

    @media screen and (max-width: 768px) {
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: center;
        flex: auto;
        width: 100%;
    }
`;

export const TodayBtn = styled.button`
    border-radius: 5px;
    background-color: white;
    border: 2px solid rgb(219, 219, 219);
    height: 35px;
    width: 60px;
    color: rgb(82, 82, 82);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin: auto;
    }
`;

export const MonthNav = styled.nav`
    display: flex;
    @media screen and (max-width: 768px) {
        margin: auto;
    }
`;

export const MonthNavArrows = styled.div`
    margin-left: 30px;
    font-size: 25px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        margin-left: 10px;
    }
`;

export const MonthYearLabel = styled.span`
    padding-left: 30px;
    font-size: 25px;
    color: rgb(109, 109, 109);
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const TableSelectorWrap = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 2;
`;

export const TableSelector = styled.select`
    border-radius: 5px;
    background-color: white;
    border: 2px solid rgb(219, 219, 219);
    height: 35px;
    width: 78px;
    color: rgb(82, 82, 82);
    cursor: pointer;
`;
