import { Award, Users, Compass, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "25+ Years Experience",
    desc: "A quarter-century of off-road expertise across North Africa.",
  },
  {
    icon: Users,
    title: "Professional Guides",
    desc: "Multilingual experts — French, English, Spanish, Arabic.",
  },
  {
    icon: Compass,
    title: "Custom Adventures",
    desc: "Every itinerary designed around your dream and your level.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Sat phones, medical kits, mechanical support on every trip.",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why"
      className="py-24 md:py-32 bg-night text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 noise opacity-50" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="eyebrow text-primary">
              Why Xtreme 4x4 off-road{" "}
            </span>
            <h2 className="heading-display text-4xl md:text-6xl mt-4">
              Built on <span className="text-primary">Trust</span>. <br />{" "}
              Driven by Passion.
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/70 text-lg">
            We're not a travel agency — we're off-road obsessives who happen to
            share our playground with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="bg-night p-8 group hover:bg-primary transition-colors duration-500 cursor-default"
            >
              <div className="text-primary group-hover:text-white transition-colors mb-6 flex items-center justify-between">
                <it.icon size={40} strokeWidth={1.5} />
                <span className="font-display font-black text-xl text-white/20 group-hover:text-white/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-black text-xl uppercase mb-3">
                {it.title}
              </h3>
              <p className="text-white/70 group-hover:text-white/90 text-sm leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
