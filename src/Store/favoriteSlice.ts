import { StateCreator } from "zustand"
import { DrinkById } from "../types"


export type FavoritesSliceType = {
    favorites: DrinkById[]
    handleClickFavorite: (drink: DrinkById) => void
    favoriteExist: (id: DrinkById['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (drink) => {
        if(get().favoriteExist(drink.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== drink.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, drink]
            }))
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})