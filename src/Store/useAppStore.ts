import { create } from "zustand";
import { createRecipiesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoriteSlice, FavoritesSliceType } from "./favoriteSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType>( (...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoriteSlice(...a)
}))