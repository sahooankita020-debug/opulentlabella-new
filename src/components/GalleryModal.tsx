import { useEffect, useState, useRef } from "react";

type GalleryModalProps = {
  images: string[];
  open: boolean;
  onClose: () => void;
};

export default function GalleryModal({ images, open, onClose }: GalleryModalProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Reset index + loaded when images/open change
  useEffect(() => {
    if (open) {
      setIndex(0);
      setLoaded(false);
      // Prevent background scroll
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open, images]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images]);

  if (!open || images.length === 0) return null;

  const prevImage = () => {
    setLoaded(false);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLoaded(false);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // click outside image to close
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) onClose();
  };

  return (
    <div
      ref={containerRef}
      onClick={onBackdropClick}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
        aria-label="Close gallery"
      >
        ✕
      </button>

      {/* Prev Button */}
      <button
        onClick={prevImage}
        className="absolute left-6 text-white text-4xl z-50"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Image container */}
      <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
        {/* simple spinner while loading */}
        {!loaded && (
          <div className="absolute z-40 flex items-center justify-center">
            <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          </div>
        )}

        {/* Image */}
        <img
          key={images[index]} // ensure re-render when index changes
          src={images[index]}
          onLoad={() => setLoaded(true)}
          alt={`Gallery ${index + 1}`}
          className={`rounded-xl shadow-xl object-contain transition-opacity duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ maxHeight: "90vh", maxWidth: "90vw" }}
        />
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-6 text-white text-4xl z-50"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 text-white text-lg z-50">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
