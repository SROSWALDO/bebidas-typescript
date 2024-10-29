import { z } from "zod";

export const CategoriesApiResponse = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const SearchFilter = z.object({
  ingredient: z.string(),
  category: z.string(),
});
