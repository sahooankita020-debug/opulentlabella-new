export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">

        {/* Left Menu */}
        <div className="hidden md:flex items-center gap-8 text-brand-dark font-medium">
          <a href="#services" className="hover:text-brand-primary transition">Services</a>
          <a href="#why" className="hover:text-brand-primary transition">Why Us</a>
          <a href="#work" className="hover:text-brand-primary transition">How It Works</a>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="/logo.png"
            alt="Opulentlabelle Logo"
            className="h-14 object-contain"
          />
        </div>

        {/* Right Menu */}
        <div className="hidden md:flex items-center gap-8 text-brand-dark font-medium">
          <a href="#testimonials" className="hover:text-brand-primary transition">Reviews</a>
          <a href="#contact" className="hover:text-brand-primary transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-brand-dark text-3xl">☰</button>
        </div>

      </div>
    </nav>
  );
}
