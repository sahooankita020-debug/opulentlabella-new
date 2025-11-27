import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";   // 👈 ADD THIS LINE
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  // Track if gallery modal is open
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Disable page scrolling when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isGalleryOpen]);

  return (
    <div className="min-h-screen bg-white">

      {/* 🔥 Navbar added here */}
      <Navbar />

      {/* Move Hero down slightly because navbar is fixed */}
      <div className="pt-20">
        <Hero />

        {/* Pass state setter to Services */}
        <Services setGalleryOpen={setIsGalleryOpen} />

        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
