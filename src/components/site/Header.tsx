import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Location", href: "/location" },
  { label: "Preparation", href: "/preparation" },
  { label: "Training", href: "/training" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("EN");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed lg:top-10 top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-night/95 backdrop-blur-md shadow-hard"
          : "bg-gradient-to-b from-night/70 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://picsum.photos/seed/logo/48/48"
            alt="Site Title  4x4"
            className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
          />
          <div className="hidden sm:block text-white leading-none">
            <div className="font-display font-black text-lg tracking-wider">
             Site Title{" "}
            </div>
            <div className="text-[10px] tracking-[0.3em] text-primary font-bold">
              Car repair and maintenance service
            </div>
            </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Link
                key={l.label}
                to={l.href}
                className={`text-sm font-display font-semibold uppercase tracking-wider transition-colors relative group ${
                  isActive ? "text-primary" : "text-white/90 hover:text-primary"
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="hidden sm:flex items-center gap-1 text-white/80 hover:text-white text-xs font-display font-bold tracking-widest border border-white/30 px-3 py-2 transition-colors"
            aria-label="Switch language"
          >
            {lang === "EN" ? "🇬🇧 EN" : "🇫🇷 FR"}
          </button> */}
          <Link
            to="/contact"
            className="hidden md:ml-2 md:inline-flex btn-red !py-3 !px-5 text-xs  md:w-fit"
          >
            Book Now
          </Link>
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
            {links.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-display font-semibold uppercase tracking-wider text-sm py-2 ${
                    isActive ? "text-primary" : "text-white/90 hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-red mt-2"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
