import { Clock, MapPin, ArrowRight } from "lucide-react";
import desert from "@/assets/pkg-desert.jpg";
import atlas from "@/assets/pkg-atlas.jpg";
import training from "@/assets/pkg-training.jpg";
import rental from "@/assets/service-rental.jpg";
import tours from "@/assets/service-tours.jpg";
import featured from "@/assets/featured-morocco.jpg";

const packages = [
  { img: desert, tag: "Expedition", title: "Desert Expedition", duration: "5 Days", location: "Merzouga · Erg Chebbi", desc: "Conquer the legendary red dunes, sleep under the stars at our private camp." },
  { img: atlas, tag: "Discovery", title: "Atlas Crossing", duration: "7 Days", location: "High Atlas · Dades", desc: "Snow peaks, gorges and Berber villages — the most diverse route in Morocco." },
  { img: training, tag: "Training", title: "Rally Driving School", duration: "3 Days", location: "Tangier Region", desc: "Master sand, mud, and rocks with FIA-certified instructors." },
  { img: tours, tag: "Premium", title: "Sahara Grand Tour", duration: "10 Days", location: "Marrakech → Sahara", desc: "The full Moroccan experience: imperial cities, oases, and endless dunes." },
  { img: featured, tag: "Adventure", title: "Africa Raid", duration: "21 Days", location: "Morocco → Mauritania", desc: "The ultimate cross-border raid for true off-road veterans." },
  { img: rental, tag: "Custom", title: "Build Your Own", duration: "Flexible", location: "Anywhere · Morocco", desc: "Tell us your dream — we'll design it, equip it, and guide you through it." },
];

export const Packages = () => {
  return (
    <section id="packages" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-primary justify-center" style={{ display: "inline-flex" }}>Our Packages</span>
          <h2 className="heading-display text-4xl md:text-6xl mt-4">
            Choose Your <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Six signature experiences. Endless customization. One promise: you'll never forget it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border overflow-hidden shadow-card hover:shadow-hard transition-all duration-500 hover:-translate-y-1"
            >
              <div className="card-hover-zoom relative aspect-[4/3] overflow-hidden bg-night">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-display font-black uppercase tracking-widest px-3 py-1.5">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-black text-2xl uppercase mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> {p.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {p.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-night font-display font-bold uppercase tracking-wider text-xs group/link">
                  View Details
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1 text-primary" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
