import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-16 px-6 sm:px-8 lg:px-12 border-t border-[#B5695A]/20">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Opulentlabella</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Luxury beauty services at accessible prices. Your destination for nails, waxing, makeup and hair.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Nails</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Makeup</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Hair</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Waxing</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Lashes</a></li>

            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Booking Policy</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Cancellation Policy</a></li>
              <li><a className="hover:text-[#B5695A] transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B5695A]" />
                <a className="hover:text-[#B5695A] transition-colors" href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#B5695A]" />
                <a className="hover:text-[#B5695A] transition-colors" href="https://wa.me/1234567890" target="_blank">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#B5695A]" />
                <a className="hover:text-[#B5695A] transition-colors" href="https://instagram.com" target="_blank">
                  @opulentlabella
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* HOURS + LOCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-t border-[#B5695A]/10">

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white mb-2">Hours</p>
              <p className="text-sm">Monday - Friday: 09:00 AM - 17:30 PM</p>
              <p className="text-sm">Saturday: 09:00 AM - 13:30 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>


          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#B5695A]" />
            <div>
              <p className="font-semibold text-white mb-2">Location</p>
              <p className="text-sm text-gray-400">123 Beauty Street</p>
              <p className="text-sm text-gray-400">Your City, State 12345</p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-[#B5695A]/10 text-center text-sm">
          <p className="mb-2 text-gray-500">
            48-hour cancellation policy • Flexible rescheduling • Secure deposit system
          </p>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Opulentlabella. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
