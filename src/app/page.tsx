import { Footer, FormPolitics, Modal, Navbar, ServiceCard, WhatsAppBtn } from '@/components'
import Image from 'next/image'
import React from 'react'

import truck_image from '../../public/Backgrounds/truck-with-white-trailer-drives-down-road-with-mountains-background.jpg';
import truck_driver from './../../public/Backgrounds/pexels-quintingellar-2199293.jpg'

import Image_1 from './../../public/Backgrounds/pexels-500photos-com-15338-93398.jpg'
import Image_2 from './../../public/Backgrounds/pexels-kevinbidwell-2348359.jpg'
import Image_3 from './../../public/Backgrounds/pexels-thatguycraig000-2449454.jpg'
import Link from 'next/link';

export default function page() {

  const ListServicios = [{
    Nombre:'Pólizas de Salud',
    Descripcion:'Las pólizas de salud garantizan tranquilidad y bienestar al ofrecer cobertura médica completa, desde consultas hasta cirugías. Con una amplia red de hospitales y profesionales, aseguramos atención donde sea que estés. Tu salud y la de tu familia son nuestra prioridad. ¡Protégelos hoy mismo con nuestras pólizas diseñadas para ti!',
    Image:Image_1
  },{
    Nombre:'Pólizas Comerciales',
    Descripcion:'Nuestras "Pólizas Comerciales" son fundamentales para proteger tu negocio y asegurar su continuidad en cualquier situación. Con nuestra cobertura completa, desde daños materiales hasta responsabilidad civil, te ofrecemos seguridad ante cualquier imprevisto. Además, nuestro equipo de expertos está disponible para brindarte el asesoramiento necesario. Protege tu inversión y concentra tu atención en hacer crecer tu empresa. ¡Confía en nosotros para garantizar el éxito y la tranquilidad de tu negocio!',
    Image:Image_2
  },{
    Nombre:'Pólizas de vida',
    Descripcion:'Las "Pólizas Comerciales de Vida" son esenciales para proteger el corazón de tu negocio y el bienestar de tus empleados. Con nuestra cobertura integral, ofrecemos seguridad en caso de eventualidades, como fallecimiento, invalidez y enfermedades graves. Al invertir en estas pólizas, no solo proteges a tus empleados, sino que también fortaleces el vínculo con ellos y creas un ambiente laboral basado en la confianza y el compromiso mutuo. No esperes a que surja una emergencia; protege el futuro de tu negocio y tus empleados hoy mismo. Juntos, construyamos un mañana más seguro y próspero para todos.',
    Image:Image_3
  }]

  return (
    <main className='w-full h-screen overflow-hidden overflow-y-auto bg-[#eeeeee]'>
      <Navbar/>
      <div className="relative w-full h-full z-10">
        <div className="absolute inset-0 bg-black opacity-60  z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <div className='px-4 md:px-16 lg:px-32 xl:px-64'>
            <h1 className="text-xl md:text-5xl font-bold mb-4 text-white">
              Representamos <span className='text-blue-500'>compañías de transporte</span> que buscan <span className='text-blue-500'>minimizar sus gastos</span> y <span className='text-blue-500'>maximizar sus utilidades</span> comerciales
            </h1> 
          </div>
        </div>
        <Image
          src={truck_image}
          alt='imagen camion'
          width={truck_image.width}
          height={truck_image.height}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full h-auto flex flex-col justify-start items-center mt-4  justify-items-center px-4 md:px-16 lg:px-32'>
        <h1 className = 'text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-center text-blue-500 mt-6'>
          ¿Quiénes somos?
        </h1>
        <br />
        <span className='text-base md:text-lg lg:text-2xl xl:text-3xl text-justify text-black '>
          Somos representantes de compañías de transporte que buscan minimizar sus gastos y maximizar sus utilidades comerciales.
          Especializados en la industria camionera, contamos con el respaldo de compañías líderes en el mercado y una amplia cartera de clientes. 
          Entendemos las necesidades de nuestros clientes y mejoramos cada día para brindar una atención personalizada, cordial y objetiva
        </span>
        <br /> 
      </div>
      <br />
      <div className='w-full h-auto flex flex-col bg-blue-500 md:flex-row justify-between items-center  justify-items-center  px-4 md:px-16 lg:px-32'>
        <div className='w-full md:w-1/2 h-auto flex flex-col justify-start items-start gap-3 p-4 md:p-8 '>
          <h1 className='text-2xl md:text-3xl font-bold text-center text-white mt-6'>
            Permisos Para Camioneros que necesitas en EE.UU 
          </h1>
          <span className='text-base md:text-lg text-justify text-white'>
            Java Lifewealth Group LLC nace de la necesidad de muchos transportistas de carga en los Estados Unidos, quienes no se sienten representados por empresas que solo buscan sacar dinero y provecho de las diferentes necesidades y desconocimiento de procesos e información, así como la falta de asesoría en diversas funciones del negocio, ya sea pólizas, permisos y otros.
          </span>
        </div>
        <div className='w-full md:w-1/2 h-auto px-4 md:p-12 pb-12'>
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
        <div className='w-full h-auto flex flex-col gap-3 px-4 md:px-12 lg:px-20'>
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
      <WhatsAppBtn/>  
      <Footer/>
      <Modal>
        <FormPolitics/>
      </Modal>
    </main>
  )
}
