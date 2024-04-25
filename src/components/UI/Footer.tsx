import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-[#eeeeee] mb-6">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-4">
                <div>
                    <p className="font-semibold text-gray-800">Quienes Somos?</p>
                    <div className="flex flex-col items-start mt-5 space-y-2"> 
                        <Link href={`/busines/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Quienes Somos?</Link>
                        <Link href={`/busines/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Mision</Link>
                        <Link href={`/busines/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Vision</Link>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Terminos y Condiciones</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link href={``} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Política de privacidad</Link>
                        <Link href={``} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Terms and Conditions</Link>
                        <Link href={``} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Privacy Policy</Link>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Servicios</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link href={`/services/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pólizas de Salud</Link>
                        <Link href={`/services/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pólizas Comerciales</Link>
                        <Link href={`/services/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pólizas de Vida</Link>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Contacto</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link href={`/services/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">corporationjjh@gmail.com</Link>
                        <Link href={`/services/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">2147648953</Link>
                        <Link href={`/services/`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">(737) 325-1288</Link>
                    </div>
                </div>
            </div>
            {/* <hr className="my-6 border-gray-200 md:my-8 dark:border-blue-500 h-2" />  
            <div className="sm:flex sm:items-center sm:justify-center">  
                <div className="flex justify-around items-center gap-4 hover:cursor-pointer">
                    <Link target='blanck' href={``}>
                        <Image 
                            src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" 
                            width="30" 
                            height="30" 
                            alt="fb" 
                        />
                    </Link>
                    <Link target='blanck' href={``}>
                        <Image 
                            src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" 
                            width="30" 
                            height="30" 
                            alt="tw" 
                            />
                    </Link>
                    <Link target='blanck' href={``}>
                        <Image 
                            src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" 
                            width="30" 
                            height="30" 
                            alt="inst"
                        />
                    </Link>
                    <Link target='blanck' href={``} >
                        <Image 
                            src="https://www.svgrepo.com/show/28145/linkedin.svg" 
                            width="30" 
                            height="30" 
                            alt="in" 
                        />
                    </Link>
                </div>
            </div>  */}
        </div>
    </footer>
  )
}
