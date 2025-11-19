import { Sparkles } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const phone = '1234567890';
    const message = 'Hi! I would like to book an appointment at Opulentlabella.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🌸 Luxury Champagne Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-champagne via-white to-white"
        aria-hidden="true"
      />

      {/* 🌸 Soft Luxury Glow Circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blush rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-roseGold rounded-full opacity-20 blur-3xl" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-blush mb-8">
          <Sparkles className="w-4 h-4 text-[#B5695A]" />
          <span className="text-sm font-medium text-[#B5695A]">Premium Beauty Experience</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-display-lg lg:text-5xl font-bold text-black mb-6">
          Affordable Beauty Services with a{' '}
          <span className="text-[#C4636F] font-extrabold">
            Luxury Experience
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience luxury beauty services including Gel Nails, Russian Manicure, Makeup, Waxing,
          Lashes, Brows, and complete Hair services such as Wig Selling, Installation, Styling,
          and Wig Treatment — all under one elegant roof.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#B5695A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#E7B2A6] transition"
          >
            Book Your Appointment
          </button>

          <button className="border-2 border-[#B5695A] text-[#B5695A] font-semibold px-6 py-3 rounded-lg hover:bg-champagne transition">
            Learn More
          </button>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-black/10">
          <div>
            <div className="text-2xl font-bold text-[#B5695A] mb-1">100+</div>
            <p className="text-sm text-gray-700">Happy Clients</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#B5695A] mb-1">4 in 1</div>
            <p className="text-sm text-gray-700">Beauty Services</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#B5695A] mb-1">5★</div>
            <p className="text-sm text-gray-700">Trusted Quality</p>
          </div>
        </div>

      </div>
    </section>
  );
}
