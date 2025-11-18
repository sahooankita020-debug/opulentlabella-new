import { Scissors, Sparkles, Brush, Flower } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Hair Services',
    description: 'Professional haircuts, styling, and treatments to keep your locks looking luxurious.',
  },
  {
    icon: Flower,
    title: 'Nails',
    description: 'Manicures and pedicures with premium care for healthy, beautiful nails.',
  },
  {
    icon: Brush,
    title: 'Makeup',
    description: 'Expert makeup application for any occasion, from everyday to special events.',
  },
  {
    icon: Sparkles,
    title: 'Waxing',
    description: 'Gentle, professional waxing services for smooth, long-lasting results.',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl p-8 bg-white border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-rose-100 to-gold-100 mb-6 group-hover:shadow-lg group-hover:shadow-rose-200 transition-all duration-300">
                  <Icon className="w-6 h-6 text-rose-600" />
                </div>

                <h3 className="font-serif text-heading-md mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-6 flex items-center text-rose-600 font-semibold group-hover:gap-2 transition-all duration-300">
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
