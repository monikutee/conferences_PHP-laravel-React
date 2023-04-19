import styled from "styled-components";

export const StyledMonthLayout = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, minmax(40px, 1fr));
    grid-auto-rows: 1fr;
`;

export const StyledMonthDays = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid rgb(184, 184, 184);
    border-bottom: 1px solid rgb(184, 184, 184);
`;

export const StyledDaysBtn = styled.button`
    background-color: transparent;
    border: 0px;
    height: 25px;
    padding: 0px;
    width: 25px;
    color: rgb(82, 82, 82);
    font-size: 13px;
    cursor: pointer;

    &:hover {
        font-size: 16px;
        background-color: rgb(190, 213, 255);
        border-radius: 50px;
    }

    &.month_table-today_date {
        background-color: rgb(65, 127, 242);
        border-radius: 50px;
        color: black;
    }

    &.month_table-outer_date {
        color: rgb(154, 154, 154);
    }

    &.selected {
        background-color: rgb(150, 195, 248);
        border-radius: 50px;
        color: black;
    }
`;

export const EventList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const ShowMoreBtn = styled.div`
    font-weight: bold;
    font-size: 12px;
    margin: auto;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: rgb(57, 122, 218);
    }
`;

export const StyledEvent = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
