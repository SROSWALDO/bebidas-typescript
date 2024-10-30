import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../Store/useAppStore';
import { DrinkById } from '../types';

export default function Modal() {

    const { modal, closeModal, drinkDetail, handleClickFavorite, favoriteExist } = useAppStore()

    const renderIngredients = () => {
        const ingredients : JSX.Element[] = []
        for(let i = 1; i <= 6; i++){
            const ingredient = drinkDetail[`strIngredient${i}` as keyof DrinkById]
            const measure = drinkDetail[`strMeasure${i}` as keyof DrinkById]

            if(ingredient && measure) {
                ingredients.push(
                    <li key={i} className='text-lg font-normal'>{ingredient} - {measure}</li>
                )
            }
        }
        return ingredients
    }
  
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-3 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-3 pb-3 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-2 text-center">
                      {drinkDetail.strDrink}
                  </Dialog.Title>

                  <img src={drinkDetail.strDrinkThumb} alt={drinkDetail.strDrink} className='mx-auto w-72' />

                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>
                  {renderIngredients()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>
                  <p className='text-lg'>{drinkDetail.strInstructions}</p>
                  <div className='mt-5 flex justify-between gap-4'>
                    <button onClick={closeModal} className='w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500'>Cerrar</button>
                    <button onClick={() => {
                      handleClickFavorite(drinkDetail)
                      closeModal()
                    }} className='w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500'>{favoriteExist(drinkDetail.idDrink) ? 'Eliminar Favorito' : 'Agregar a Favoritos' }</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}