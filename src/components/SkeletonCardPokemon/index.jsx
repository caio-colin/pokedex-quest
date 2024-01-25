import { CardStyle } from "../CardPokemon/styled"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider"

export const SkeletonCardPokemon = ({ start = 10 }) => {
  const [theme] = useThemeContext()

  return Array.from({ length: start }, (_, index) => (
    <CardStyle $theme={theme} key={index} $skeletonAnimation={true}>
      <div>
        <Skeleton
          height={22.4}
          borderRadius={0}
          baseColor={theme.skeletonCard.baseColor}
          highlightColor={theme.skeletonCard.highlightColor}
        />
      </div>
      <div>
        <Skeleton
          width={140.8}
          height={140.8}
          baseColor={theme.skeletonCard.baseColor}
          highlightColor={theme.skeletonCard.highlightColor}
        />
      </div>
      <ul>
        <Skeleton
          width={61.6}
          height={24}
          baseColor={theme.skeletonCard.baseColor}
          highlightColor={theme.skeletonCard.highlightColor}
        />
        <Skeleton
          width={61.6}
          height={24}
          baseColor={theme.skeletonCard.baseColor}
          highlightColor={theme.skeletonCard.highlightColor}
        />
      </ul>
      <h3>
        <Skeleton
          height={18.4}
          baseColor={theme.skeletonCard.baseColor}
          highlightColor={theme.skeletonCard.highlightColor}
        />
      </h3>
    </CardStyle>
  ))
}
