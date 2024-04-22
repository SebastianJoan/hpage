import { Footer, Navbar, ServiceCard, WhatsAppBtn } from '@/components'
import Image from 'next/image'
import React from 'react'

import truck_image from '../../public/Backgrounds/truck-with-white-trailer-drives-down-road-with-mountains-background.jpg';
import truck_driver from './../../public/Backgrounds/pexels-quintingellar-2199293.jpg'

import Image_1 from './../../public/Backgrounds/pexels-500photos-com-15338-93398.jpg'
import Image_2 from './../../public/Backgrounds/pexels-kevinbidwell-2348359.jpg'
import Image_3 from './../../public/Backgrounds/pexels-thatguycraig000-2449454.jpg'

export default function page() {

  const ListServicios = [{
    Nombre:'Pólizas comerciales',
    Descripcion:'Loremes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de t',
    Image:Image_1
  },{
    Nombre:'Permisos estatales y federales',
    Descripcion:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de t',
    Image:Image_2
  },{
    Nombre:'Asesoramiento y gestión',
    Descripcion:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de t',
    Image:Image_3
  }]

  return (
    <main className='w-full h-screen overflow-hidden overflow-y-auto bg-[#eeeeee]'>
      <Navbar/>
      <div className="relative w-full h-full z-10">
        <div className="absolute inset-0 bg-black opacity-60  z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className='px-4'>
            <h1 className="text-xl md:text-5xl font-bold mb-4 text-white">
              Simplifica tu búsqueda de <br /> seguros y permisos como <br /> camionero en Estados Unidos
            </h1> 
          </div>
        </div>
        <Image
          src={truck_image}
          alt='Imagen de motos'
          width={truck_image.width}
          height={truck_image.height}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full h-auto flex flex-col justify-start items-center mt-4  justify-items-center px-4 md:px-16 lg:px-32'>
        <h1 className = 'text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-center text-blue-500 mt-6 font-OleoScriptBold'>
          ¿Quiénes somos?
        </h1>
        <br />
        <span className='text-base md:text-lg lg:text-2xl xl:text-3xl text-black '>
          Somos representantes de póliza comercial especializados en la industria camionera, contamos con el respaldo de compañías líderes en el mercado
          y una amplia cartera de clientes. Entendemos las necesidades de nuestros clientes y nos enfocamos en brindar una atención personalizada, ágil y cordial.
        </span>
        <br />
        <h3 className = 'text-base md:text-lg lg:text-2xl xl:text-3xl text-center mt-6 p-4 bg-blue-500 text-white rounded-md font-semibold'>
          Servicio de atención  al cliente bilingüe
        </h3>
        <br />
      </div>
      <br />
      <div className='w-full h-auto flex flex-col bg-blue-500 md:flex-row justify-between items-center  justify-items-center  px-4 md:px-16 lg:px-32'>
        <div className='w-full md:w-1/2 h-auto flex flex-col justify-start items-start gap-3 p-4 md:p-8 '>
          <h1 className='text-2xl md:text-3xl font-bold text-center text-white mt-6'>
            Seguros y permisos
            camioneros que
            necesitas en EE.UU
          </h1>
          <span className='text-base md:text-lg text-white'>
            TPA SERVICES LLC nace de la necesidad de muchos comerciantes de cargas en los Estados Unidos, quienes deben buscar en muchos lugares para obtener un buen servicio, 
            aquí encontrarás en un solo lugar y en pocos clics todo lo que buscas. <br /> TPA SERVICES LLC nace de la necesidad de muchos comerciantes de cargas en los Estados Unidos, quienes deben buscar  
          </span>
        </div>
        <div className='w-full md:w-1/2 h-auto px-4 p-12'>
          <Image
            src={truck_driver}
            alt='Conductor mula documentos'
            width={truck_driver.width}
            height={truck_driver.height}
            className='w-full h-full object-cover rounded-md'
          ></Image>
        </div>
      </div>
      <br />
      <div className='w-full h-auto flex flex-col justify-center items-center gap-3 justify-items-center px-4 md:px-16'>
        <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold   text-center text-blue-500 mt-6'>
          Servicios
        </h3>
        <br />
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  px-4 md:px-16 lg:px-32'>
          {
            ListServicios ? 
              ListServicios.map((data, index) => (
                <ServiceCard 
                  key={index}
                  Nombre={data.Nombre}
                  Descripcion={data.Descripcion}
                  ImageData={data.Image} 
                />
              )) : null
          }
        </div>
      </div>
      <br />
      <WhatsAppBtn
        phone='3028319211'
      />  
      <Footer/>
    </main>
  )
}
