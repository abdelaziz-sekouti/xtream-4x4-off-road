import { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="contact" className="bg-night text-white pt-24 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://picsum.photos/seed/logo/48/48"
                alt="Site Title  4x4"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="font-display font-black text-xl tracking-wider">
                  Site Title{" "}
                </div>
                <div className="text-[10px] tracking-[0.3em] text-primary font-bold">
                  4x4 EQUIPEMENTS
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Creators of off-road adventures in Morocco & Africa for over 25
              years. Custom 4x4 tours, professional rally training and expert
              vehicle preparation.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/20 hover:border-primary hover:bg-primary flex items-center justify-center transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display font-black uppercase text-sm tracking-widest mb-5 text-primary">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                "Packages",
                "Rental",
                "Preparation",
                "Training",
                "About",
                "Blog",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-black uppercase text-sm tracking-widest mb-5 text-primary">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Derb Boualam 185 S.Y.B.A. Marrakech 40050, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+212612236660" className="hover:text-primary">
                  +212 (0) 06 12236660
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+21212236660" className="hover:text-primary">
                  +212 (0) 06 12236660
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:sekoutiabdelaziz0@gmail.com"
                  className="hover:text-primary"
                >
                  sekoutiabdelaziz0@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-black uppercase text-sm tracking-widest mb-5 text-primary">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Mon — Fri</span>
                <span>10:00 — 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 — 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/40">Closed</span>
              </li>
            </ul>
            <a
              href="https://wa.me/212612236660"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full mt-6 !py-3 hover:bg-transparent hover:border-2 hover:border-primary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Site Title 4x4 Equipements.
            All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 w-12 h-12 bg-primary hover:bg-primary/80 text-white shadow-lg hover:shadow-xl flex items-center justify-center z-50 transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
