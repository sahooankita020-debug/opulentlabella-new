import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-xl text-white mb-4">Opulentlabella</h3>
            <p className="text-sm leading-relaxed">
              Luxury beauty services at accessible prices. Your destination for waxing, nails, makeup, and hair.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Hair Services</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Nails</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Makeup</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Waxing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Booking Policy</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-400" />
                <a href="tel:+1234567890" className="hover:text-rose-400 transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-rose-400" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">WhatsApp</a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-rose-400" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">@opulentlabella</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-gray-800">
          <div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white mb-2">Hours</p>
                <p className="text-sm">Monday - Friday: 10:00 AM - 7:00 PM</p>
                <p className="text-sm">Saturday: 10:00 AM - 6:00 PM</p>
                <p className="text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white mb-2">Location</p>
                <p className="text-sm">123 Beauty Street</p>
                <p className="text-sm">Your City, State 12345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p className="mb-2 text-gray-400">
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
