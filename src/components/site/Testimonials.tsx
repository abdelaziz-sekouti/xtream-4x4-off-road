import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Fayçal Touhami", role: "Adventure Tour · Morocco", text: "They're absolute pros at 4x4 driving. Knowledge, professionalism and pure passion — well done team!", rating: 5 },
  { name: "Aya Rahmani", role: "Desert Expedition", text: "Excellent work from start to finish. The vehicle prep was flawless and the guides made the trip unforgettable.", rating: 5 },
  { name: "Marc Dupont", role: "Atlas Crossing · France", text: "Best off-road experience of my life. The Atraxion team knows every dune, every track. Already booking next year.", rating: 5 },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-primary justify-center" style={{ display: "inline-flex" }}>Testimonials</span>
          <h2 className="heading-display text-4xl md:text-6xl mt-4">
            5.0 ★ <span className="text-primary">Rated</span> by Adventurers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="bg-background p-8 shadow-card relative group hover:shadow-hard transition-all duration-500 hover:-translate-y-1">
              <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={48} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">"{r.text}"</p>
              <div className="border-t border-border pt-5">
                <div className="font-display font-bold uppercase tracking-wider text-sm">{r.name}</div>
                <div className="text-muted-foreground text-xs mt-1">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
