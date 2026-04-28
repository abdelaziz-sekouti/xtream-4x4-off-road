import { ArrowUpRight } from "lucide-react";
import a from "@/assets/pkg-desert.jpg";
import b from "@/assets/pkg-atlas.jpg";
import c from "@/assets/service-prep.jpg";

const posts = [
  { img: a, date: "Apr 2026", category: "Stories", title: "Crossing the Erg Chebbi: A 5-Day Sahara Diary", excerpt: "How three friends from Berlin discovered Morocco's wildest side behind the wheel of a Land Cruiser." },
  { img: b, date: "Mar 2026", category: "Advice", title: "What to Pack for Your First Off-Road Trip", excerpt: "From recovery boards to sand goggles — the essentials our 25-year veterans never travel without." },
  { img: c, date: "Feb 2026", category: "Tech", title: "Why Vehicle Preparation Saves Lives", excerpt: "A real story from the Dakar route, and why a properly-prepped 4x4 makes all the difference." },
];

export const Blog = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow text-primary">Off-Road Stories</span>
            <h2 className="heading-display text-4xl md:text-6xl mt-4">
              From the <span className="text-primary">Field</span>
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors">
            All Articles <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="card-hover-zoom relative aspect-[4/3] overflow-hidden bg-night mb-5">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-night text-white text-[10px] font-display font-black uppercase tracking-widest px-3 py-1.5">
                  {p.category}
                </div>
              </div>
              <div className="text-xs text-muted-foreground font-display font-bold tracking-widest uppercase mb-3">{p.date}</div>
              <h3 className="font-display font-black text-xl uppercase leading-tight group-hover:text-primary transition-colors mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
