import styled from "styled-components"

export const ContainerStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 58rem;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 1024px) {
    width: calc(
      (4 * 10.8rem) + (3 * 1rem)
    ); // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
  }
  @media (max-width: 896px) {
    width: calc(
      (3 * 10.8rem) + (2 * 1rem)
    ); // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
  }
  @media (max-width: 640px) {
    width: calc(
      (2 * 10.8rem) + (1 * 1rem)
    ); // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
  }
  @media (max-width: 450px) {
    width: 15rem;
  }
`
export const LiStyle = styled.li`
  grid-column: 3;
`
