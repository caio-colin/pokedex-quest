import { CardStyle } from "../CardPokemon/styled"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const SkeletonCardPokemon = ({ start = 10 }) => {
  return Array.from({ length: start }, (_, index) => (
    <CardStyle key={index} $skeletonAnimation={true}>
      <div>
        <Skeleton height={22.4} borderRadius={0} />
      </div>
      <div>
        <Skeleton width={140.8} height={140.8} />
      </div>
      <ul>
        <Skeleton width={61.6} height={24} />
        <Skeleton width={61.6} height={24} />
      </ul>
      <h3>
        <Skeleton height={18.4} />
      </h3>
    </CardStyle>
  ))
}
