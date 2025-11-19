import { Heart, Shield, Crown } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Luxury at Accessible Prices',
    description:
      'Experience premium beauty services without breaking the bank. We believe luxury should be within reach for everyone.',
  },
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description:
      'Built on a foundation of consistency, professionalism, and integrity. Your satisfaction is our priority.',
  },
  {
    icon: Heart,
    title: 'Client-First Comfort',
    description:
      'A welcoming, comfortable environment where you can truly relax and enjoy your beauty experience.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-champagne/40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-heading-lg mb-4 text-black">Why Choose Opulentlabella</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're not just a beauty studio—we're your partner in self-care and confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="relative">

                {/* Soft blush glow */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blush rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />

                <div className="relative z-10 text-center p-6 rounded-2xl bg-white shadow-sm border border-[#E7B2A6]/30 hover:shadow-md transition">
                  {/* Icon Circle */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-roseGold/20 mb-6 shadow-sm">
                    <Icon className="w-8 h-8 text-[#B5695A]" />
                  </div>

                  <h3 className="font-serif text-heading-md mb-3 text-black">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>

                {/* Arrow between cards (only for desktop) */}
                {idx < features.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-6 w-12 h-12 text-roseGold/40">
                    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M 24 8 L 32 16 M 24 8 L 16 16" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Promise Section */}
        <div className="mt-16 pt-12 border-t border-[#E7B2A6]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left Text */}
            <div>
              <h3 className="font-serif text-heading-md mb-4 text-black">Our Promise to You</h3>
              <ul className="space-y-3">
                {[
                  'Professional expertise in every service',
                  'Premium products and materials',
                  'Personalized attention and care',
                  'Consistent quality standards',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-roseGold/30 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#B5695A]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Visual Box */}
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-champagne to-roseGold/40 flex items-center justify-center shadow-lg border border-[#E7B2A6]/30">
              <div className="text-center">
                <Crown className="w-20 h-20 text-[#B5695A] mx-auto mb-4" />
                <p className="text-black font-semibold">Luxury Beauty Experience</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
