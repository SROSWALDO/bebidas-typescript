import { useAppStore } from "../Store/useAppStore";
import { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {

    const { getDrink } = useAppStore()

  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img src={drink.strDrinkThumb} className="hover:scale-125 hover:rotate-2 transition-transform" alt={`Imagen de ${drink.strDrink}`} />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button onClick={() => getDrink(drink.idDrink)} className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">Ver receta</button>
      </div>
    </div>
  );
}
