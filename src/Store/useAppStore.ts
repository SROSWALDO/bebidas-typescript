import { create } from "zustand";
import { createRecipiesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoriteSlice, FavoritesSliceType } from "./favoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>( (...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
}))