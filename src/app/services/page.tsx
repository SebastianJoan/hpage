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
    Nombre:"USDOT",
    Link:""
  },{
    Nombre:"BOC-3",
    Link:""
  },{
    Nombre:"MC",
    Link:""
  },{
    Nombre:"TXDMV",
    Link:""
  },,{
    Nombre:"IFTAX",
    Link:""
  },{
    Nombre:"ITIN",
    Link:""
  },{
    Nombre:"LLC",
    Link:""
  },{
    Nombre:"CORP",
    Link:""
  },{
    Nombre:"LP",
    Link:""
  },{
    Nombre:"INC",
    Link:""
  },{
    Nombre:"DBA",
    Link:""
  },{
    Nombre:"EIN",
    Link:""
  }]

  const ListCards = [{
    Nombre:'Pólizas de Salud',
    Descripcion:'Las "Pólizas de Salud" son un elemento fundamental para garantizar la tranquilidad y el bienestar de ti y tu familia. Imagina tener la seguridad de recibir la atención médica que necesitas, cuando la necesitas, sin preocuparte por los altos costos que pueden surgir en caso de enfermedad o accidente. Con nuestras pólizas de salud, te ofrecemos una cobertura integral que abarca desde consultas médicas hasta tratamientos especializados, hospitalización y cirugías. Además, contamos con una amplia red de hospitales y profesionales de la salud para brindarte la atención que mereces, donde sea que te encuentres. Nuestro objetivo es cuidar de tu salud y la de tu familia, brindándote tranquilidad y seguridad en todo momento. No esperes a que surja una emergencia, protege tu bienestar hoy mismo con nuestras pólizas de salud diseñadas especialmente para ti. ¡Tu salud es nuestra prioridad!',
  },{
    Nombre:'Pólizas Comerciales',
    Descripcion:'Las "Pólizas Comerciales" son la piedra angular para proteger el corazón de tu negocio y asegurar su continuidad en cualquier circunstancia. ¿Imagina tener la seguridad de que tu empresa está protegida ante cualquier eventualidad que pueda surgir en el camino? Con nuestras pólizas comerciales, te ofrecemos una cobertura completa que abarca desde daños materiales hasta responsabilidad civil, pasando por protección contra incendios, robos, y otros imprevistos que puedan afectar tu negocio. Además, nuestro equipo de expertos está siempre dispuesto a brindarte el asesoramiento necesario para encontrar la mejor solución adaptada a las necesidades específicas de tu empresa. Nuestro compromiso es garantizar la tranquilidad y el éxito de tu negocio, permitiéndote concentrarte en lo que realmente importa: hacer crecer tu empresa. No dejes la seguridad de tu negocio al azar, protege tu inversión con nuestras pólizas comerciales y asegura un futuro sólido y próspero para tu empresa. ¡Confía en nosotros para proteger lo que más valoras!',
  },{
    Nombre:'Pólizas Comerciale de vida',
    Descripcion:'Las "Pólizas Comerciales de Vida" son mucho más que simples contratos; son el respaldo indispensable para proteger el corazón de tu negocio y el bienestar de quienes lo hacen posible: tus empleados.Imagina poder brindarles a tus colaboradores la seguridad y la tranquilidad de saber que, en caso de alguna eventualidad, sus seres queridos estarán protegidos y respaldados. Con nuestras pólizas comerciales de vida, les ofrecemos una cobertura integral que va más allá de lo ordinario, proporcionando beneficios que van desde la cobertura por fallecimiento hasta el apoyo en situaciones de invalidez y enfermedades graves. En un mundo donde la estabilidad laboral y el bienestar son cada vez más valorados, diferénciate como empleador ofreciendo a tu equipo la seguridad y el respaldo que se merecen. Con nuestras pólizas comerciales de vida, no solo inviertes en la protección de tus empleados, sino que también fortaleces el vínculo con ellos y construyes un ambiente laboral basado en la confianza y el compromiso mutuo. No esperes a que surja una emergencia para tomar medidas; protege el futuro de tu negocio y de tus empleados hoy mismo con nuestras pólizas comerciales de vida. Juntos, construyamos un mañana más seguro y próspero para todos.',
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
              Nosotros nos encargamos de que tu póliza <span className='text-blue-500'>cueste lo justo</span> 
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
        <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold   text-center text-blue-500 mt-6'>
          Asesoramiento y gestion
        </h3>
        <br />
        <span className='text-base text-justify md:text-lg text-black'>
          Todo con nuestro asesoramiento. Nacemos para estar al servicio de cada persona que solo quiere trabajar y progresar. Pero somos esa empresa dispuesta a ir adelante, mostrando los pros y contras de cada decisión. Ayudamos a que usted se preocupe por su familia y sueños, mientras nosotros nos ocupamos de su empresa y bienestar
        </span>
      </div>
      <br />
      <div className='w-full h-auto flex flex-col bg-blue-500 gap-3 py-12 px-4 md:px-16 lg:px-32'>
        {
          ListCards ? 
            ListCards.map((data, index) => (
              <div key={index} className='w-full h-auto p-6 bg-white rounded-md shadow-sm shadow-black flex flex-col gap-2 justify-center items-center'>
                <h3 className='font-bold text-xl text-blue-500 '>{data.Nombre}</h3>
                <span className='text-justify'>{data.Descripcion}</span>
              </div>
            )
          ) : null
         }        
      </div>
      <br /> 
      <WhatsAppBtn/>
      <Footer/>
    </main>
  )
}
