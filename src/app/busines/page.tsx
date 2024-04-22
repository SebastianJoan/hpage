import { Footer, Navbar, WhatsAppBtn } from '@/components'
import Image from 'next/image'
import React from 'react'

import truck_image from '../../../public/Backgrounds/pexels-quintingellar-2199293.jpg'

import Integridad from '../../../public/ValoresCorporativos/collaboration.png'
import Innovacion from '../../../public/ValoresCorporativos/bulb.png'
import ResponsabilidadSocial from '../../../public/ValoresCorporativos/social-care.png'
import Colaboracion from '../../../public/ValoresCorporativos/teamwork.png'
import Calidad from '../../../public/ValoresCorporativos/high-quality.png'

export default function page() {

  const ListCards = [{
    Tittle:"Mision",
    Descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros arcu, dictum eget nulla vestibulum, vestibulum tincidunt eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas magna arcu, cursus vitae quam in, mattis volutpat massa. Vivamus fermentum augue vitae risus sagittis, eu laoreet leo gravida. Praesent condimentum lectus a magna ullamcorper auctor. Mauris consequat scelerisque elementum. Integer in consectetur mauris. Nullam eu dolor condimentum, blandit urna quis, imperdiet risus. Phasellus elementum condimentum neque, sit amet efficitur ipsum luctus ut. Nunc rhoncus magna vitae lacus molestie, ac dapibus odio dapibus. Donec eleifend metus sit amet turpis accumsan, vel semper odio elementum. Sed elementum imperdiet convallis. Nunc ac mauris quis diam sagittis pharetra. Suspendisse id congue odio, eu vulputate nulla."
  },{
    Tittle:"Vision",
    Descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros arcu, dictum eget nulla vestibulum, vestibulum tincidunt eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas magna arcu, cursus vitae quam in, mattis volutpat massa. Vivamus fermentum augue vitae risus sagittis, eu laoreet leo gravida. Praesent condimentum lectus a magna ullamcorper auctor. Mauris consequat scelerisque elementum. Integer in consectetur mauris. Nullam eu dolor condimentum, blandit urna quis, imperdiet risus. Phasellus elementum condimentum neque, sit amet efficitur ipsum luctus ut. Nunc rhoncus magna vitae lacus molestie, ac dapibus odio dapibus. Donec eleifend metus sit amet turpis accumsan, vel semper odio elementum. Sed elementum imperdiet convallis. Nunc ac mauris quis diam sagittis pharetra. Suspendisse id congue odio, eu vulputate nulla."
  }]

  const ListCorporativeValues = [{
    Tittle:"Integridad",
    Descripcion:"Actuar con honestidad, ética y transparencia en todas las interacciones y decisiones empresariales, manteniendo la coherencia entre palabras y acciones.",
    Image:Integridad,
  },{
    Tittle:"Innovación",
    Descripcion:"Fomentar la creatividad y la búsqueda constante de nuevas ideas y soluciones para mejorar productos, servicios y procesos, adaptándose a un entorno empresarial en constante ",
    Image:Innovacion,
  },{
    Tittle:"Responsabilidad Social",
    Descripcion:"Compromiso con el bienestar y el progreso de la sociedad, considerando el impacto de las acciones empresariales en las comunidades locales y globales, y promoviendo prácticas sostenibles y responsables. ",
    Image:ResponsabilidadSocial,
  },{
    Tittle:"Colaboración",
    Descripcion:"Trabajar en equipo de manera efectiva, valorando la diversidad de ideas, habilidades y perspectivas, y fomentando un ambiente de apoyo mutuo y cooperación para alcanzar objetivos comunes.",
    Image:Colaboracion,
  },{
    Tittle:"Calidad",
    Descripcion:"Buscar la excelencia en todo lo que se hace, manteniendo altos estándares de calidad en productos, servicios y procesos, y comprometiéndose con la mejora continua y la satisfacción del cliente. ",
    Image:Calidad,
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
        <div className='w-full h-auto  px-4 md:px-16 lg:px-32 p-6'>
          {
            ListCards ? 
              ListCards.map((data, index) => (
                <div className='w-auto h-auto flex flex-col justify-center items-center justify-items-center' key={index}>
                  <h3 className='font-bold'>{data.Tittle}</h3>
                  <span>{data.Descripcion}</span>
                </div>
            )) : null
          }
        </div>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-16 lg:px-32 pb-12'>
          {
            ListCorporativeValues ? 
              ListCorporativeValues.map((data, index) => (
                <div className='w-auto h-auto flex flex-col justify-center items-center justify-items-center bg-white shadow-sm shadow-black p-8 rounded-md gap-3' key={index}>
                  <div className='w-[150px] h-[150px] rounded-full p-4 '>
                    <Image
                      src={data.Image}
                      width={data.Image.width}
                      height={data.Image.height}
                      alt=''
                      className='w-full h-full object-cover'                  
                    >
                    </Image>
                  </div>
                  <h3 className='font-bold'>{data.Tittle}</h3>
                  <span>{data.Descripcion}</span>
                </div>
            )) : null
          }
        </div>
        <WhatsAppBtn
            phone='3028319211'
        /> 
        <Footer/>
    </main>
  )
}
