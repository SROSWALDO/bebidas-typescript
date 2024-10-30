import DrinkCard from "../Components/DrinkCard";
import { useAppStore } from "../Store/useAppStore";

export default function FavoritesPage() {
  const { favorites } = useAppStore();

  return (
    <>
      {favorites.length === 0 ? (
        <p className="my-10 text-center text-6xl text-orange-500 font-bold uppercase">Los favoritos se mostraran aqui</p>
      ) : (
        <>
          <h1 className="text-6xl font-extrabold">Favoritos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {favorites.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
