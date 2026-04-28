import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/212661145645?text=Hello%20Atraxion!%20I'm%20interested%20in%20your%204x4%20adventures."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-hard group-hover:scale-110 transition-transform">
      <MessageCircle size={26} fill="currentColor" />
    </span>
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-night text-white text-xs font-display font-bold uppercase tracking-wider px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Chat with us
    </span>
  </a>
);
