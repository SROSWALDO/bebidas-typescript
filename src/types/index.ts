import { z } from "zod";
import { CategoriesApiResponse, DrinkApi, DrinkAPIResponseSchema, DrinksApiResponse, SearchFilter } from "../Utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponse >

export type SearchFilter = z.infer<typeof SearchFilter>

export type Drinks = z.infer<typeof DrinksApiResponse>

export type Drink = z.infer<typeof DrinkApi >

export type DrinkById = z.infer<typeof DrinkAPIResponseSchema>