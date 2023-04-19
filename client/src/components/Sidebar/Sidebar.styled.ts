import styled from "styled-components";

export const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    width: 250px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const CreateBtn = styled.button`
    border-radius: 60px;
    background-color: white;
    border: 2px solid rgb(219, 219, 219);
    height: 40px;
    width: 150px;
    cursor: pointer;
    color: rgb(82, 82, 82);
    margin: 35px;

    @media screen and (max-width: 768px) {
        margin: 20px auto;
    }
`;

export const MiniCalendar = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
`;

export const Weekdays = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 8px;
`;

export const CalendarDaysNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 8px;

    div {
        width: 28px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        width: 28px;
        height: 28px;
        background-color: transparent;
        border: 0px;
        padding: 0px;
        color: rgb(82, 82, 82);
    }
    button:hover {
        background-color: rgb(190, 213, 255);
        border-radius: 50px;
    }

    button.today {
        background-color: rgb(65, 127, 242);
        border-radius: 50px;
        color: black;
    }

    button.outer-month-date {
        opacity: 0.5;
    }

    button.selected {
        background-color: rgb(150, 195, 248);
        border-radius: 50px;
        color: black;
    }
`;

export const CalendarHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .label {
        padding-left: 7px;
        font-size: 18px;
    }
    .nav {
        display: flex;
        flex-direction: row;

        .prev {
            display: flex;
            font-size: 25px;
            margin-right: 30px;
            cursor: pointer;
        }
        .next {
            display: flex;
            font-size: 25px;
        }
    }
`;
