import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 20vh;
    background-color: #2d2e83;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding-bottom: 10vh;
    mask-image: radial-gradient(100% 50% at bottom, transparent 50%, #fff 51%);
`;

export const HeaderText1 = styled.h1`
    font-size: 50px;
    margin-left: 30px;
`;

export const HeaderText2 = styled.h1`
    font-size: 40px;
    color: #2d2e83;
    background-color: white;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    margin-left: 20px;
`;