import styled from "styled-components"

export const ContainerStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
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
`
