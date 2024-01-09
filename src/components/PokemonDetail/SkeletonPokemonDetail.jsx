import { StyleCardPokemonDetails } from "./styled"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const SkeletonPokemonDetail = () => {
  return (
    <StyleCardPokemonDetails $loading={false}>
      <section className="info box-shadown">
        <Skeleton height="23.7rem" />
      </section>
      <section className="type box-shadown">
        <h4>type</h4>
        <ul>
          <Skeleton width="4rem" height="1.6rem" />
          <Skeleton width="4rem" height="1.6rem" />
        </ul>
      </section>
      <section className="stats box-shadown">
        <h4>stats</h4>
        <ul>
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} height="1.125rem" />
          ))}
        </ul>
      </section>
      <section className="moves box-shadown">
        <h4>movements</h4>
        <ul>
          <Skeleton count={11} width="97%" height="1.2rem" />
        </ul>
      </section>
      <section className="abilities box-shadown">
        <h4>abilities</h4>
        <ul>
          <li>
            <Skeleton width="30%" height="1.2rem" style={{ marginBottom: "0.5rem" }} />
            <Skeleton count={6} height="1.2rem" />
          </li>
        </ul>
      </section>
    </StyleCardPokemonDetails>
  )
}
