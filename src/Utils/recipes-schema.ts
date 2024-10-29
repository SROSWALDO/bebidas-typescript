import { z } from "zod";

export const CategoriesApiResponse = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});
