import React from 'react';

const projects = [
  {
    title: 'Reforma Integral Vivienda',
    category: 'Salón y Cocina',
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80',
  },
  {
    title: 'Baño Moderno',
    category: 'Baño Completo',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    title: 'Cocina Contemporánea',
    category: 'Cocina Integral',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
  },
  {
    title: 'Dormitorio Principal',
    category: 'Dormitorio',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  },
  {
    title: 'Terraza Acristalada',
    category: 'Exteriores',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
  },
  {
    title: 'Baño Completo',
    category: 'Baño',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
  },
];

const Gallery = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos en Valencia y alrededores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold text-primary-300 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;