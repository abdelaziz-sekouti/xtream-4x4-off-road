import { ArrowRight } from "lucide-react";

export const CtaBanner = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 noise opacity-30" />
      <div
        className="absolute -right-20 -top-20 w-96 h-96 border-[40px] border-white/10 rotate-12"
        aria-hidden
      />
      <div className="container-x relative py-20 md:py-28 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <span className="text-white/80 text-xs font-display font-bold uppercase tracking-[0.3em]">
            / Limited spots — 2026 season
          </span>
          <h2 className="heading-display text-4xl md:text-6xl lg:text-7xl mt-5">
            Ready for your <br /> next adventure?
          </h2>
        </div>
        <div className="md:col-span-4 md:text-right">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 font-display font-black uppercase tracking-wider text-sm hover:bg-night hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-hard"
          >
            Book Your Experience <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
