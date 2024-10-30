import { StateCreator } from "zustand"
import { DrinkById } from "../types"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"


export type FavoritesSliceType = {
    favorites: DrinkById[]
    handleClickFavorite: (drink: DrinkById) => void
    favoriteExist: (id: DrinkById['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoritesSliceType & NotificationSliceType, [],[], FavoritesSliceType> = (set, get,api) => ({
    favorites: [],
    handleClickFavorite: (drink) => {
        if(get().favoriteExist(drink.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== drink.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({text: 'Se elimino de favoritos', 
                error: false
            })
        } else {
            set((state) => ({
                favorites: [...state.favorites, drink]
            }))
            createNotificationSlice(set,get,api).showNotification({text: 'Se agrego de favoritos', 
                error: false
            })
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