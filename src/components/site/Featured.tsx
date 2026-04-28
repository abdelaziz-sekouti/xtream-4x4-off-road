import { ArrowRight } from "lucide-react";
import featured from "@/assets/featured-morocco.jpg";

export const Featured = () => {
  return (
    <section className="py-24 md:py-32 bg-night-2 noise text-white overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary hidden md:block" />
          <div className="relative overflow-hidden">
            <img src={featured} alt="4x4 climbing Sahara dune in Morocco" loading="lazy" width={1280} height={1024} className="w-full h-[520px] object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-night-2 to-transparent h-1/3" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 hidden md:block shadow-red">
            <div className="font-display font-black text-4xl leading-none">25+</div>
            <div className="text-xs uppercase tracking-widest mt-2">Years of <br /> Pure Adventure</div>
          </div>
        </div>

        <div>
          <span className="eyebrow text-primary">Featured Experience</span>
          <h2 className="heading-display text-4xl md:text-6xl mt-4">
            Discover Morocco <br /> <span className="text-primary">Differently</span>
          </h2>
          <p className="text-white/70 text-lg mt-6 leading-relaxed">
            Forget the tourist trail. We open the doors to the real Morocco — the silent dunes of Erg Chebbi,
            the hidden valleys of the High Atlas, the Berber villages that time forgot. Behind the wheel
            of a fully-prepared 4x4, with experts who've crossed every kilometer.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Tailor-made routes designed around you",
              "Professional guides & mechanical support",
              "Premium 4x4 fleet, fully equipped",
              "All-inclusive: fuel, camps, meals",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-white/90">
                <span className="w-2 h-2 bg-primary rotate-45" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#packages" className="btn-red mt-10">
            Explore Adventures <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
