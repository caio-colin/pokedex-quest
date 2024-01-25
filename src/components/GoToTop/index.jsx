import { useInView } from "react-intersection-observer"
import { StyleGoToTop } from "./styled"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"
import { useEffect } from "react"
import { ArrowUpGoToTop } from "../icons/"

export const GoToTop = () => {
  const [theme] = useThemeContext()
  const [refView, inView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <StyleGoToTop $theme={theme}>
      {!inView && (
        <button onClick={handleClick}>
          <ArrowUpGoToTop size="1.5rem" />
        </button>
      )}
      <span ref={refView}></span>
    </StyleGoToTop>
  )
}
