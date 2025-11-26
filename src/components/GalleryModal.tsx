interface GalleryModalProps {
  images: string[];
  open: boolean;
  onClose: () => void;
}

export default function GalleryModal({ images, open, onClose }: GalleryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md flex items-center justify-center z-50 px-6">
      <div className="bg-brand-cream p-6 rounded-2xl max-w-4xl w-full shadow-2xl border border-brand-primary/30 animate-fadeIn">

        {/* Heading */}
        <h2 className="text-2xl font-serif font-bold mb-6 text-brand-primary text-center">
          Service Gallery
        </h2>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[65vh] overflow-y-auto pr-2">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="rounded-xl object-cover w-full h-48 shadow-md hover:scale-105 transition"
                alt="Gallery Image"
              />
            ))
          ) : (
            <p className="text-center w-full text-brand-dark/70">Images coming soon.</p>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3 rounded-lg w-full font-semibold transition"
        >
          Close Gallery
        </button>
      </div>
    </div>
  );
}
