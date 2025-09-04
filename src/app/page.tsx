import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Hero />

      {/* ABOUT / CHI SIAMO */}
      <AboutSection />

      {/* FEATURES GRID */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* FREE / PRICING BLURB */}
      <FreeSection />

      {/* FAQ */}
      <FaqSection />

      {/* WAITLIST (dark card) */}
      <WaitlistSection />
    </main>
  );
}

/* ================= Sections ================= */

function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 ${className}`}>
      {children}
    </section>
  );
}

/* --- About / Chi siamo --- */
function AboutSection() {
  return (
    <SectionWrapper className="py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-wide text-gray-600" style={{ fontFamily: "var(--font-saltech)" }}>
          Chi siamo
        </p>
        <h2
          className="mt-2 text-3xl sm:text-4xl font-semibold"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Uno spazio reale per genitori reali
        </h2>
        <p className="mt-4 text-gray-700">
          Crediamo che la maternità e la paternità non debbano essere un’esperienza solitaria. Con Hiver crei il tuo profilo, trovi altri genitori vicino a te e organizzi momenti insieme: una passeggiata al parco, una merenda sul terrazzo, una chiacchiera tra neogenitori. Vogliamo far sentire ogni genitore accolto, connesso e capito.
        </p>
      </div>
    </SectionWrapper>
  );
}

/* --- Free / Pricing blurb --- */
function FreeSection() {
  return (
    <SectionWrapper className="py-14 sm:py-18 lg:py-20">
      <div className="rounded-3xl ring-1 ring-black/5 bg-gradient-to-br from-white to-[#F9FAFB] p-8 sm:p-12 lg:p-14 text-center">
        <p className="inline-block rounded-full bg-[color:var(--honey)]/30 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-black/5">
          Ma quanto costa?
        </p>
        <h3
          className="mt-4 text-4xl sm:text-5xl font-semibold"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Gratis, per sempre.
        </h3>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Hiver è una piattaforma pensata per creare legami tra genitori del tuo quartiere. L’accesso e le funzioni base saranno sempre gratuiti: nessuna carta, solo strumenti utili con un tono caldo e semplice. In futuro introdurremo funzioni premium opzionali.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
            <span>✓</span> Incontri ed eventi tra genitori
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
            <span>✓</span> Mappa di genitori e luoghi family‑friendly
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
            <span>✓</span> Feed con consigli utili & marketplace circolare
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* --- Waitlist: dark card placed after FAQ --- */
function WaitlistSection() {
  return (
    <SectionWrapper id="waitlist" className="py-20">
      <div className="relative mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl text-white ring-1 ring-black/5 shadow-xl p-8 sm:p-12">
          {/* card background */}
          <div className="absolute inset-0 bg-[color:var(--pink)]" />

          {/* content */}
          <div className="relative z-10">
            <h3
              className="text-2xl sm:text-3xl font-semibold"
              style={{ fontFamily: "var(--font-hagrid)" }}
            >
              Resta aggiornato sul lancio
            </h3>
            <p className="mt-2 text-white/80">
              Iscriviti e ti avviseremo non appena Hiver sarà disponibile. Niente spam.
            </p>

            <form
              className="mt-6 flex flex-col sm:flex-row gap-3"
              action="https://formspree.io/f/your-id"
              method="POST"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="La tua email"
                className="w-full sm:flex-1 rounded-md bg-white/15 px-4 py-3 text-white placeholder-white/70 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="rounded-md bg-white px-5 py-3 font-semibold text-[color:var(--ink)] hover:bg-gray-100"
              >
                Avvisami
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* --- FAQ Section --- */
function FaqSection() {
  const faqs = [
    {
      q: "Cos’è Hiver?",
      a: "Hiver è una piattaforma che mette in contatto i genitori vicini: puoi creare o unirti a piccoli eventi (passeggiate, merende, incontri) e costruire una rete reale nel quartiere.",
    },
    {
      q: "È gratuita?",
      a: "Sì. Al lancio Hiver sarà gratuita per tutti, senza carta di credito richiesta.",
    },
    {
      q: "Come funzionano gli eventi?",
      a: "Crei un evento dal tuo profilo, scegli luogo e orario e inviti altri genitori della zona. Le persone interessate si iscrivono e vi incontrate dal vivo.",
    },
    {
      q: "Cosa mostro sulla mappa?",
      a: "Vedi genitori nelle vicinanze (se lo desiderano) e luoghi utili per famiglie come pediatri, nidi, parchi e negozi per l’infanzia.",
    },
    {
      q: "Posso vendere o scambiare oggetti?",
      a: "Sì, con il marketplace puoi dare nuova vita a passeggini, giochi e abbigliamento, vendendoli o scambiandoli con altri genitori.",
    },
  ];

  return (
    <SectionWrapper id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Domande frequenti
        </h2>
        <p className="mt-3 text-gray-600">Le risposte alle curiosità più comuni su Hiver.</p>
      </div>

      <dl className="mt-10 divide-y divide-gray-200">
        {faqs.map((item) => (
          <div key={item.q} className="py-8">
            <dt className="font-semibold text-gray-900">{item.q}</dt>
            <dd className="mt-3 text-gray-600">{item.a}</dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  );
}