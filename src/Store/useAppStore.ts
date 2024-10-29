import { create } from "zustand";
import { createRecipiesSlice, RecipesSliceType } from "./recipeSlice";


export const useAppStore = create<RecipesSliceType>( (...a) => ({
    ...createRecipiesSlice(...a)
}))