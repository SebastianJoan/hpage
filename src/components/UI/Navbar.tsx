"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import { MdMenu } from 'react-icons/md' 

import Logo_Emora from '../../../public/Icons/camion (1).png';
import Link from 'next/link'; 

export default function Appbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const ListButtons = [{
        Name : "Inicio",
        Link: "/"
    },{
        Name : "Quiénes Somos",
        Link: "/busines"
    },{
        Name : "Servicios",
        Link: "/services"
    }]
 
  return (
    <>
      <div className='hidden absolute z-20 top-0 bg-blue-500 text-white w-full h-auto px-4 py-2 sm:flex justify-around items-center  '>
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
      <div className='fixed z-20 p-4 w-full h-auto flex flex-col sm:hidden bg-blue-500 text-white'>
        <div className='w-full  h-[50px] flex justify-start items-center'>
          <Link href="/" className='w-full h-full flex justify-start items-center gap-3'>
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
          <button onClick={ () => setIsMenuOpen(!isMenuOpen) } type="button" className="w-auto h-full relative flex justify-center items-center" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <MdMenu size={50}/>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden' } w-full flex-col justify-center items-center gap-3 p-4`}>
            {
                ListButtons ? 
                    ListButtons.map((data, index) => (
                        <Link key={index} href={`${data.Link}`} className='w-full px-4 py-2 h-auto hover:bg-white hover:text-blue-800 font-semibold rounded-md transition duration-700 ease-in-out'>
                            { data.Name }
                        </Link>
                    )) : null
            }
        </div>
      </div>
    </> 
  )
}
