import { Sparkles } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const phone = '1234567890';
    const message = 'Hi! I would like to book an appointment at Opulentlabella.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50"
        aria-hidden="true"
      />

      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-200 rounded-full opacity-20 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-rose-100 mb-8">
          <Sparkles className="w-4 h-4 text-rose-600" />
          <span className="text-sm font-medium text-rose-700">Premium Beauty Experience</span>
        </div>

        <h1 className="font-serif text-display-lg lg:text-5xl font-bold text-gray-900 mb-6">
          Affordable Beauty Services with a{' '}
          <span className="bg-gradient-to-r from-rose-600 to-gold-500 bg-clip-text text-transparent">
            Luxury Experience
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          High-quality waxing, nails, makeup, and hair services in a comfortable, reliable setting.
          All your beauty needs under one roof.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-rose-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Appointment
          </button>
          <button className="px-8 py-4 border-2 border-rose-600 text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/30">
          <div>
            <div className="text-2xl font-bold text-rose-600 mb-1">100+</div>
            <p className="text-sm text-gray-600">Happy Clients</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-rose-600 mb-1">4 in 1</div>
            <p className="text-sm text-gray-600">Beauty Services</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-rose-600 mb-1">5★</div>
            <p className="text-sm text-gray-600">Trusted Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
