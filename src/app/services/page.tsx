import { Footer, Navbar, WhatsAppBtn } from '@/components'
import React from 'react'

import service_image from '../../../public/Backgrounds/pexels-kevinbidwell-2348359.jpg';
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  
  const ListaFormularios = [{
    Nombre:"UCR",
    Link:""
  },{
    Nombre:"BOC-3",
    Link:""
  },{
    Nombre:"TXDMV",
    Link:""
  },{
    Nombre:"ITIN",
    Link:""
  },{
    Nombre:"USDOT",
    Link:""
  },{
    Nombre:"MC",
    Link:""
  },{
    Nombre:"IFTAX",
    Link:""
  }]

  const ListCards = [{
    Tittle: "Pólizas comerciales",
    Descripcion:"Encontraremos la mejor poliza que se adapte a tus necesidades y presupuesto."
  },{
    Tittle: "Permisos estatales y federales",
    Descripcion:"Gestionamos cualquier permiso federal y estatal para la industria transportista: USDOT, LLC , INC, DBA, CORP, LP, MC...."
  },{
    Tittle: "Asesoramiento y gestión",
    Descripcion:"Asesoramiento para obtener la mejor póliza, ubicación estratégica de tu negocio y todo lo relacionado a incidentes, reclamos y demandas."
  }]

  const ListFormatos = [{
    Nombre:"Descargar Formulario W9",
    Link:""
  },{
    Nombre:"Descargar Formulario MCS150",
    Link:""
  }]

  return (
    <main className='w-full h-screen overflow-hidden overflow-y-auto bg-[#eeeeee]'>
      <Navbar/>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black opacity-60 z-10" ></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
          <div className='px-4'>
            <h1 className="text-xl md:text-5xl font-bold mb-4 text-white">
              Conduzca con seguridad <br /> asesorado por nosotros
            </h1> 
          </div>
        </div>
        <Image
          src={service_image}
          alt='Imagen de motos'
          width={service_image.width}
          height={service_image.height}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full h-auto flex flex-col justify-start items-center mt-4  justify-items-center  px-4 md:px-16 lg:px-32'>
        <h1 className = 'text-2xl md:text-3xl font-bold text-center text-gray-900 mt-6'>
          Servicios
        </h1>
        <br />
        <span className='text-base md:text-lg text-black'>
          Nuestros servicios abarcan desde permisos para tu camión o flota de camiones, hasta seguros y asesoramiento en el proceso de creación de tu nuevo negocio.
        </span>
        <br />
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-3'>
          {
            ListaFormularios ? 
              ListaFormularios.map((data, index) => (
                <Link key={index} href={data.Link} className='w-auto h-auto px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold transition duration-500 ease-in-out rounded-md shadow-sm shadow-black'>
                  { data.Nombre }
                </Link> 
              )) : null
          }
        </div>
        <span className='text-base md:text-lg text-black'>
          Descarga los formularios W9 y MCS150 para tu empresa de transporte
        </span>
        <br />
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 gap-3'>
          {
            ListFormatos ? 
              ListFormatos.map((data, index) => (
                <Link key={index} href={data.Link} className='w-auto h-auto px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold transition duration-500 ease-in-out rounded-md shadow-sm shadow-black'>
                  { data.Nombre }
                </Link> 
              )) : null
          }
        </div>
      </div>
      <br />
      <div className='w-full h-auto flex flex-col bg-blue-500 gap-3 py-12 px-4 md:px-16 lg:px-32'>
        {
          ListCards ? 
            ListCards.map((data, index) => (
              <div key={index} className='w-full h-auto px-4 py-2 bg-white rounded-md shadow-sm shadow-black flex flex-col '>
                <h3 className='font-bold'>{data.Tittle}</h3>
                <span>{data.Descripcion}</span>
              </div>
            )
          ) : null
         }        
      </div>
      <br />
      <WhatsAppBtn
        phone='3028319211'
      />  
      <Footer/>
    </main>
  )
}
