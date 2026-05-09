import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Packages } from "@/components/site/Packages";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useEffect } from "react";

const PackagesPage = () => {
  useEffect(() => {
    document.title = "Packages — Site Title  4x4 Off-Road Adventures";

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
      "Explore our premium 4x4 packages: Desert Expeditions, Atlas Crossing, Rally Training, Sahara Grand Tour, and Africa Raid. Custom off-road adventures in Morocco.",
    );
    ensureMeta(
      "keywords",
      "4x4 packages Morocco, desert expedition packages, off-road tours Morocco, rally training Morocco, custom 4x4 adventures",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <Packages />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default PackagesPage;