import styled from "styled-components"

export const MainStyle = styled.main`
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 0rem 0rem 0.35rem rgba(0, 0, 0, 0.75);
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    "header header"
    "main main"
    "button-decrement button-cremate";
  row-gap: 1rem;
  & > :nth-child(2) {
    grid-area: main;
  }
  header {
    grid-area: header;
  }
  button:nth-last-child(2) {
    justify-self: flex-start;
    grid-area: button-decrement;
  }
  button:last-child {
    justify-self: flex-end;
    grid-area: button-cremate;
  }
`
export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`
export const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
`
export const StyleHomePage = styled.button`
  border: 1px solid #ccc;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  height: 2rem;
  width: 10rem;
  cursor: pointer;
  & svg {
    transform: rotate(180deg);
  }
`
