import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us — 25+ Years of Off-Road Excellence | Site Title  4x4";

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
      "Site Title  4x4: Morocco's premier off-road adventure specialists since 2000. 25+ years of experience, 500+ satisfied clients, 5-star rated.",
    );
    ensureMeta(
      "keywords",
      "Site Title 4x4 about, Morocco off-road company, 4x4 specialists Morocco, desert adventure experts, off-road Morocco history",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <WhyUs />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default About;