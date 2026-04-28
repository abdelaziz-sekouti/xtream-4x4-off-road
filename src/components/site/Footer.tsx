import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-night text-white pt-24 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Xtreme 4x4 off-road  4x4"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="font-display font-black text-xl tracking-wider">
                  Xtreme 4x4 off-road{" "}
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
                  47 Av. Yakoub El Mansour, Al Mansour, Tanger 90000, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+212661145645" className="hover:text-primary">
                  +212 (0) 06 61 72 06 63
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+212524355558" className="hover:text-primary">
                  +212 (0) 06 61 72 06 63
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:Xtreme 4x4 off-road 4x4@yahoo.fr"
                  className="hover:text-primary"
                >
                  Xtreme 4x4 off-road 4x4@yahoo.fr
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
              href="https://wa.me/212661145645"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full mt-6 !py-3"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Xtreme 4x4 off-road 4x4 Equipements.
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
    </footer>
  );
};
