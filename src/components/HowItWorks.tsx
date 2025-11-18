import { MessageCircle, CreditCard, Sparkles, Gift, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Book Your Appointment',
    description: 'Contact us via WhatsApp or phone to choose your preferred service and time slot.',
  },
  {
    icon: CreditCard,
    title: 'Confirm with a Deposit',
    description: 'Secure your appointment with a small deposit to ensure your booking.',
  },
  {
    icon: Sparkles,
    title: 'Enjoy Your Service',
    description: 'Relax and indulge in a luxurious beauty experience with our professionals.',
  },
  {
    icon: Gift,
    title: 'Rebook with Incentives',
    description: 'Enjoy exclusive loyalty rewards and special offers for returning clients.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-section px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-gray-900">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Four simple steps to your next beauty appointment.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                <div className="flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-rose-700 text-white mb-6 font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  <div className="absolute top-8 left-24 w-8 h-8 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-rose-600" />
                  </div>

                  <div className="mt-8">
                    <h3 className="font-serif text-heading-md mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-8 z-20">
                    <ArrowRight className="w-6 h-6 text-gold-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block absolute top-12 left-24 right-24 h-1 bg-gradient-to-r from-transparent via-gold-200 to-transparent" />
      </div>

      <div className="mt-16 bg-gradient-to-r from-rose-50 to-gold-50 rounded-2xl p-8 md:p-12 border border-rose-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-rose-600 mb-2">48 hrs</div>
            <p className="text-gray-600">Cancellation policy allows changes within 48 hours of your appointment.</p>
          </div>
          <div className="border-l border-r border-rose-200 px-8">
            <div className="text-3xl font-bold text-rose-600 mb-2">Flexible</div>
            <p className="text-gray-600">Easy rescheduling and flexible booking times to fit your schedule.</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-rose-600 mb-2">Secure</div>
            <p className="text-gray-600">Your booking is secure with our simple deposit confirmation system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
