import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-[#eeeeee] mb-6">
        <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div>
                    <p className="font-semibold text-gray-800">Quienes Somos?</p>
                    <div className="flex flex-col items-start mt-5 space-y-2"> 
                        <Link href={`/busines/#quienessomos`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Quienes Somos?</Link>
                        <Link href={`/busines/#mision`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Mision</Link>
                        <Link href={`/busines/#vision`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Vision</Link>
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
                    <Link href={`/services/#polisaa`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pólizas de Salud</Link>
                        <Link href={`/services/#polisab`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pólizas Comerciales</Link>
                        <Link href={`/services/#polisac`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Pólizas de Vida</Link>
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Contacto</p>
                    <p className="font-semibold text-gray-800">Java Lifewealth Group LLC</p>
                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <Link href={`/services/#polisaa`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">corporationjjh@gmail.com</Link>
                        <Link href={`/services/#polisab`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">2147648953</Link>
                        <Link href={`/services/#polisac`} className="text-gray-600 transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">(737) 325-1288</Link>
                    </div>
                </div>
            </div> 
        </div>
    </footer>
  )
}
