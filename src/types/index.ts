import { z } from "zod";
import { CategoriesApiResponse } from "../Utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesApiResponse >