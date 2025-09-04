"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

// --- Types & data ---
type Feature = {
  id: string;
  title: string;
  desc: string;
  shot: string; // path in /public or remote URL
  shotAlt: string;
};

const FEATURES: Feature[] = [
  {
    id: "profile",
    title: "Profilo e rete",
    desc:
      "Crea il tuo profilo e trova mamme e papà affini vicino a te: una rete reale, non di filtri.",
    shot: "/shots/profile.jpg",
    shotAlt: "Schermata profilo Hiver",
  },
  {
    id: "events",
    title: "Eventi tra genitori",
    desc:
      "Crea o unisciti a passeggiate, merende, incontri al parco: momenti semplici per conoscersi dal vivo.",
    shot: "/shots/events.jpg",
    shotAlt: "Schermata eventi",
  },
  {
    id: "map",
    title: "Mappa di quartiere",
    desc:
      "Trova genitori vicini a te e luoghi utili: pediatri, asili, negozi family‑friendly.",
    shot: "/shots/map.jpg",
    shotAlt: "Schermata mappa",
  },
  {
    id: "feed",
    title: "Feed maternità",
    desc:
      "Consigli e contenuti selezionati per affrontare i primi mesi con più serenità.",
    shot: "/shots/feed.jpg",
    shotAlt: "Schermata feed",
  },
  {
    id: "market",
    title: "Marketplace circolare",
    desc:
      "Vendi o scambia ciò che non usi più: una mano all'ambiente e al portafoglio.",
    shot: "/shots/market.jpg",
    shotAlt: "Schermata marketplace",
  },
  {
    id: "assistant",
    title: "Assistente personale AI",
    desc:
      "Fai domande e ottieni risposte su dubbi e problemi reali. L'assistente ricorda le tue informazioni e ti offre consigli su misura.",
    shot: "/shots/assistant.jpg",
    shotAlt: "Schermata assistente AI",
  },
];

export default function FeaturesSection() {
  // --- responsive: detect mobile (Tailwind lg=1024px) ---
  useEffect(() => {
    // Listen for viewport changes (lg breakpoint: 1024px)
    const mql = window.matchMedia("(max-width: 1023px)");

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // set initial state
    setIsMobile(mql.matches);

    // modern API only (no deprecated addListener/removeListener)
    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // --- selection ---
  const [active, setActive] = useState<Feature["id"]>(FEATURES[0].id);
  const current = FEATURES.find((f) => f.id === active)!;

  // --- mobile bottom sheet state ---
  const [modalOpen, setModalOpen] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);

  const backdropOpacity = modalOpen ? Math.max(0, 1 - dragY / 180) : 0;

  const handleSelect = (id: Feature["id"]) => {
    setActive(id);
    if (isMobile) {
      setModalOpen(true);
      setDragY(0);
    }
  };

  const closeSheet = useCallback(() => {
    setModalOpen(false);
    setDragY(0);
  }, []);

  // drag handlers (with small upward overscroll & magnetic close)
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta >= 0) setDragY(delta); // dragging down
    else setDragY(Math.max(-40, delta / 3)); // a bit of elastic up
  };
  const onTouchEnd = () => {
    setIsDragging(false);
    const CLOSE = 120; // px to close
    if (dragY > CLOSE) {
      closeSheet();
    } else {
      setDragY(0);
    }
  };

  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-hagrid)" }}
        >
          Cosa puoi fare con Hiver
        </h2>
        <p className="mt-3 text-gray-600">
          Dalla conoscenza dal vivo alla mappa di quartiere: tutto ciò che serve a neo‑genitori per incontrarsi, informarsi e scambiarsi supporto.
        </p>
      </div>

      {/* layout: lista (span 2) + preview (span 1) su desktop */}
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* Lista features */}
        <div className="space-y-4 lg:col-span-2">
          {FEATURES.map((f) => {
            const selected = isMobile ? (modalOpen && active === f.id) : active === f.id;
            return (
              <div key={f.id} className="group">
                <button
                  type="button"
                  onClick={() => handleSelect(f.id)}
                  className={[
                    "w-full rounded-2xl bg-white p-5 text-left ring-1 transition cursor-pointer",
                    "ring-gray-200 hover:ring-gray-300",
                    selected ? "ring-[color:var(--terra)]/40 shadow-sm" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                      <p className="mt-1 text-gray-600">{f.desc}</p>
                    </div>
                    <span
                      className={[
                        "mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full border text-xs",
                        selected
                          ? "border-[color:var(--terra)]/50 text-[color:var(--terra)]"
                          : "border-gray-300 text-gray-400",
                      ].join(" ")}
                      aria-hidden
                    >
                      {selected ? "–" : "+"}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Preview a destra su desktop */}
        <div className="relative z-[1] hidden lg:block">
          <div className="relative z-0 rounded-2xl bg-white p-3 ring-1 ring-gray-200 shadow-sm">
            {current ? (
              <Image
                src={current.shot}
                alt={current.shotAlt}
                width={1080}
                height={1920}
                className="h-auto w-full rounded-xl bg-gray-100"
                priority
              />
            ) : (
              <div className="aspect-[9/16] w-full rounded-xl bg-gray-50" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile modal bottom sheet for previews */}
      {isMobile && (
        <div
          className={[
            "fixed inset-0 z-[95000] lg:hidden transition-opacity",
            modalOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
          aria-hidden={!modalOpen}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300 ease-[cubic-bezier(.16,1,.3,1)]"
            style={{ opacity: backdropOpacity }}
            onClick={closeSheet}
            onTouchMove={(e) => e.preventDefault()}
          />

          {/* Sheet */}
          <div
            className={[
              "absolute inset-x-2 bottom-0 h-[82vh] rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 touch-pan-y overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)] will-change-transform",
              isDragging ? "transition-none" : "transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)]",
            ].join(" ")}
            style={{ transform: modalOpen ? `translateY(${dragY}px)` : "translateY(100%)" }}
            role="dialog"
            aria-modal="true"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="sticky top-0 z-10 -mx-4 px-4 pt-3 pb-3 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
              <div className="relative flex items-center justify-center">
                <div className="h-1.5 w-12 rounded-full bg-gray-300/80" />
                <button
                  type="button"
                  aria-label="Chiudi anteprima"
                  onClick={closeSheet}
                  className="absolute right-5 top-1 rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Chiudi
                </button>
              </div>
            </div>

            <div className="px-4">
              {/* heading solo per accessibilità, non visibile */}
              <h3 className="sr-only">{current?.title}</h3>

              <div className="mt-1 overflow-hidden">
                {/* Area immagine alta per avvicinarci al 9:16 e sfruttare lo spazio disponibile */}
                <div className="relative mx-auto w-[min(92vw,420px)] aspect-[9/16]">
                  {FEATURES.map((f) => (
                    <Image
                      key={f.id}
                      src={f.shot}
                      alt={f.shotAlt}
                      fill
                      priority
                      className={[
                        "absolute inset-0 object-contain select-none transition-opacity duration-300 ease-[cubic-bezier(.16,1,.3,1)]",
                        active === f.id ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                      sizes="(max-width: 1023px) 92vw, 420px"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}