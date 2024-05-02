import { Footer, FormPolitics, Modal, Navbar, WhatsAppBtn } from '@/components'
import Image from 'next/image'
import React from 'react'

import truck_image from '../../../public/Backgrounds/pexels-quintingellar-2199293.jpg'

import Integridad from '../../../public/ValoresCorporativos/collaboration.png'
import Innovacion from '../../../public/ValoresCorporativos/bulb.png'
import ResponsabilidadSocial from '../../../public/ValoresCorporativos/social-care.png'
import Colaboracion from '../../../public/ValoresCorporativos/teamwork.png'
import Calidad from '../../../public/ValoresCorporativos/high-quality.png'


export const metadata = {
  title: 'Quienes Somos?',
  description: 'Mision, Vision, Valores corporativos',
};

export default function page() {

  const ListCards = [{
    Tittle:"Mision",
    Descripcion:"Brindar a cada cliente soluciones coherentes, integrales y responsables que aporten valor y contribuyan con su éxito, logrando un alto nivel de resultados, crecimiento, satisfacción y beneficios. Tenemos claro que no podemos nnca parar de crecer por que cada vez que cumplimos una meta llega un reto nuevo."
  },{
    Tittle:"Vision",
    Descripcion:" Nos visionados como la primera opción para nuestros clientes. Por precio y servicio. Trabajamos en pro de construir un crecimiento mutuo y recíproco,  en nuestro personal capacitado, clientes satisfechos y empresa número uno en el mercado que desarrollamos y los que innovemos. Hacer de nuestros clientes una sola familia que trabaja en equipo en busca del éxito y crecimiento."
  }]

  const ListCorporativeValues = [{
    Tittle:"Integridad",
    Descripcion:"Nos comprometemos a actuar con honestidad, ética y transparencia en todas nuestras interacciones y decisiones empresariales, manteniendo la coherencia entre lo que decimos y lo que hacemos.",
    Image:Integridad,
  },{
    Tittle:"Innovación",
    Descripcion:"Empleamos todas las herramientas tecnológicas disponibles para llevar a cabo nuestras tareas, al mismo tiempo que capacitamos a nuestro personal con diversas alternativas y estrategias. Afrontamos los desafíos sistemáticos con el objetivo de satisfacer diariamente a nuestros clientes y asegurar su felicidad y satisfacción con nuestros logros.",
    Image:Innovacion,
  },{
    Tittle:"Responsabilidad Social",
    Descripcion:"Nos comprometemos con el desarrollo de todas las comunidades, evitando la contaminación ambiental y contribuyendo al crecimiento personal de cada individuo, incluyendo colaboradores y clientes. Cada paso que damos lo hacemos de manera responsable, generando un impacto positivo en la economía, la salud y el bienestar de cada sector",
    Image:ResponsabilidadSocial,
  },{
    Tittle:"Colaboración",
    Descripcion:"Valoramos el trabajo en equipo como fundamental. Nos enfocamos en los resultados colectivos, en el logro de metas tanto corporativas como individuales. Contribuimos con lo mejor de cada uno para alcanzar el desarrollo y cumplimiento esperado.",
    Image:Colaboracion,
  },{
    Tittle:"Calidad",
    Descripcion:"Entendemos que la calidad es el fruto de un trabajo arduo y perspicaz. Por eso, nos esforzamos constantemente en generar mejoras continuas para asegurar la felicidad y tranquilidad de nuestros clientes, mostrándoles quiénes somos y hacia dónde nos dirigimos. La clave para mejorar es evitar la improvisación. Contamos con un equipo altamente capacitado y competente para mantener siempre los más altos estándares de calidad en nuestros procesos y servicios",
    Image:Calidad,
  }]

  return (
    <main className='w-full h-screen overflow-hidden overflow-y-auto bg-[#eeeeee]'>
        <Navbar/>
        <div className="relative w-full h-full z-10">
          <div className="absolute inset-0 bg-black opacity-60  z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center z-10">
            <div className='px-4 md:px-16 lg:px-32 xl:px-64'>
              <h1 className="text-xl md:text-5xl font-bold mb-4 text-white">
                Brindamos a cada cliente soluciones coherentes, integrales y responsables que aporten valor y contribuyan con su éxito
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
        <div className='w-full h-auto flex flex-col gap-3 px-4 md:px-16 lg:px-32 p-6'>
          {
            ListCards ? 
              ListCards.map((data, index) => (
                <div className='w-auto h-auto flex flex-col justify-center items-center justify-items-center' key={index}>
                  <h3 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-center text-blue-500 mt-6'>{data.Tittle}</h3>  
                  <span className='mt-3 text-lg text-justify'>{data.Descripcion}</span>
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
                  <span className='text-justify'>{data.Descripcion}</span>
                </div>
            )) : null
          }
        </div> 
        <WhatsAppBtn/>
        <Footer/>
        <Modal>
          <FormPolitics/>
        </Modal>
    </main>
  )
}
