import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { GlobalStyle } from "./styles/GlobalStyle.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <GlobalStyle />
  </>
  // <React.StrictMode>
  // </React.StrictMode>
)