import { ArrowUpRight } from "lucide-react";
import rental from "@/assets/service-rental.jpg";
import tours from "@/assets/service-tours.jpg";
import prep from "@/assets/service-prep.jpg";

const services = [
  { num: "01", title: "4x4 Rental", desc: "Premium fleet of fully-equipped Land Cruisers, Defenders & pickups ready for any terrain.", img: rental },
  { num: "02", title: "Adventure Tours", desc: "Custom expeditions across the Sahara, Atlas Mountains, and beyond — from 3 to 21 days.", img: tours },
  { num: "03", title: "Vehicle Preparation", desc: "Professional rally prep: suspension, snorkels, roof racks, protection — built to survive.", img: prep },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary">What We Do</span>
            <h2 className="heading-display text-4xl md:text-6xl mt-4">
              Engineered for <br /> the <span className="text-primary">Extreme</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From the first tire bolt to the final dune crossing — we handle every detail of your off-road experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="card-hover-zoom group relative overflow-hidden bg-night aspect-[4/5] cursor-pointer"
            >
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 gradient-card" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />

              <div className="absolute top-6 left-6 text-white/60 font-display font-black text-sm tracking-[0.3em]">
                / {s.num}
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={18} />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="text-white font-display font-black text-3xl uppercase mb-3">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">{s.desc}</p>
                <div className="w-12 h-1 bg-primary mt-5 group-hover:w-24 transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
