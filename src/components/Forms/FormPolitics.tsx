'use client'

import Link from 'next/link'
import React from 'react'
import { NotVisibleForm } from '../../../store/PolitySecure';
import { useAppDispatch } from '../../../store';

export default function FormPolitics() {
  
  const dispatch  = useAppDispatch(); 
  const onClose = () => {
    dispatch( NotVisibleForm());
  }
  
  return (
    <section className="w-full max-w-md p-4 border border-white dark:bg-blue-800  dark:border-blue-700 rounded-2xl">
        <h2 className="font-semibold text-white dark:text-white">
            Politicas de privacidad y seguridad
        </h2>
        <p className="mt-4 text-sm text-white dark:text-gray-300">
            Este sitio web está sujeto a nuestras estrictas políticas de privacidad y seguridad para garantizar el manejo seguro de los datos. Puedes revisar nuestras políticas de datos haciendo clic <Link href='/politics' className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500">aquí</Link>. <br /><br /> Al aceptar nuestras políticas, este modal se cerrará y podrás acceder a nuestra página web. Recuerda que es necesario aceptar estas políticas para garantizar la protección de tu información personal y navegar por nuestro sitio.
        </p> 
        <br />
        <button onClick={()=>{onClose()}} className="w-full text-xs border text-white hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-white hover:text-blue-800 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Aceptar Politicas de privacidad
        </button>
    </section>
  )
}
