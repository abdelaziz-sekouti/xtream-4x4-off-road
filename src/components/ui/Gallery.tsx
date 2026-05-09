import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export const Gallery = ({ images, columns = 3 }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % images.length : 0);
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + images.length) % images.length : 0);

  return (
    <>
      <div className={`grid gap-4 ${columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden cursor-pointer aspect-square"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <div className="text-lg font-bold">View</div>
                {image.caption && <div className="text-sm">{image.caption}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            <div className="relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {images[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <p className="text-center">{images[selectedImage].caption}</p>
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};