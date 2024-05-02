import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import whatsapp_icon from '../../../public/Icons/whatsapp.png'

export default function WhatsAppBtn() {
  return (
    <>
      <Link href={`https://wa.me/+12812209292`} target='blanck' className='hidden  w-auto h-auto gap-3 px-4 py-2 md:flex justify-center items-center bg-green-500 hover:bg-green-800 transition duration-700 ease-in-out hover:font-semibold hover:scale-110 text-white absolute bottom-5 right-10 z-30 rounded-md shadow-md shadow-black p-2'>
          <Image
              alt='whatsapp icon'
              src={whatsapp_icon}
              width={whatsapp_icon.width}
              height={whatsapp_icon.height}
              className='w-[25px] h-[25px] object-cover'
          >
          </Image>
          <span>Escribenos a WhatsApp!</span>
      </Link>
      <Link href={`https://wa.me/+12812209292`} target='blanck' className='fixed md:hidden w-full h-[50px] max-h-[50px] flex flex-row gap-3 justify-center items-center bg-green-500 text-white font-semibold bottom-0 z-20 shadow-md shadow-black p-4'>
          <div className='w-auto h-full'>
            <Image
              alt='whatsapp icon'
              src={whatsapp_icon}
              width={whatsapp_icon.width}
              height={whatsapp_icon.height}
              className='w-full h-full object-cover'
            >  
            </Image>
          </div>
          Contacta con nosotros
      </Link>
    </>
  )
}
