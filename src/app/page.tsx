export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600" />
          <span className="text-xl font-bold">Hiver</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Funzioni</a>
          <a href="#waitlist" className="hover:underline">Waitlist</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          L’app per genitori organizzati
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Calendario condiviso, promemoria intelligenti e liste per la vita familiare.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition"
          >
            Iscriviti alla waitlist
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            Scopri le funzioni
          </a>
        </div>

        {/* box finto per lo screenshot */}
        <div className="mt-14 rounded-2xl border bg-white/80 p-4 shadow">
          <div className="h-64 rounded-xl bg-gray-100 grid place-items-center text-gray-400">
            Screenshot app
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-24 grid gap-6 sm:grid-cols-3">
        {[
          ["Calendario condiviso", "Impegni di tutti in un’unica vista."],
          ["Promemoria smart", "Notifiche per le cose davvero importanti."],
          ["Liste & note", "Compiti, spesa, medicine: tutto organizzato."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow transition">
            <div className="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center font-bold">✓</div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="bg-transparent">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">Unisciti alla waitlist</h2>
          <p className="mt-2 text-gray-600">Ti avviseremo quando Hiver sarà disponibile.</p>

          {/* Sostituisci action con il tuo endpoint (Formspree o simili) */}
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
              className="w-full sm:w-80 rounded-md border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500">
              Iscrivimi
            </button>
          </form>

          <p className="mt-3 text-xs text-gray-500">
            Niente spam. Cancellazione con un clic.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500">
        <div className="flex items-center justify-between">
          <span>© {new Date().getFullYear()} Hiver</span>
          <div className="flex gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Contatti</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
