import { MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
  const handleWhatsAppClick = () => {
    const phone = '1234567890';
    const message = 'Hi! I would like to book an appointment at Opulentlabella.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-section px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-rose-600 to-rose-700 opacity-90" />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
            <h2 className="font-serif text-heading-lg md:text-4xl text-white mb-6">
              Ready for Your Luxury Experience?
            </h2>

            <p className="text-lg text-rose-100 mb-8 max-w-2xl mx-auto">
              Reserve your appointment today with a small deposit. Limited slots available for our most popular services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </button>

              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-rose-500 hover:bg-rose-400 text-white font-semibold rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <p className="mt-8 text-sm text-rose-100">
              48-hour cancellation policy • Flexible scheduling • Secure deposit system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
