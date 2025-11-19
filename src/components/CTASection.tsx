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
        
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-roseGold/30">

          {/* Luxury Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-champagne via-blush to-roseGold/50" />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">

            {/* Heading */}
            <h2 className="font-serif text-heading-lg md:text-4xl text-black mb-6">
              Ready for Your Luxury Experience?
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Reserve your appointment today with a small deposit. Limited slots available for our most popular services.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B5695A] text-white font-semibold rounded-xl hover:bg-roseGold transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </button>

              {/* Call Button */}
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#B5695A] text-[#B5695A] font-semibold rounded-xl hover:bg-champagne transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

            </div>

            {/* Footer text */}
            <p className="mt-8 text-sm text-gray-700 font-medium">
              48-hour cancellation policy • Flexible scheduling • Secure deposit system
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
