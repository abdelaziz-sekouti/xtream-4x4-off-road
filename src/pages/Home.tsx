import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Featured } from "@/components/site/Featured";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title =
      "Site Title  4x4 — Off-Road Adventures, Tours & Vehicle Prep in Morocco";

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
      "Site Title  4x4: 25+ years of off-road expertise in Morocco. Custom 4x4 tours, desert expeditions, rally training & professional vehicle preparation.",
    );
    ensureMeta(
      "keywords",
      "4x4 Morocco, desert tours Morocco, off-road adventure Morocco, Sahara expedition, rally training, vehicle preparation Marrakech",
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
      name: "Site Title  4x4 Equipements",
      description:
        "Off-road 4x4 adventures, tours, training and vehicle preparation in Morocco and Africa.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Derb Boualam 185 S.Y.B.A.",
        addressLocality: "Marrakech",
        postalCode: "90000",
        addressCountry: "MA",
      },
      telephone: "+212612236660",
      email: "Site Title 4x4@yahoo.fr",
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
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Featured />
      <Blog />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Home;