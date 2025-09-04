"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";

function ClientPortal({ children, containerId = "hiver-sticky-root" }: { children: React.ReactNode; containerId?: string }) {
  const elRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  if (!elRef.current && typeof document !== "undefined") {
    const existing = document.getElementById(containerId) as HTMLElement | null;
    elRef.current = existing ?? document.createElement("div");
    if (!existing) {
      elRef.current.setAttribute("id", containerId);
      document.body.appendChild(elRef.current);
    }
  }

  useEffect(() => {
    setMounted(true);
    return () => {
      if (elRef.current && elRef.current.childNodes.length === 0) {
        // leave container in place for reuse
      }
    };
  }, []);

  if (!mounted || !elRef.current) return null;
  return createPortal(children, elRef.current);
}

export default function Hero() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollHome = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-12 lg:mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F3ADC5] via-[#F5C244]/60 to-[#ABBCC9] px-8 py-16 sm:py-20 lg:py-24 shadow-sm ring-1 ring-black/5"
    >
      <ClientPortal>
        <div
          className={[
            "fixed inset-x-0 top-0 z-[99999] pointer-events-auto transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)]",
            showSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mt-2 h-14 rounded-b-2xl bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 ring-1 ring-black/5 flex items-center justify-between px-4 shadow-sm">
              <button
                type="button"
                onClick={scrollHome}
                aria-label="Torna all’inizio"
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <Image src="/logo-hiver.svg" alt="Hiver" width={100} height={100} />
              </button>
              <ul className="flex gap-6 text-sm text-gray-800">
                <li><Link href="#features" className="hover:underline">Funzioni</Link></li>
                <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="#waitlist" className="rounded-full bg-[#DC5D35] px-3 py-1.5 text-white hover:opacity-90">Waitlist</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </ClientPortal>
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
      <div ref={navRef}>
        <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between pt-1 sm:pt-2 lg:pt-3">
          <button
            type="button"
            onClick={scrollHome}
            aria-label="Torna all’inizio"
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <Image src="/logo-hiver.svg" alt="Hiver" width={120} height={120} priority />
          </button>
          <ul className="hidden gap-10 text-lg text-gray-800 sm:flex">
            <li><Link href="#features" className="hover:opacity-80">Funzioni</Link></li>
            <li><Link href="#faq" className="hover:opacity-80">FAQ</Link></li>
            <li><Link href="#waitlist" className="hover:opacity-80">Waitlist</Link></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl">
          <p className="mb-4 inline-block rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-white/70 backdrop-blur">
            Novità • Hiver arriva presto
          </p>
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-gray-900"
            style={{ fontFamily: 'var(--font-hagrid)', textWrap: 'balance' }}
          >
            <span className="block lg:whitespace-nowrap">L’app che unisce i genitori</span>
            <span className="block lg:whitespace-nowrap">per creare legami reali.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-7 text-gray-800">
            Hiver è la piattaforma che connette i genitori: crea eventi dal vivo, trova altri genitori vicino a te, scopri attività e servizi utili, leggi notizie sulla maternità e partecipa a un marketplace circolare. Tutto in un unico posto, con semplicità e calore.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#DC5D35] px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DC5D35]"
            >
              Iscriviti alla waitlist
            </Link>

            <Link
              href="/#features"
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