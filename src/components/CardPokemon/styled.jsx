import styled from "styled-components"
import { typeColors } from "../../utils/typeColors"

export const CardStyle = styled.div`
  color: ${({ $theme }) => $theme.container.textColor};
  width: 10.8rem;
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  animation: ${({ $skeletonAnimation }) =>
      $skeletonAnimation ? "show-card-skeleton" : "show-card-pokemon"}
    500ms ease-in-out;
  border: 1px solid
    ${({ type, $theme }) => typeColors[type] || $theme.skeletonCard.borderColor};
  background-color: ${({ type, $theme }) =>
    typeColors[type] || $theme.skeletonCard.backgroundColor};
  box-shadow: 0rem 0.2rem 0.9rem -0.5rem ${({ $theme }) => $theme.container.boxShadow};
  user-select: none;
  cursor: pointer;
  transition: transform ease-in-out 0.2s;
  position: relative;
  @media (max-width: 1024px) {
    width: 12.09984375rem;
  }
  @media (max-width: 896px) {
    width: 10.8rem;
  }
  @media (max-width: 450px) {
    width: calc(100%);
  }
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: translateY(-0.2rem) scale(1.05);
  }
  img {
    animation: show-image 1s ease-in-out;
  }

  & > :nth-child(2),
  & > span:nth-child(2) .react-loading-skeleton {
    margin: 1rem auto;
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 5px;
    display: block;
  }
  h3 {
    text-transform: capitalize;
    margin-top: 1rem;
  }
  & > span:first-child,
  & > div:first-child {
    top: 0rem;
    left: 0rem;
    border-radius: 0 0 5px 0;
    transition: background-color ease-in-out 0.5s;
    background-color: ${({ type, $theme }) =>
      type ? $theme.container.backgroundColor : "transparent"};
    position: absolute;
    padding: 0.2rem 0.5rem;
    width: 40%;
  }
  & > div:first-child {
    padding: initial;
    overflow: hidden;
    top: -0.08rem;
    border-radius: 0 0 5px 0;
  }
  & ul {
    justify-content: center;
    display: flex;
    gap: 1rem;
  }
  @keyframes show-image {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes show-card-pokemon {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes show-card-skeleton {
    from {
      opacity: 0;
      transform: scale(0.5);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
      max-height: 20rem;
    }
  }
`
export const TypeStyle = styled.li`
  color: ${({ $theme }) => $theme?.container?.textColor};
  background-color: ${({ type }) => typeColors[type] || "#fff"};
  border-radius: 2px;
  width: 5.4375rem;
  height: 1.5rem;
  padding: 0.2rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`
