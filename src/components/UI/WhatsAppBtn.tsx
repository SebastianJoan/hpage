import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import whatsapp_icon from '../../../public/Icons/whatsapp.png'

interface Props{
    phone:string
}

export default function WhatsAppBtn({phone}:Props) {
  return (
    <>
      <Link href={`https://wa.me/57${phone}`} target='blanck' className='hidden md:flex  w-[65px] h-[65px] bg-green-500 text-white absolute bottom-10 right-10 z-20 rounded-full shadow-md shadow-black p-2'>
          <Image
              alt='whatsapp icon'
              src={whatsapp_icon}
              width={whatsapp_icon.width}
              height={whatsapp_icon.height}
              className='w-full h-full object-cover'
          >
          </Image>
      </Link>
      <Link href={`https://wa.me/57${phone}`} target='blanck' className='fixed md:hidden w-full h-[50px] max-h-[50px] flex flex-row gap-3 justify-center items-center bg-green-500 text-white font-semibold bottom-0 z-20 shadow-md shadow-black p-4'>
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
