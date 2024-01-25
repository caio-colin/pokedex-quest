import styled from "styled-components"

export const ButtonStyle = styled.button`
  text-transform: capitalize;
  display: block;
  color: ${({ $theme }) => $theme.buttonDefault.textColor};
  border: none;
  outline: none;
  background-color: ${({ $theme }) => $theme.buttonDefault.backgroundColor};
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    transition: unset;
    background-color: ${({ $theme }) => $theme.buttonDefault.backgroundColorActive};
  }
  &:disabled {
    transition: unset;
    color: ${({ $theme }) => $theme.buttonDefault.textColorDisabled};
    background-color: ${({ $theme }) => $theme.buttonDefault.backgroundColorDisabled};
    cursor: initial;
  }
`
