import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* FEATURES GRID */}
      <FeaturesSection />

      {/* FREE / PRICING BLURB */}
      <FreeSection />

      {/* SCREENSHOTS */}
      <ScreensSection />

      {/* CTA MAILING LIST (esistente) */}
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

/* --- Features --- */
function FeaturesSection() {
  const items = [
    {
      title: "Calendario condiviso",
      desc: "Impegni di tutti in un’unica vista, con promemoria chiari.",
      color: "bg-[color:var(--pink)]/30",
    },
    {
      title: "Promemoria smart",
      desc: "Notifiche su ciò che conta davvero, senza rumore.",
      color: "bg-[color:var(--quiet)]/30",
    },
    {
      title: "Liste & note",
      desc: "Spesa, medicine, attività: tutto organizzato.",
      color: "bg-[color:var(--honey)]/30",
    },
    {
      title: "Spazio sicuro",
      desc: "Community accogliente, zero giudizi.",
      color: "bg-[color:var(--sprout)]/30",
    },
  ];

  return (
    <SectionWrapper id="funzioni" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Cosa puoi fare con Hiver
        </h2>
        <p className="mt-3 text-gray-600">
          Strumenti semplici e pensati per la vita di tutti i giorni.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow transition"
          >
            <div className={`h-10 w-10 rounded-lg grid place-items-center font-bold ${it.color}`}>
              ✓
            </div>
            <h3
              className="mt-4 text-lg font-semibold"
              style={{ fontFamily: "var(--font-hagrid)" }}
            >
              {it.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
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
          Prezzo
        </p>
        <h3
          className="mt-4 text-4xl sm:text-5xl font-semibold"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Gratis per i genitori
        </h3>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Hiver nasce per aiutare: potrai usarla gratuitamente al lancio.
          Nessuna carta richiesta. Solo strumenti utili e un tono umano.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
            <span>✓</span> Calendario condiviso
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
            <span>✓</span> Promemoria intelligenti
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
            <span>✓</span> Liste e note
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* --- Screenshots --- */
function ScreensSection() {
  // Metti i tuoi screenshot in /public/screens/ (es. screen1.png, screen2.png, screen3.png)
  const shots = [
    { src: "/screens/screen1.png", alt: "Home Hiver" },
    { src: "/screens/screen2.png", alt: "Calendario Hiver" },
    { src: "/screens/screen3.png", alt: "Liste Hiver" },
  ];

  return (
    <SectionWrapper className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Uno sguardo all’app
        </h2>
        <p className="mt-3 text-gray-600">
          Un’anteprima delle schermate principali. Pulita, calda, semplice.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((s) => (
          <div
            key={s.alt}
            className="rounded-2xl bg-white p-2 ring-1 ring-black/5 shadow-sm"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={1080}
              height={1920}
              className="w-full h-auto rounded-xl bg-gray-100"
              priority={s.alt === "Home Hiver"}
            />
            <p className="mt-3 text-sm text-gray-600 text-center">{s.alt}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* --- Waitlist: re-use del tuo blocco CTA --- */
function WaitlistSection() {
  return (
    <section id="waitlist" className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="rounded-3xl p-8 sm:p-10 text-center text-white"
          style={{ background: "linear-gradient(135deg, var(--terra), var(--honey))" }}
        >
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-hagrid)" }}
          >
            Unisciti alla waitlist
          </h3>
          <p className="mt-2 text-white/90">
            Ti avviseremo quando Hiver sarà disponibile. Niente spam.
          </p>

          <form
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
            action="https://formspree.io/f/your-id"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="La tua email"
              required
              className="w-full sm:w-80 rounded-md border-0 px-4 py-3 text-[var(--ink)] focus:outline-none"
            />
            <button
              className="rounded-md bg-black/90 px-5 py-3 font-semibold text-white hover:bg-black"
              type="submit"
            >
              Avvisami
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}