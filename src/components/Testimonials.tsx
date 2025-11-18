import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Opulentlabella exceeded my expectations! The service was professional and the atmosphere so relaxing. I felt truly pampered.',
    rating: 5,
    service: 'Full Beauty Package',
  },
  {
    name: 'Jessica L.',
    text: 'Best nail experience I\'ve had. The technician was so skilled and the products are high quality. Worth every penny!',
    rating: 5,
    service: 'Manicure & Pedicure',
  },
  {
    name: 'Amanda K.',
    text: 'I appreciate the luxury feel at such an affordable price. The entire team is friendly and attentive to details.',
    rating: 5,
    service: 'Hair & Makeup',
  },
];

export default function Testimonials() {
  return (
    <section className="py-section px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-heading-lg mb-4 text-gray-900">Loved by Our Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real clients who trust Opulentlabella with their beauty needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-8 bg-white border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-100 rounded-full opacity-40 blur-xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-rose-200 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.text}</p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-200 to-gold-200 flex items-center justify-center font-semibold text-rose-700">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-full bg-rose-50 px-6 py-3 border border-rose-100">
            <p className="text-gray-700">
              <span className="font-semibold text-rose-600">Word-of-Mouth Trusted</span>
              <span className="text-gray-600 ml-2">Join our community of satisfied clients</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
