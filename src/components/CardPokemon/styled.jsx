import styled from "styled-components"
import { typeColors } from "../../utils/typeColors"

export const CardStyle = styled.li`
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ type }) => typeColors[type] || "#ccc"};
  animation: show 0.5s ease-in-out;
  background-color: ${({ type }) => typeColors[type] || "#fff"};
  box-shadow: 0rem 0.2rem 0.9rem -0.5rem rgba(0, 0, 0, 0.75);
  user-select: none;
  cursor: pointer;
  transition: transform ease-in-out 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: translateY(-0.2rem) scale(1.05);
  }
  img {
    animation: show 1s ease-in-out;
  }

  & > :nth-child(2),
  /* & > .react-loading-skeleton:nth-child(2), */
  & > span:nth-child(2) .react-loading-skeleton {
    margin: 1rem 0;
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 5px;
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
    background-color: #fff;
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

  @keyframes show {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`
export const TypeStyle = styled.li`
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
