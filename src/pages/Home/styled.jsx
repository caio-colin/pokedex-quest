import styled from "styled-components"

export const MainStyle = styled.main`
  width: 60.1rem;
  padding: 1rem;
  border: 1px solid ${({ $theme }) => $theme.container.borderColor};
  box-shadow: 0rem 0rem 0.35rem ${({ $theme }) => $theme.container.boxShadow};
  background-color: ${({ $theme }) => $theme.container.backgroundColor};
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
  @media (max-width: 1024px) {
    width: 53.499375rem; // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
  }
  @media (max-width: 896px) {
    width: 36.5rem;
  }
  @media (max-width: 640px) {
    width: 26rem; // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
  }
  @media (max-width: 450px) {
    border-radius: unset;
    border-radius: 0 0 5px 5px;
    width: 100%;
    & a {
      width: 100%;
      min-width: 15.25rem;
    }
  }
`
export const HeaderStyle = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: block;
    > :last-child {
      margin: 1rem auto 0;
    }
  }
`

export const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
`
