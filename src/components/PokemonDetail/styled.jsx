import styled from "styled-components"
import { typeColors } from "../../utils/typeColors.js"

export const StyleCardPokemonDetails = styled.div`
  animation: show ease-in-out 1s;
  display: grid;
  grid:
    "info stats moves" 12.1rem
    "info type moves" 3.7rem
    "info abilities abilities" auto /
    22.246875rem 15.776875rem 17.976875rem;
  gap: 1rem;
  text-transform: capitalize;
  /* border: 1px solid #ccc;
  box-shadow: 0rem 0rem 0.35rem -0.2rem rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 1rem;
  background-color: ${({ $typeColor }) => typeColors[$typeColor]}; */
  @media (max-width: 1024px) {
    grid:
      "info info" 24.7rem
      "stats moves" 12.1rem
      "type moves" 3.7rem
      "abilities abilities" auto /
      1fr 23.1rem; // 46,2

    .info img {
      margin: auto;
    }
  }
  @media (max-width: 896px) {
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 450px) {
  }
  h4 {
    font-size: 0.83333125rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  h5 {
  }
  span.img-pokemon {
    width: 21rem;
    height: 21rem;
  }

  /* .stats {
    background-color: rgba(255, 183, 0, 0.6);
  }
  .moves {
    background-color: rgba(255, 238, 0, 0.6);
  }
  .type {
    background-color: rgba(255, 119, 0, 0.6);
  }
  .abilities {
    background-color: rgba(0, 255, 38, 0.6);
  } */
  .box-shadown {
    position: relative;
    /* box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px,
      rgba(15, 15, 15, 0.2) 0px 9px 24px; */
    /* box-shadow: 0.2rem 0.2rem 0.35rem -0.2rem rgba(0, 0, 0, 0.75),
      0rem 0rem 0.35rem -0.2rem rgba(0, 0, 0, 0.75); */
    /* box-shadow: 0rem 0rem 0.35rem -0.2rem rgba(0, 0, 0, 0.75); */
    box-shadow: 0rem 0.2rem 0.9rem -0.5rem rgba(0, 0, 0, 0.75);
  }
  .info,
  .stats,
  .type,
  .moves,
  .abilities {
    border-radius: 10px;
    padding: 0.5rem;
    font-weight: 500;
    border: 1px solid #ccc;
    background-color: white;
  }
  .name-id {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .info {
    grid-area: info;
  }
  section.info {
    background-color: ${({ $typeColor }) => typeColors[$typeColor]};
    align-self: flex-start;
    img {
      width: 21rem;
      height: 21rem;
    }
  }
  .type {
    grid-area: type;
    h4 {
      margin-bottom: unset;
    }
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      flex: 1;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;

      li {
        padding: 0.3rem;
        border-radius: 3px;
        white-space: nowrap;
      }
    }
  }
  .moves {
    grid-area: moves;
    padding-top: unset;
    padding-right: unset;
    padding-bottom: unset;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    h4 {
      padding-top: 0.5rem;
      position: absolute;
      background-color: white;
      width: calc(100% - 1.5rem);
    }
    ul {
      overflow-y: auto;
      padding-top: 1.75rem;
      padding-bottom: 0.5rem;
      li {
        padding: 0.1rem 0;
        display: flex;
        align-items: center;
      }
    }
  }
  .stats {
    grid-area: stats;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .abilities {
    grid-area: abilities;
    align-self: flex-start;
    h5 {
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
    ul {
      li {
        margin-bottom: 0.5rem;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
