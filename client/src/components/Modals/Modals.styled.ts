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
`;
