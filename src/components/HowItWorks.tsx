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
    <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-brand-dark">
          How It Works
        </h2>
        <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
          Four simple steps to your next beauty appointment.
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative text-center">

                {/* Step Number Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                bg-brand-primary text-white text-xl font-bold shadow-lg mb-6">
                  {idx + 1}
                </div>

                {/* Icon Small Badge */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 translate-y-2 
                w-10 h-10 rounded-full bg-brand-light border border-brand-primary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>

                {/* Title + Description */}
                <h3 className="font-serif text-heading-md mb-3 text-brand-dark">{step.title}</h3>
                <p className="text-brand-dark/75 leading-relaxed">{step.description}</p>

                {/* Arrow Between Steps (Desktop Only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-8">
                    <ArrowRight className="w-6 h-6 text-brand-primary/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Line behind steps */}
        <div className="hidden lg:block absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-transparent via-brand-light to-transparent" />
      </div>

      {/* Highlights */}
      <div className="mt-16 bg-brand-light/40 rounded-2xl p-10 md:p-12 border border-brand-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">48 hrs</div>
            <p className="text-brand-dark/75">Cancellation policy allows changes within 48 hours.</p>
          </div>

          <div className="border-l border-r border-brand-primary/25 px-8">
            <div className="text-3xl font-bold text-brand-primary mb-2">Flexible</div>
            <p className="text-brand-dark/75">Easy rescheduling and flexible booking times.</p>
          </div>

          <div>
            <div className="text-3xl font-bold text-brand-primary mb-2">Secure</div>
            <p className="text-brand-dark/75">Your booking is secured with a deposit system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
