import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../Services/RecibeService"
import { Categories, SearchFilter } from "../types"



export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
       const categories = await getCategories()
       set({
        categories
       })
       
    },
    searchRecipes: async (filters) => {
        await getRecipes(filters)
    }
})