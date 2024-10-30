import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../Store/useAppStore";

export default function Header() {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/',[pathname])

    const { fetchCategories, categories, searchRecipes, showNotification } = useAppStore()
    
    

    useEffect(() => {
        fetchCategories()
    },[])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    const scrollToPosition = (pixels: number) => {
        window.scrollTo({
            top: pixels,
            behavior: 'smooth'
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(searchFilters).includes('')) {
            showNotification({
                text: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        searchRecipes(searchFilters)
        scrollToPosition(750);
    }

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover bg-no-repeat' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logo" />
                </div>

                <nav className="flex gap-4">
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' }>Inicio</NavLink>
                    <NavLink to="/favorites" className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' }>Favoritos</NavLink>
                </nav>
            </div>

            {isHome && (
                <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-20 p-10 rounded-lg shadow space-y-5 " action="">
                    <div className="space-y-4">
                        <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Nombre o Ingredientes</label>
                        <input onChange={handleChange} value={searchFilters.ingredient} type="text" id="ingredient" name="ingredient" className="p-3 w-full rounded-lg focus:outline-none" placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cofee"/>
                    </div>

                    <div className="space-y-4">
                        <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">Categoria</label>
                        <select onChange={handleChange} value={searchFilters.category} id="category" name="category" className="p-3 w-full rounded-lg focus:outline-none" >
                            <option value="">-- Seleccione --</option>
                            {categories.drinks.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                            ))}
                        </select>
                    </div>

                    <input type="submit" value="Buscar Recetas" className="cursor-pointer bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />
                </form>
            )}

        </div>
      
    </header>
  )
}
