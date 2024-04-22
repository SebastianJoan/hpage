// import Link from 'next/link'
// import React from 'react'

// export default function Navbar() {
    
//     const ListButtons = [{
//         Name : "Inicio",
//         Link: "/"
//     },{
//         Name : "Quienes Somos?",
//         Link: "/busines"
//     },{
//         Name : "Servicios",
//         Link: "/services"
//     },{
//         Name : "Contacto",
//         Link: "/contact"
//     }]

//     return (
//         <nav className='w-full h-[50px] px-8 flex justify-between items-center bg-blue-600 absolute top-0 z-10'>
//             <div>
//                 Logo
//             </div>
//             <div className='w-auto h-full gap-3 flex justify-center items-center'>
//                 {
//                     ListButtons ? 
//                         ListButtons.map((data, index) => (
//                             <Link key={index} href={`${data.Link}`} className='w-auto px-4 py-2 h-auto hover:bg-white hover:text-blue-800 font-semibold rounded-md shadow-sm transition duration-700 ease-in-out'>
//                                 { data.Name }
//                             </Link>
//                         )) : null
//                 }
//             </div>
//         </nav>  
//     )
// }

"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import Logo_Emora from '../../../public/camion (1).png';
import Link from 'next/link';

export default function Appbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const ListButtons = [{
        Name : "Inicio",
        Link: "/"
    },{
        Name : "Quienes Somos?",
        Link: "/busines"
    },{
        Name : "Servicios",
        Link: "/services"
    },{
        Name : "Contacto",
        Link: "/contact"
    }]
 
  return (
    <>
      <div className='hidden absolute z-10 top-0 bg-blue-500 text-white w-full h-auto px-4 py-2 sm:flex justify-around items-center  '>
        <Link href={`/`} className='w-auto h-[50px] flex justify-center items-center gap-3'>
            <div className='w-auto h-full'>
            <Image
                src={Logo_Emora}
                alt='Logo EMora'
                width={Logo_Emora.width}
                height={Logo_Emora.height}
                className='w-full h-full object-cover'
            />
            </div>
            <h1 className='font-bold text-xl'>Java Lifewealth Group LLC</h1>
        </Link>
        <div className='w-auto h-auto flex flex-row gap-3 '>
            {
                ListButtons ? 
                    ListButtons.map((data, index) => (
                        <Link key={index} href={`${data.Link}`} className='w-auto px-4 py-2 h-auto hover:bg-white hover:text-blue-800 font-semibold rounded-md shadow-sm transition duration-700 ease-in-out'>
                            { data.Name }
                        </Link>
                    )) : null
            }
        </div>
      </div>
      <div className='fixed  z-10 w-full h-auto px-4 py-2 flex flex-col sm:hidden bg-blue-500 text-white'>
        <div className='w-full flex justify-center items-center'>
          <div className='w-auto h-[50px] flex justify-center items-center gap-3'>
            <Link href="/" className='w-full h-full flex justify-center items-center gap-3'>
              <div className='w-auto h-full'>
                <Image
                    src={Logo_Emora}
                    alt='Logo EMora'
                    width={Logo_Emora.width}
                    height={Logo_Emora.height}
                    className='w-full h-full object-cover'
                />
              </div>
              <h1 className='font-bold text-base'>Java Lifewealth Group LLC</h1>
            </Link>
            <button className='w-[35px] HambMenu' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
              <div className='HambMenuDiv'></div>
              <div className='HambMenuDiv'></div>
              <div className='HambMenuDiv'></div>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden' } w-full flex-col justify-center items-center gap-2`}>
            {
                ListButtons ? 
                    ListButtons.map((data, index) => (
                        <Link key={index} href={`${data.Link}`} className='w-auto px-4 py-2 h-auto hover:bg-white hover:text-blue-800 font-semibold rounded-md shadow-sm transition duration-700 ease-in-out'>
                            { data.Name }
                        </Link>
                    )) : null
            }
        </div>
      </div>
    </> 
  )
}
