import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Featured } from "@/components/site/Featured";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    document.title = "Locations — Morocco Off-Road Adventures | Site Title  4x4";

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
      "Discover Morocco's most spectacular off-road destinations: Sahara Desert, High Atlas Mountains, Dades Gorge, and more. 25+ years of expertise guiding adventurers.",
    );
    ensureMeta(
      "keywords",
      "Morocco off-road locations, Sahara desert Morocco, Atlas mountains 4x4, Dades gorge tours, Morocco adventure destinations",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <Featured />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Location;