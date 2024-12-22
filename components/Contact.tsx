import React from 'react'
import { Formulaire } from './Form'

export const Contact = () => {
  return (
    <div className='px-4 py-10'>
        <div className='py-5 space-y-5 w-[343px] sm:w-[380px] mx-auto'>
          <h1 className='text-center display_text'>Me <span className='font-extrabold'>Contacter</span></h1>
          <Formulaire />
        </div>
    </div>
  )
}
 