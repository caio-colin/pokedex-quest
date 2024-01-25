import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  ul li,
  ol li,input,button, div {
    font-size: 0.83333125rem;
    list-style: none;
  }
  a{
    color: initial;
    text-decoration: none;
  }
}
html body *{
  transition: background-color ease-in-out 0.5s, color ease-in-out 0.1s;
}
body {
  background-color: ${({ $theme }) => $theme.body.backgroundColor};
  transition: background-color ease-in-out 0.5s
  
}

body > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 450px) {
    padding: unset;
    padding-bottom: 1rem;
  }
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-moz-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.4);
}

::-moz-scrollbar-track {
  background: rgba(255,255,255,0.4);
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-moz-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-moz-scrollbar-thumb:hover {
  background: #555;
}
`
