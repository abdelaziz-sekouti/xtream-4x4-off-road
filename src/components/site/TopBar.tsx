import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <div className="bg-night-2 border-b border-white/10 hidden lg:flex items-center justify-center">
      <div className="container-x py-2">
        <div className="flex items-center justify-between text-sm">
          {/* Left side - Contact info */}
          <div className="flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <a href="tel:+212612236660" className="hover:text-primary transition-colors">
                +212 (0) 6 12236660
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href="mailto:sekoutiabdelaziz0@gmail.com" className="hover:text-primary transition-colors">
                sekoutiabdelaziz0@gmail.com
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-2 hover:text-primary ">
              <MapPin size={14} className="text-primary" />
              <span>Derb Boualam 185 S.Y.B.A. Marrakech, Morocco</span>
            </div>
          </div>

          {/* Right side - Language switcher and social icons */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              <button className="text-white/70 hover:text-primary transition-colors text-xs font-medium px-2 py-1 border border-white/20 hover:border-primary/50">
                🇬🇧 EN
              </button>
              <span className="text-white/40">|</span>
              <button className="text-white/40 hover:text-white/70 transition-colors text-xs font-medium px-2 py-1">
                🇫🇷 FR
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border text-white hover:text-amber-200 border-white/20 hover:border-primary hover:bg-primary flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook size={12} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border text-white hover:text-amber-200 border-white/20 hover:border-primary hover:bg-primary flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram size={12} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border text-white hover:text-amber-200 border-white/20 hover:border-primary hover:bg-primary flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};