import { StyleNotFound } from "./styled"
import { error404gf } from "../../../imgs/"
import { HouseIcon } from "../../../components/icons"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <StyleNotFound>
      <div className="container">
        <img className="pokemon" src={error404gf} alt="Lost Pokémon" />
        <h1>404 Error - Page Not Found</h1>
        <p>Oops! It looks like the page you are looking for cannot be found.</p>
      </div>
      <Link to="/">
        <span>Go to home page</span>
        <HouseIcon size={16} />
      </Link>
    </StyleNotFound>
  )
}
