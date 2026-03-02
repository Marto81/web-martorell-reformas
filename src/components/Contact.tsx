import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí integrarías con tu backend o servicio de email
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solicita tu Presupuesto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contáctanos y recibe un presupuesto personalizado sin compromiso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Teléfono</p>
                  <a href="tel:+34123456789" className="text-gray-600 hover:text-primary-600">
                    +34 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@martorellreformas.com" className="text-gray-600 hover:text-primary-600">
                    info@martorellreformas.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Ubicación</p>
                  <p className="text-gray-600">
                    Valencia y toda la provincia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
              <p className="text-gray-800">
                <strong>Horario:</strong> Lunes a Viernes de 8:00 a 18:00h
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Cuéntanos tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Describe el tipo de reforma que necesitas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;