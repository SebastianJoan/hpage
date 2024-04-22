import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-[#eeeeee]">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
                <div>
                    <p className="font-semibold text-gray-800">Quienes Somos?</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link href={`/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Inicio</Link>
                        <Link href={`/abouts-us`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Quienes Somos?</Link>
                        <Link href={`/vision`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Mision y vision</Link>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Terminos y Condiciones</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link href={`/bloc`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Política de privacidad</Link>
                        <Link href={`/shop`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Terms and Conditions</Link>
                        <Link href={`/contacto`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Privacy Policy</Link>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Industrias</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <p className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Oil & gas</p>
                        <p className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Programacion y tecnologia</p>
                        <p className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Diseño y Modelado 3D</p>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 md:my-8 dark:border-blue-500 h-2" />  
            <div className="sm:flex sm:items-center sm:justify-center">  
                <div className="flex justify-around items-center gap-4 hover:cursor-pointer">
                    <Link target='blanck' href={`https://www.facebook.com/profile.php?id=61554658362154`}>
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                    </Link>
                    <Link target='blanck' href={`https://twitter.com/Overwatch_Col`}>
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                    </Link>
                    <Link target='blanck' href={`https://www.instagram.com/overwatch_col/`}>
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                    </Link>
                    <Link target='blanck' href={`https://www.linkedin.com/company/overwatch_colombia/`} >
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                    </Link>
                </div>
            </div> 
        </div>
    </footer>
  )
}
