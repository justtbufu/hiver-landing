import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[color:var(--pink)]">
        <h1
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          L’app per genitori{" "}
          <span className="text-[color:var(--terra)]">organizzati</span>
        </h1>
        <p
          className="mt-4 max-w-xl text-lg text-white/90"
          style={{ fontFamily: "var(--font-salted)" }}
        >
          Ti avviseremo quando Hiver sarà disponibile. Niente spam.
        </p>
      </section>

      {/* Cos’è Hiver */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Cos’è Hiver
        </h2>
        <p className="mt-2 text-base leading-relaxed">
          Hiver è un’app pensata per aiutare i genitori a organizzare la vita
          familiare in modo semplice e divertente.
        </p>
      </section>

      {/* Features */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Cosa puoi fare con Hiver
        </h2>
        <ul className="mt-6 space-y-6">
          {[
            {
              title: "Gestire attività e compiti",
              description:
                "Organizza tutte le attività familiari in un unico posto.",
            },
            {
              title: "Condividere calendari",
              description:
                "Tieniti aggiornato sugli impegni di tutti i membri della famiglia.",
            },
            {
              title: "Ricevere promemoria",
              description:
                "Non dimenticare mai più una scadenza o un evento importante.",
            },
          ].map(({ title, description }) => (
            <li key={title} className="p-4 border rounded-lg">
              <h3
                className="mt-4 text-lg font-semibold"
                style={{ fontFamily: "var(--font-hagrid)" }}
              >
                {title}
              </h3>
              <p className="mt-2 text-base">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Waitlist */}
      <section className="px-4 py-16 max-w-4xl mx-auto text-center">
        <h3
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Unisciti alla waitlist
        </h3>
        <p
          className="mt-2 text-white/90"
          style={{ fontFamily: "var(--font-salted)" }}
        >
          Ti avviseremo quando Hiver sarà disponibile. Niente spam.
        </p>
      </section>
    </>
  );
}
