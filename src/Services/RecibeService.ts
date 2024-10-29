import axios from "axios"
import { CategoriesApiResponse } from "../Utils/recipes-schema"
import { SearchFilter } from "../types"


export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const { data } = await axios.get(url)
    const result = CategoriesApiResponse.safeParse(data)
    if(result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`

    const { data } = await axios.get(url)
    console.log(data);
    
    const result = CategoriesApiResponse.safeParse(data)
    
    
    if(result.success) {
        return result.data
    }
}