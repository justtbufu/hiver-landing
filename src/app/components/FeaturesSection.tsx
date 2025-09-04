"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

type Feature = {
  id: string;
  title: string;
  desc: string;
  shot: string; // path immagine di anteprima
  shotAlt: string;
};

const FEATURES: Feature[] = [
  {
    id: "profile",
    title: "Profilo e rete",
    desc: "Crea il tuo profilo e trova mamme e papà affini vicino a te: una rete reale, non di filtri.",
    shot: "/screens/screen2.png",
    shotAlt: "Profilo utente e rete di genitori su Hiver",
  },
  {
    id: "events",
    title: "Eventi tra genitori",
    desc: "Crea o unisciti a passeggiate, merende, incontri al parco: momenti semplici per conoscersi dal vivo.",
    shot: "/screens/screen2.png",
    shotAlt: "Eventi tra genitori su Hiver",
  },
  {
    id: "map",
    title: "Mappa di quartiere",
    desc: "Trova genitori vicino a te e luoghi utili: pediatri, asili, negozi family-friendly.",
    shot: "/screens/screen1.png",
    shotAlt: "Mappa e genitori vicini su Hiver",
  },
  {
    id: "feed",
    title: "Feed maternità",
    desc: "Consigli e contenuti selezionati per affrontare i primi mesi con più serenità.",
    shot: "/screens/screen3.png",
    shotAlt: "Feed con notizie utili su Hiver",
  },
  {
    id: "market",
    title: "Marketplace circolare",
    desc: "Vendi o scambia ciò che non usi più: una mano all'ambiente e al portafoglio.",
    shot: "/screens/screen1.png",
    shotAlt: "Marketplace di Hiver",
  },
  {
    id: "assistant",
    title: "Assistente personale AI",
    desc: "Fai domande e ottieni risposte su dubbi e problemi reali. L’assistente ricorda le tue informazioni e ti offre consigli su misura.",
    shot: "/screens/screen3.png",
    shotAlt: "Assistente personale AI su Hiver",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState<string | null>(null);
  const current = FEATURES.find((x) => x.id === active) || null;

  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)'); // < lg
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
    };
  }, []);

  // Sync default selection based on viewport: on mobile keep none selected,
  // on desktop select the first feature for the right-side preview.
  useEffect(() => {
    if (isMobile) {
      setActive(null);
    } else {
      setActive((prev) => prev ?? FEATURES[0].id);
    }
  }, [isMobile]);

  // --- Mobile bottom‑sheet drag logic & background lock ---
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0); // positive = dragging down; negative = pulling up a bit
  const startYRef = useRef<number | null>(null);

  // lock background scroll when the sheet is open
  useEffect(() => {
    if (!modalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [modalOpen]);

  const MAX_PULL_UP = 40; // allow a small elastic pull up
  const CLOSE_THRESHOLD = 120; // drag down to close

  const closeSheet = useCallback(() => {
    setModalOpen(false);
    setActive(null); // ensure mobile icons reset to '+' when closed
    setDragY(0);
    startYRef.current = null;
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startYRef.current = e.touches[0].clientY;
    setDragY(0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startYRef.current == null) return;
    const y = e.touches[0].clientY;
    let dy = y - startYRef.current; // + down, - up
    if (dy < -MAX_PULL_UP) dy = -MAX_PULL_UP; // little elastic effect up
    setDragY(dy);
    // keep touch scroll captured by the sheet
    e.preventDefault();
  };
  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragY > CLOSE_THRESHOLD) {
      closeSheet();
    } else {
      setDragY(0);
    }
    startYRef.current = null;
  };

  const handleSelect = useCallback((id: string) => {
    setActive(id);
    if (isMobile) {
      setModalOpen(true);
    }
  }, [isMobile]);

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 scroll-mt-24">
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
                      <h3 className="text-lg font-semibold text-gray-900">
                        {f.title}
                      </h3>
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
              <FadeIn key={current.id}>
                <Image
                  src={current.shot}
                  alt={current.shotAlt}
                  width={1080}
                  height={1920}
                  className="h-auto w-full rounded-xl bg-gray-100"
                  priority
                />
              </FadeIn>
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
            'fixed inset-0 z-[95000] lg:hidden transition-opacity',
            modalOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
          aria-hidden={!modalOpen}
        >
          {/* Backdrop */}
          <div
            className={[
              'absolute inset-0 bg-black/50 transition-opacity',
              modalOpen ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            onClick={closeSheet}
            onTouchMove={(e) => e.preventDefault()}
          />

          {/* Sheet */}
          <div
            className={[
              'absolute inset-x-0 bottom-0 h-[88vh] rounded-t-3xl bg-white shadow-2xl ring-1 ring-black/5 touch-pan-y',
              isDragging ? 'transition-none' : 'transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)]',
            ].join(' ')}
            style={{ transform: modalOpen ? `translateY(${dragY}px)` : 'translateY(100%)' }}
            role="dialog"
            aria-modal="true"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <div className="h-1.5 w-12 rounded-full bg-gray-300 mx-auto" />
              <button
                type="button"
                aria-label="Chiudi anteprima"
                onClick={closeSheet}
                className="absolute right-4 top-3 rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
              >
                Chiudi
              </button>
            </div>

            <div className="px-4">
              <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--font-hagrid)' }}>
                {current?.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{current?.desc}</p>

              <div className="mt-3 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm overflow-hidden">
                <div className="relative h-[70vh] w-full">
                  {FEATURES.map((f) => (
                    <Image
                      key={f.id}
                      src={f.shot}
                      alt={f.shotAlt}
                      fill
                      priority
                      className={[
                        'absolute inset-0 object-contain transition-opacity duration-300 ease-[cubic-bezier(.22,.61,.36,1)]',
                        'origin-bottom scale-[0.85]',
                        active === f.id ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                      sizes="100vw"
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

/** Semplice fade-in con CSS (senza dipendenze) */
function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[fadeIn_.4s_ease]">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
}