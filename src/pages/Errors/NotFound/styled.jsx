import styled from "styled-components"

export const StyleNotFound = styled.main`
  padding: 2rem;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0rem 0.2rem 0.9rem -0.5rem rgba(0, 0, 0, 0.75);

  .container {
    text-align: center;
    max-width: 36rem;
  }
  .pokemon {
    width: clamp(10rem, 20vw, 15rem);
    /* width: 15rem; */
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 0.7rem;
  }
  p {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    text-align: center;
    margin: 1rem 0;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
  }

  a:hover {
    fill: rgb(0, 191, 255);
    color: rgb(0, 191, 255);
    border-bottom: 1px solid rgb(0, 191, 255);
  }
  a:active {
    fill: #00bd10;
    color: #00bd10;
    border-bottom: 1px solid #00bd10;
  }
  button {
    margin-top: 1rem;
  }
`
