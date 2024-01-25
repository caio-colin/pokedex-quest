import styled from "styled-components"

export const StyleGoToTop = styled.div`
  position: absolute;
  z-index: 5555;
  button {
    fill: ${({ $theme }) => $theme.buttonDefault.textColor};
    cursor: pointer;
    position: fixed;
    z-index: 99999999;
    right: 1.5rem;
    bottom: 1.5rem;
    border: none;
    outline: none;
    transition: color ease-in-out 0.5s;
    background-color: ${({ $theme }) => $theme.buttonDefault.backgroundColor};
    border-radius: 50%;
    width: 3rem;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
      background-color: ${({ $theme }) => $theme.buttonDefault.backgroundColorActive};
    }
    color: rgb(1, 1, 123);
  }

  span {
    width: 50px;
    height: 50px;
    background-color: red;
  }
`
