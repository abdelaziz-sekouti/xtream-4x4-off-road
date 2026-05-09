import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { MapPin, Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us — Book Your Morocco Off-Road Adventure | Site Title  4x4";

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
      "Contact Site Title  4x4 for your Morocco off-road adventure. WhatsApp: +212612236660, Email: Site Title4x4@yahoo.fr. Get your free quote within 1 hour.",
    );
    ensureMeta(
      "keywords",
      "contact Site Title 4x4, Morocco off-road booking, 4x4 tours Morocco contact, desert adventure booking Morocco",
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <section className="py-24 md:py-32 bg-night text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-primary">Get In Touch</span>
              <h1 className="heading-display text-5xl md:text-6xl mt-6">
                Ready for Your <span className="text-primary">Adventure</span>?
              </h1>
              <p className="text-white/80 text-lg max-w-xl mt-8">
                Contact us today for a free, personalized quote. We respond within 1 hour and can customize any adventure to match your experience level and preferences.
              </p>

              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold">Phone</div>
                    <div className="text-white/70">+212 612 236 660</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold">Email</div>
                    <div className="text-white/70">Site Title4x4@yahoo.fr</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold">Location</div>
                    <div className="text-white/70">Derb Boualam 185 S.Y.B.A., Marrakech, Morocco</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-night-2/90 backdrop-blur-md border border-white/10 p-8 shadow-hard">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-white font-display font-bold uppercase tracking-wider text-sm">
                    Quick Booking
                  </div>
                  <div className="text-white/50 text-xs">Reply within 1 hour</div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const msg = `Hello Site Title ! I'm ${f.get("name")}, dates: ${f.get("dates")}, my number: ${f.get("phone")}`;
                  window.open(
                    `https://wa.me/212612236660?text=${encodeURIComponent(msg)}`,
                    "_blank",
                  );
                }}
                className="space-y-4"
              >
                <div className="relative">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-night border border-white/10 text-white placeholder:text-white/40 pl-4 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="relative">
                  <input
                    name="dates"
                    required
                    placeholder="Travel dates"
                    className="w-full bg-night border border-white/10 text-white placeholder:text-white/40 pl-4 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="relative">
                  <input
                    name="phone"
                    required
                    placeholder="WhatsApp number"
                    className="w-full bg-night border border-white/10 text-white placeholder:text-white/40 pl-4 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <button type="submit" className="btn-red w-full flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-display text-4xl md:text-5xl">
              Find Our <span className="text-primary">Location</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-6">
              Visit us at our headquarters in Marrakech, Morocco. We're located in the heart of the medina.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9999!2d-8.0089!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ2LjIiTiA4wrAwMCc0NC4wIlc!5e0!3m2!1sen!2sma!4v1630000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Site Title 4x4 Location - Marrakech, Morocco"
              />
            </div>

            <div className="mt-8 text-center">
              <div className="bg-night-2 p-6 rounded-lg max-w-2xl mx-auto">
                <h3 className="font-display font-bold text-xl text-white mb-4">Our Address</h3>
                <div className="space-y-2 text-white/80">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Derb Boualam 185 S.Y.B.A.
                  </p>
                  <p>Marrakech 40050, Morocco</p>
                  <p className="text-white/60 text-sm mt-4">
                    Located in the historic Bahia Palace area of Marrakech's medina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Contact;