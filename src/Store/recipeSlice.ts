import { StateCreator } from "zustand"
import { getCategories, getDrinkById, getRecipes } from "../Services/RecibeService"
import { Categories, Drink, DrinkById, Drinks, SearchFilter } from "../types"



export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    drinkDetail: DrinkById
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
    getDrink: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipiesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks:{
        drinks: []
    },
    drinkDetail: {} as DrinkById,
    modal: false,
    fetchCategories: async () => {
       const categories = await getCategories()
       set({
        categories
       })
       
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    getDrink: async (id) => {
        const DrinkDataID = await getDrinkById(id)
        set({
            drinkDetail: DrinkDataID,
            modal: true
        })

        
    },
    closeModal: () => {
        set({
            modal:false,
            drinkDetail: {} as DrinkById
        })
    }
})