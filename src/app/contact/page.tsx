import React from 'react'

export default function page() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Servicio 1"
            description="Descripción del servicio 1."
            icon="fas fa-truck"
          />
          <ServiceCard
            title="Servicio 2"
            description="Descripción del servicio 2."
            icon="fas fa-box"
          />
          <ServiceCard
            title="Servicio 3"
            description="Descripción del servicio 3."
            icon="fas fa-shipping-fast"
          />
          {/* Agrega más ServiceCard según sea necesario */}
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Reseñas de Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí puedes agregar las reseñas de tus clientes */}
          <TestimonialCard
            name="Cliente 1"
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis justo et est tristique bibendum."
          />
          <TestimonialCard
            name="Cliente 2"
            testimonial="Fusce suscipit tortor eget leo feugiat, vel accumsan risus rutrum. Integer lacinia ultricies velit non luctus."
          />
          {/* Agrega más TestimonialCard según sea necesario */}
        </div>
      </div>
    </section>
  )
}

interface ServiceProps{
    title:string,
    description:string,
    icon:string
}

const ServiceCard = ({ title, description, icon } : ServiceProps ) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <i className={`${icon} text-4xl text-gray-500`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

interface TestimonialProps{
    name:string,
    testimonial:string
}

const TestimonialCard = ( { name, testimonial } : TestimonialProps ) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700">{testimonial}</p>
      <div className="text-right mt-4">
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
};
