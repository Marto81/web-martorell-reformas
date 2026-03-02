import React from 'react';
import { Home, Hammer, Paintbrush, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Reformas Integrales',
    description: 'Renovación completa de tu vivienda con gestión integral del proyecto.',
  },
  {
    icon: Hammer,
    title: 'Cocinas',
    description: 'Diseño y reforma de cocinas modernas y funcionales adaptadas a tus necesidades.',
  },
  {
    icon: Paintbrush,
    title: 'Baños',
    description: 'Reforma completa de baños con materiales de primera calidad.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Servicios de reparación y mantenimiento para tu hogar o negocio.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas de reforma y construcción para tu hogar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;