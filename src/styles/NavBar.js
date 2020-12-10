import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 20vh;
  background-color: #36a9e1;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 10vh;
  margin-top: -10vh;
  z-index: 0;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    height: 250px;
    left: -5%;
    right: -5%;
    border-radius: 100% 100% 0 0;
    bottom: -175px;
    background: #fff;
  }
`;
