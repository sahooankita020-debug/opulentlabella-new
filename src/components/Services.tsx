import { Scissors, Sparkles, Brush, Flower, Eye } from 'lucide-react';

const services = [
  {
    icon: Flower,
    title: 'Nails',
    description:
      'Manicures and pedicures with premium care for healthy, beautiful nails.',
  },
  {
    icon: Brush,
    title: 'Makeup',
    description:
      'Expert makeup application for any occasion, from everyday to special events.',
  },
  {
    icon: Scissors,
    title: 'Hair Services',
    description:
      'Professional Wig Installation, Wig Treatment, Wig Sales, Hair Treatment, and Braids — premium care for beautiful, long-lasting results.',
  },
  {
    icon: Sparkles,
    title: 'Waxing',
    description:
      'Gentle, professional waxing services for smooth, long-lasting results.',
  },
  {
    icon: Eye,
    title: 'Lashes',
    description:
      'Premium lash extensions, lash lifts, tinting, and brow shape-ups for a flawless look.',
  },
];

export default function Services() {
  return (
    <section className="py-section px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-gray-900">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need for a complete beauty experience, all under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl p-8 bg-white border border-gray-100
              hover:border-[#B5695A] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5E9E7] to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                bg-gradient-to-br from-[#F2D6D2] to-[#EFD0C8] mb-6 
                group-hover:shadow-lg group-hover:shadow-[#B5695A]/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#B5695A]" />
                </div>

                <h3 className="font-serif text-heading-md mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center text-[#B5695A] font-semibold 
                group-hover:gap-2 transition-all duration-300">
                  <span>Explore</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
