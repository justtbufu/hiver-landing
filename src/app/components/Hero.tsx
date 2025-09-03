import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-12 lg:mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F3ADC5] via-[#F5C244]/60 to-[#ABBCC9] px-8 py-16 sm:py-20 lg:py-24 shadow-sm ring-1 ring-black/5"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      {/* In-card navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-8 sm:py-10">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-md bg-[#6E6CF6]" aria-hidden />
          <span className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'var(--font-hagrid)' }}>Hiver</span>
        </div>
        <ul className="hidden gap-10 text-lg text-gray-800 sm:flex">
          <li><Link href="#funzioni" className="hover:opacity-80">Funzioni</Link></li>
          <li><Link href="#waitlist" className="hover:opacity-80">Waitlist</Link></li>
          <li><Link href="#faq" className="hover:opacity-80">FAQ</Link></li>
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-white/70 backdrop-blur">
            Novità • Hiver arriva presto
          </p>
          <h1
            id="hero-title"
            className="text-6xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
            style={{ fontFamily: 'var(--font-hagrid)' }}
          >
            L’app che mette d’accordo
            <span className="block">la vita di famiglia.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-7 text-gray-800">
            Calendario condiviso, promemoria intelligenti e liste.
            Tutto nello stesso posto, con un tono caldo e semplice.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#DC5D35] px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DC5D35]"
            >
              Iscriviti alla waitlist
            </Link>

            <Link
              href="/#funzioni"
              className="inline-flex items-center justify-center rounded-full border border-gray-900/10 bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400"
            >
              Scopri le funzioni
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}