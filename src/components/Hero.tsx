import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container-custom py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformamos tu hogar en Valencia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-50">
            Más de 20 años de experiencia en reformas integrales. 
            <span className="block mt-2">Calidad, confianza y transparencia garantizadas.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="tel:+34123456789" 
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors shadow-xl"
            >
              <Phone size={24} />
              Llama Ahora
            </a>
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center gap-2 bg-primary-800/50 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors"
            >
              Presupuesto Gratis
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-start gap-3">
              <MapPin className="flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold">Valencia y alrededores</p>
                <p className="text-sm text-primary-100">Toda la provincia</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold">Tel: 123 456 789</p>
                <p className="text-sm text-primary-100">Lun-Vie 8:00-18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold">info@martorellreformas.com</p>
                <p className="text-sm text-primary-100">Respuesta en 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;