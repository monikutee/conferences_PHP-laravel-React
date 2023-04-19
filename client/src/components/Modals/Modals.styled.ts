import styled from "styled-components";

export const Backdrop = styled.div`
    display: grid;
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 29%);
`;

export const StyledForm = styled.form<{ width: string; height: string }>`
    display: flex;
    flex-direction: column;
    width: ${(p) => p.width};
    background-color: white;
    height: ${(p) => p.height};
    margin: 12% auto;
    justify-content: space-between;
`;

export const StyledConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: rgb(168, 23, 23);
    color: white;
    height: 130px;
    margin: 25% auto;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .action {
        display: flex;
        gap: 10px;
        button {
            width: 80px;
            border: 1px solid white;
            background-color: transparent;
            border-radius: 8px;
            color: white;
            cursor: pointer;
        }
    }
`;

export const CloseForm = styled.nav`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    background-color: whitesmoke;

    button {
        background: transparent;
        border: 0;
        color: #5f6368;
        opacity: 1;
        cursor: pointer;
    }
`;

export const EventInputsWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const BasicInputWrap = styled.div`
    margin-top: 25px;
    margin-left: 45px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    input {
        border: 0;
        border-bottom: 1px solid #5f6368;
    }
`;

export const StyledError = styled.span`
    color: red;
    font-size: 14px;
    display: block;

    #title-error-message {
        margin-top: 2px;
        font-size: 14px;
    }

    #date-error-message {
        margin-left: 43px;
        margin-bottom: 5px;
    }
`;

export const DatePickerWrap = styled.div`
    margin-top: 40px;
    margin-left: 45px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;

    input {
        border: 1px solid #5f6368;
        border-radius: 6px;
        background-color: transparent;
    }

    .start {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .end {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    label {
        margin-right: 6px;
    }
`;

export const StyledDescriptionWrap = styled.div`
    margin-top: 20px;
    margin-left: 45px;
    margin-right: 20px;

    textarea {
        height: 151px;
        width: 90%;
        resize: none;
    }
`;

export const ActionNav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: whitesmoke;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    button {
        border: 1px solid;
        background-color: transparent;
        border-radius: 8px;
        color: #5f6368;
        margin-right: 20px;
        cursor: pointer;
    }
`;
