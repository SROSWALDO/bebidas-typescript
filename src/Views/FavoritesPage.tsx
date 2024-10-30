import DrinkCard from "../Components/DrinkCard"
import { useAppStore } from "../Store/useAppStore"

export default function FavoritesPage() {

  const { favorites } = useAppStore()

  return (
    <>
    <h1 className="text-6xl font-extrabold">Favoritos</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      {favorites.map(drink => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </div>
    </>
  )
}
