import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props{
    Nombre:string,
    Descripcion:string,
    ImageData:StaticImageData
}

export default function ServiceCard({ Nombre, Descripcion, ImageData }:Props) {
  return (
    <div className='flex flex-col items-center justify-start w-full bg-white h-auto shadow shadow-black'>
        <div className="w-full max-h-[380px]">
            <Image
                src={ImageData}
                width={ImageData.width}
                height={ImageData.height}
                className="justify-center w-full h-full object-cover"
                alt="movie.title"
            />
        </div>
        <div className="w-full min-h-[250px] h-auto max-h[300px] flex flex-col p-4">
            <h4 className="hover:text-cyan-700 flex justify-center items-center h-[50px] text-center text-black font-bold sm:text-2xl ">
                { Nombre }
            </h4>
            <span className="w-full h-[170px] py-2 text-sm font-light text-black leading-relaxed">
                { Descripcion }
            </span>
        </div>
    </div>
  )
}
