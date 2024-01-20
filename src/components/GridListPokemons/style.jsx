import styled from "styled-components"

export const ContainerStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 58rem;
  justify-content: center;
  gap: 1rem;
  .item-selected {
    animation: select-animation ease-in-out 2s;
    z-index: 1;
  }
  @keyframes select-animation {
    0% {
      transform: translateY(0rem);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0rem);
    }
  }
  @media (max-width: 1024px) {
    width: 51.499375rem; // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
    div {
      width: 12.12484375rem;
    }
  }
  @media (max-width: 896px) {
    width: calc(
      (3 * 10.8rem) + (2 * 1rem)
    ); // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
    div {
      width: 10.8rem;
    }
  }
  @media (max-width: 640px) {
    width: calc(
      (2 * 10.8rem) + (1 * 1rem)
    ); // (Item a ser exibido * 10.8rem) + (espaço entre eles * 1rem)
  }
  @media (max-width: 450px) {
    width: 15rem;
    div {
      /* width: calc((51.499375rem / 4) - ( 3 * 1rem)); */
      width: 15rem;
    }
  }
`
