import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ArrowRight, Target, Users, Award, Clock } from "lucide-react";
import { useEffect } from "react";

const Training = () => {
  useEffect(() => {
    document.title = "Rally Training — Professional Off-Road Driving School | Site Title  4x4";

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    ensureMeta(
      "description",
      "FIA-certified rally driving training in Morocco. Master sand, mud, and rocks with professional instructors. 3-day intensive off-road driving courses.",
    );
    ensureMeta(
      "keywords",
      "rally training Morocco, off-road driving school, 4x4 training Morocco, FIA certified training, desert driving course",
    );
  }, []);

  const trainingFeatures = [
    {
      icon: Target,
      title: "Sand Driving Mastery",
      desc: "Learn to navigate massive dunes, soft sand, and desert terrain with confidence and control.",
    },
    {
      icon: Users,
      title: "Small Group Training",
      desc: "Maximum 6 students per instructor for personalized attention and optimal learning experience.",
    },
    {
      icon: Award,
      title: "FIA Certified Instructors",
      desc: "Professional rally drivers with decades of experience and international competition credentials.",
    },
    {
      icon: Clock,
      title: "3-Day Intensive Course",
      desc: "Comprehensive training covering all essential off-road driving techniques and safety protocols.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <section className="py-24 md:py-32 bg-gradient-to-br from-night via-night-2 to-primary/10">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-primary">Rally Training</span>
              <h1 className="heading-display text-white text-5xl md:text-6xl mt-6">
                Master the <span className="text-primary">Art</span> of Off-Road Driving
              </h1>
              <p className="text-white/80 text-lg max-w-xl mt-8">
                Join our FIA-certified rally driving school and learn to conquer any terrain.
                From sand dunes to rocky mountain passes, gain the skills and confidence to tackle Morocco's most challenging landscapes.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#contact" className="btn-red">
                  Book Training Course <ArrowRight size={18} />
                </a>
                <div className="text-white/60 text-sm">
                  3-Day Course • Max 6 Students • FIA Certified
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://picsum.photos/seed/rally-training/600/500"
                alt="Rally driving training in Morocco desert"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-red">
                <div className="font-display font-black text-3xl leading-none">25+</div>
                <div className="text-xs uppercase tracking-widest mt-2">Years Training<br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-display text-4xl md:text-5xl">
              What You'll <span className="text-primary">Learn</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6">
              Our comprehensive 3-day training program covers all essential off-road driving skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 border border-gray-100 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="font-display font-bold text-xl mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Training;