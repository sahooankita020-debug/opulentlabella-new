import { Heart, Shield, Crown } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Luxury at Accessible Prices',
    description: 'Experience premium beauty services without breaking the bank. We believe luxury should be within reach for everyone.',
  },
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'Built on a foundation of consistency, professionalism, and integrity. Your satisfaction is our priority.',
  },
  {
    icon: Heart,
    title: 'Client-First Comfort',
    description: 'A welcoming, comfortable environment where you can truly relax and enjoy your beauty experience.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-heading-lg mb-4 text-gray-900">Why Choose Opulentlabella</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just a beauty studio—we're your partner in self-care and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full opacity-0 hover:opacity-40 transition-opacity duration-300 blur-xl" />

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-gold-100 mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-rose-600" />
                  </div>

                  <h3 className="font-serif text-heading-md mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                {idx < features.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-6 w-12 h-12 text-gold-300">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M 24 8 L 32 16 M 24 8 L 16 16" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-heading-md mb-4 text-gray-900">Our Promise to You</h3>
              <ul className="space-y-3">
                {['Professional expertise in every service', 'Premium products and materials', 'Personalized attention and care', 'Consistent quality standards'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-gold-100 flex items-center justify-center">
              <div className="text-center">
                <Crown className="w-20 h-20 text-rose-300 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Luxury Beauty Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
