import { StateCreator } from "zustand"
import { getCategories } from "../Services/RecibeService"
import { Categories } from "../types"



export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
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
       
    }
})