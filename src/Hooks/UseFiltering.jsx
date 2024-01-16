import { useCallback } from "react"

export const useFiltering = () => {
  const getListFilteredByName = useCallback((list, nameSearched) => {
    const filteredList =
      nameSearched.trim() === ""
        ? []
        : list.filter((pokemon) =>
            !isNaN(nameSearched)
              ? pokemon.id == parseInt(nameSearched, 10)
              : pokemon.name.toLowerCase().startsWith(nameSearched.toLowerCase())
          )

    return filteredList.length < 200 ? filteredList : []
  }, [])

  return { getListFilteredByName }
}
