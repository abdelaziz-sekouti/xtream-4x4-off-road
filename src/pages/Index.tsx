import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Featured } from "@/components/site/Featured";
import { Packages } from "@/components/site/Packages";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title =
      "Xtreme 4x4 off-road  4x4 — Off-Road Adventures, Tours & Vehicle Prep in Morocco";

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
      "Xtreme 4x4 off-road  4x4: 25+ years of off-road expertise in Morocco. Custom 4x4 tours, desert expeditions, rally training & professional vehicle preparation.",
    );
    ensureMeta(
      "keywords",
      "4x4 Morocco, desert tours Morocco, off-road adventure Morocco, Sahara expedition, rally training, vehicle preparation Tanger",
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";

    const ld = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Xtreme 4x4 off-road  4x4 Equipements",
      description:
        "Off-road 4x4 adventures, tours, training and vehicle preparation in Morocco and Africa.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "47 Av. Yakoub El Mansour",
        addressLocality: "Tanger",
        postalCode: "90000",
        addressCountry: "MA",
      },
      telephone: "+212661145645",
      email: "Xtreme 4x4 off-road 4x4@yahoo.fr",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "2",
      },
    };
    let s = document.getElementById("ld-json") as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement("script");
      s.id = "ld-json";
      s.type = "application/ld+json";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(ld);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Featured />
      <Packages />
      <WhyUs />
      <Testimonials />
      <Blog />
      <CtaBanner />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
