import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props{
    Nombre:string,
    Descripcion:string,
    ImageData:StaticImageData
}

export default function ServiceCard({ Nombre, Descripcion, ImageData }:Props) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-start w-full  bg-white h-[300px] shadow shadow-black rounded-md'>
        <div className="w-auto h-full">
            <Image
                src={ImageData}
                width={ImageData.width}
                height={ImageData.height}
                className="justify-center w-full h-full object-cover"
                alt="movie.title"
            />
        </div>
        <div className="w-full h-full flex flex-col justify-center p-8">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-start text-blue-500 mt-6">
                { Nombre }
            </h4>
            <span className="text-xl md:text-xl lg:text-base text-justify  ">
                { Descripcion }
            </span>
        </div>
    </div>
  )
}
