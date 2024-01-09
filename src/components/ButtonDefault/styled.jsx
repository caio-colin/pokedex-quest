import styled from "styled-components"

export const ButtonStyle = styled.button`
  text-transform: capitalize;
  display: block;
  color: white;
  border: none;
  outline: none;
  background-color: rgb(67, 132, 154);
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: rgb(67, 99, 154);
  }
  &:disabled {
    color: #ccc;
    background-color: rgb(128, 134, 146);
    cursor: initial;
  }
`
