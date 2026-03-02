import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Martorell Reformas
            </h3>
            <p className="text-gray-400">
              Más de 20 años transformando hogares en Valencia. 
              Calidad, confianza y profesionalidad en cada proyecto.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-primary-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-primary-400 transition-colors">
                  Cómo Trabajamos
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-primary-400 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Martorell Obras y Reformas SL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;