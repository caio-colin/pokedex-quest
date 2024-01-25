import { useState } from "react"
import { noImageAvaliable } from "../../imgs/"
import { ImgPokemonStyle } from "./styled"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider"

export const PokemonImage = ({ name, sprite, width = 100, height = 100 }) => {
  const [loadingImg, setLoadingImg] = useState(true)
  const [theme] = useThemeContext()

  const handleLoadImg = () => {
    setLoadingImg(false)
  }
  const getImage = (sprite) => {
    return sprite
      ? sprite.other?.dream_world?.front_default ||
          sprite.other["official-artwork"]?.front_default ||
          sprite.front_default ||
          false
      : undefined
  }

  const imageAvailable = getImage(sprite)

  return (
    <>
      {loadingImg && (
        <Skeleton
          width={width}
          height={height}
          baseColor="transparent"
          highlightColor={theme.skeletonCard.highlightColor}
        />
      )}
      <ImgPokemonStyle
        src={imageAvailable || noImageAvaliable}
        onLoad={handleLoadImg}
        $imageAvailable={imageAvailable}
        $laodingImg={loadingImg}
        alt={name}
      />
    </>
  )
}
