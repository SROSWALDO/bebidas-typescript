import { z } from "zod";
import { CategoriesApiResponse, SearchFilter } from "../Utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponse >

export type SearchFilter = z.infer<typeof SearchFilter>