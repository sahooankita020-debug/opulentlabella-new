import { MessageCircle, CreditCard, Sparkles, Gift, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Book Your Appointment',
    description:
      'Contact us via WhatsApp or phone to choose your preferred service and time slot.',
  },
  {
    icon: CreditCard,
    title: 'Confirm with a Deposit',
    description: 'Secure your appointment with a small deposit to ensure your booking.',
  },
  {
    icon: Sparkles,
    title: 'Enjoy Your Service',
    description:
      'Relax and indulge in a luxurious beauty experience with our professionals.',
  },
  {
    icon: Gift,
    title: 'Rebook with Incentives',
    description:
      'Enjoy exclusive loyalty rewards and special offers for returning clients.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-section px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-heading-lg mb-4 text-black">How It Works</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Four simple steps to your next beauty appointment.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-start">

                {/* STEP NUMBER CIRCLE */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B5695A] text-white mb-6 shadow-lg text-xl font-bold">
                  {idx + 1}
                </div>

                {/* ICON SMALL CIRCLE */}
                <div className="absolute top-8 left-20 w-10 h-10 rounded-full bg-roseGold/25 border border-roseGold/40 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#B5695A]" />
                </div>

                {/* TEXT CONTENT */}
                <div className="mt-10">
                  <h3 className="font-serif text-heading-md mb-3 text-black">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>

                {/* STEP ARROW (Between Steps) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-8 z-20">
                    <ArrowRight className="w-6 h-6 text-roseGold" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Horizontal Line */}
        <div className="hidden lg:block absolute top-12 left-24 right-24 h-1 bg-gradient-to-r from-transparent via-roseGold/30 to-transparent" />
      </div>

      {/* POLICY SECTION */}
      <div className="mt-20 rounded-2xl p-10 bg-gradient-to-r from-champagne to-blush/60 border border-roseGold/30 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* 48 HOURS */}
          <div>
            <div className="text-3xl font-extrabold text-[#B5695A] mb-2">48 hrs</div>
            <p className="text-gray-700">
              Cancellation policy allows changes within 48 hours of your appointment.
            </p>
          </div>

          {/* FLEXIBLE */}
          <div className="border-l border-r border-roseGold/30 px-8">
            <div className="text-3xl font-extrabold text-[#B5695A] mb-2">Flexible</div>
            <p className="text-gray-700">Easy rescheduling and flexible booking times to fit your schedule.</p>
          </div>

          {/* SECURE */}
          <div>
            <div className="text-3xl font-extrabold text-[#B5695A] mb-2">Secure</div>
            <p className="text-gray-700">
              Your booking is secure with our simple deposit confirmation system.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
