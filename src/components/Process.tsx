import React from 'react';
import { Phone, Calendar, FileText, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Primer Contacto',
    description: 'Llámanos o escríbenos para contarnos tu proyecto',
  },
  {
    icon: Calendar,
    title: 'Visita Gratuita',
    description: 'Visitamos tu vivienda para evaluar el trabajo',
  },
  {
    icon: FileText,
    title: 'Presupuesto Detallado',
    description: 'Recibe un presupuesto claro y sin sorpresas',
  },
  {
    icon: Hammer,
    title: 'Ejecución',
    description: 'Realizamos la reforma con profesionalidad',
  },
  {
    icon: CheckCircle,
    title: 'Entrega Final',
    description: 'Revisión final y garantía de satisfacción',
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso claro y transparente en 5 pasos
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary-600 text-white rounded-full mb-6 shadow-lg">
                    <Icon size={32} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-sm shadow">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;