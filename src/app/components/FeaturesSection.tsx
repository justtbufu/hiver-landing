"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [active, setActive] = useState<string | null>(FEATURES[0].id);
  const current = FEATURES.find((x) => x.id === active) || null;

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
            const selected = active === f.id;
            return (
              <div key={f.id} className="group">
                <button
                  type="button"
                  onClick={() => setActive(selected ? null : f.id)}
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

                {/* Preview sotto la card su mobile/tablet */}
                <div
                  className={[
                    "lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)]",
                    selected ? "max-h-[1200px] mt-3 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="rounded-2xl bg-white p-2 ring-1 ring-gray-200">
                    <Image
                      src={f.shot}
                      alt={f.shotAlt}
                      width={1080}
                      height={1920}
                      className="h-auto w-full rounded-xl bg-gray-100"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preview a destra su desktop */}
        <div className="relative z-0 hidden lg:block">
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