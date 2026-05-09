import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ArrowRight, Wrench, Shield, Gauge, Fuel } from "lucide-react";
import { useEffect } from "react";

const Preparation = () => {
  useEffect(() => {
    document.title = "Vehicle Preparation — Professional Rally Prep | Site Title  4x4";

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
      "Professional vehicle preparation for extreme off-road conditions. Rally-grade suspension, snorkels, protection, and safety equipment. Built to survive the Sahara.",
    );
    ensureMeta(
      "keywords",
      "vehicle preparation Morocco, rally preparation, 4x4 modification Morocco, off-road vehicle prep, suspension upgrade Morocco",
    );
  }, []);

  const prepServices = [
    {
      icon: Wrench,
      title: "Suspension & Lift Kits",
      desc: "Heavy-duty suspension upgrades with increased ground clearance and articulation for extreme terrain.",
    },
    {
      icon: Shield,
      title: "Body Protection",
      desc: "Rock sliders, underbody plating, and reinforced bumpers to protect against rocks and impacts.",
    },
    {
      icon: Fuel,
      title: "Snorkel & Air Intake",
      desc: "High-mounted snorkels and cold air intake systems for water crossings and dust-heavy environments.",
    },
    {
      icon: Gauge,
      title: "Performance Upgrades",
      desc: "Turbo upgrades, intercoolers, and ECU tuning for enhanced power and reliability in harsh conditions.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <section className="py-24 md:py-32 bg-night text-white">
        <div className="container-x">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="eyebrow text-primary">Vehicle Preparation</span>
            <h1 className="heading-display text-5xl md:text-7xl mt-6">
              Built to <span className="text-primary">Survive</span> the Sahara
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mt-8">
              Professional rally-grade preparation for extreme off-road conditions.
              Every modification designed to keep you safe and your vehicle running.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prepServices.map((service) => (
              <div
                key={service.title}
                className="bg-night-2 p-8 border border-white/10 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-display font-bold text-xl mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-night-2/50 backdrop-blur-sm border border-white/10 p-8 max-w-2xl mx-auto">
              <h3 className="text-white font-display font-black text-2xl mb-4">
                Ready for Your Next Challenge?
              </h3>
              <p className="text-white/70 mb-6">
                Contact us for a custom preparation quote. We work with all vehicle types and budgets.
              </p>
              <a
                href="#contact"
                className="btn-red inline-flex items-center gap-2"
              >
                Get Preparation Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Preparation;