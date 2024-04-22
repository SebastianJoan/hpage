import { Footer, Navbar } from '@/components'
import React from 'react'

import service_image from '../../../public/trailer-trucks-driving-road-surrounded-by-beautiful-green-trees.jpg'
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
        <div className="absolute inset-0 bg-black opacity-60" ></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
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
      <div className='w-full h-auto flex flex-col bg-blue-500 md:flex-row justify-between items-center  justify-items-center  px-4 md:px-16 lg:px-32'>
        <div className='w-full md:w-1/2 h-auto flex flex-col justify-around items-center gap-3 p-4 md:p-8 '>
          <h1 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mt-6'>
            Polizas 
          </h1>
          <span className='text-base md:text-lg text-black'>
            TPA SERVICES LLC nace de la necesidad de muchos comerciantes de cargas en los Estados Unidos, quienes deben buscar en muchos lugares para obtener un buen servicio, 
            aquí encontrarás en un solo lugar y en pocos clics todo lo que buscas. <br /> TPA SERVICES LLC nace de la necesidad de muchos comerciantes de cargas en los Estados Unidos, quienes deben buscar  
          </span>
        </div>
        
      </div>
      <br />
      <div className='w-full h-auto flex flex-col justify-start items-start  justify-items-center px-4 md:px-16'>
        <h3 className='text-2xl md:text-3xl font-bold text-center text-gray-900 mt-6'>
          Servicios
        </h3>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
        </div>
      </div>
      <br />
      <Footer/>
    </main>
  )
}
