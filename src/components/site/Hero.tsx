import { ArrowRight, MessageCircle, Calendar, User, Phone } from "lucide-react";
import hero from "@/assets/hero-desert.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-night">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="4x4 Land Cruiser racing through Moroccan Sahara desert at sunset"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-night/20 to-transparent" />
      </div>

      {/* Side accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 px-6 z-10">
        <div className="w-px h-24 bg-white/30" />
        <span className="text-white/60 text-xs font-display font-bold tracking-[0.4em] [writing-mode:vertical-rl] rotate-180">
          SINCE 2000 · MOROCCO
        </span>
        <div className="w-px h-24 bg-white/30" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-32 pb-20">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="eyebrow text-primary mb-6">Off-Road Adventure · Morocco & Africa</span>
          <h1 className="heading-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-6">
            Create Your <br />
            <span className="text-primary">Off-Road</span> Adventure <br />
            in Morocco & Africa
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mt-8 font-light leading-relaxed">
            Custom 4x4 tours, professional rally training & expert vehicle preparation.
            <span className="text-white font-medium"> 25+ years</span> conquering the Sahara.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#packages" className="btn-red">
              Discover Packages <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/212661145645"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
            {[
              { n: "25+", l: "Years Exp." },
              { n: "500+", l: "Clients" },
              { n: "5.0★", l: "Rating" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary pl-4">
                <div className="text-white font-display font-black text-3xl">{s.n}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick booking card */}
        <div className="lg:col-span-5 lg:justify-self-end w-full max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-night-2/90 backdrop-blur-md border border-white/10 p-8 shadow-hard">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Calendar className="text-white" size={20} />
              </div>
              <div>
                <div className="text-white font-display font-bold uppercase tracking-wider text-sm">Quick Booking</div>
                <div className="text-white/50 text-xs">Reply within 1 hour</div>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const msg = `Hello Atraxion! I'm ${f.get("name")}, dates: ${f.get("dates")}, my number: ${f.get("phone")}`;
                window.open(`https://wa.me/212661145645?text=${encodeURIComponent(msg)}`, "_blank");
              }}
              className="space-y-4"
            >
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                <input name="name" required placeholder="Your name" className="w-full bg-night border border-white/10 text-white placeholder:text-white/40 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                <input name="dates" required placeholder="Travel dates" className="w-full bg-night border border-white/10 text-white placeholder:text-white/40 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                <input name="phone" required placeholder="WhatsApp number" className="w-full bg-night border border-white/10 text-white placeholder:text-white/40 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <button type="submit" className="btn-red w-full">
                Get Free Quote <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] font-display font-bold tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-float-slow" />
      </div>
    </section>
  );
};
