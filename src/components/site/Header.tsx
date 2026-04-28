import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Location", href: "#services" },
  { label: "Preparation", href: "#services" },
  { label: "Training", href: "#packages" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-night/95 backdrop-blur-md shadow-hard"
          : "bg-gradient-to-b from-night/70 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Xtreme 4x4 off-road  4x4"
            className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
          />
          <div className="hidden sm:block text-white leading-none">
            <div className="font-display font-black text-lg tracking-wider">
              Xtreme <br/>4x4 off-road{" "}
            </div>
            <div className="text-[10px] tracking-[0.3em] text-primary font-bold">
              Car repair and maintenance service
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/90 hover:text-primary text-sm font-display font-semibold uppercase tracking-wider transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="hidden sm:flex items-center gap-1 text-white/80 hover:text-white text-xs font-display font-bold tracking-widest border border-white/30 px-3 py-2 transition-colors"
            aria-label="Switch language"
          >
            {lang === "EN" ? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex btn-red !py-3 !px-5 text-xs"
          >
            Book Now
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-night border-t border-white/10">
          <nav className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-primary font-display font-semibold uppercase tracking-wider text-sm py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-red mt-2"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
