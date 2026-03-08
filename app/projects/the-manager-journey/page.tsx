"use client";

import { useEffect, useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sections = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Project overview",
    title: "The Manager Journey",
    body: "A service design and UX strategy initiative focused on helping managers navigate hiring, onboarding, and team development in one coherent flow.",
  },
  {
    id: "problem",
    label: "Problem",
    eyebrow: "Defines the challenge",
    title: "Managers were juggling fragmented systems",
    body: "Critical actions lived across disconnected tools and policies. The result was slow decision-making, duplicated effort, and uncertainty at key moments.",
  },
  {
    id: "research",
    label: "Research",
    eyebrow: "Grounded in evidence",
    title: "We mapped pain points across the lifecycle",
    body: "Interviews, journey mapping, and workflow analysis surfaced repeated friction around handoffs, approvals, and unclear ownership.",
  },
  {
    id: "journey-map",
    label: "Journey map",
    eyebrow: "Visualized touchpoints",
    title: "One journey replaced many disconnected pathways",
    body: "We consolidated tasks into a single manager-centered sequence, making dependencies and decision points easy to understand.",
  },
  {
    id: "design",
    label: "Design system",
    eyebrow: "Pattern consistency",
    title: "Reusable UX patterns improved confidence",
    body: "A shared language for modules, status states, and messaging made experiences predictable and easier to scale across teams.",
  },
  {
    id: "outcomes",
    label: "Outcomes",
    eyebrow: "Measured impact",
    title: "The process became faster and clearer",
    body: "Managers completed core workflows with fewer context switches and less ambiguity, while support teams saw fewer repetitive questions.",
  },
  {
    id: "next-steps",
    label: "Next steps",
    eyebrow: "What comes next",
    title: "Continue validation and iteration",
    body: "Next phases include deeper usability testing, performance benchmarks, and expanding guidance for edge-case scenarios.",
  },
];

export default function ManagerJourneyPage() {
  const setActiveNav = () => {};
  const [, setPendingTarget] = useState<string | null>(null);
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observed = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          observed.set(entry.target.id, entry);
        }

        const visible = Array.from(observed.values())
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-20% 0px -45% 0px",
      },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#020b1f] text-zinc-100">
      <Nav
        setActive={setActiveNav}
        setPendingTarget={setPendingTarget}
      />
      <main className="pt-[60px]">
        <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="hidden h-screen px-10 pt-24 lg:sticky lg:top-0 lg:block">
            <ul className={`${dmSans.className} space-y-0`}>
              {sections.map((section, index) => {
                const isActive = activeId === section.id;
                return (
                  <li
                    key={section.id}
                    className="border-b border-zinc-200/15 py-3 text-sm uppercase tracking-[0.18em]"
                  >
                    <a
                      href={`#${section.id}`}
                      className={`flex items-center gap-3 transition ${
                        isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

          <section className="px-4 py-6 sm:px-8 lg:pr-8 lg:pl-0">
            <div className="sticky top-[60px] z-20 mb-4 overflow-x-auto border-y border-zinc-200/15 bg-[#020b1f]/95 py-2 backdrop-blur lg:hidden">
              <div className={`${dmSans.className} flex w-max items-center gap-2 px-1`}>
                {sections.map((section, index) => {
                  const isActive = activeId === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.15em] transition ${
                        isActive
                          ? "border-zinc-100/70 text-zinc-100"
                          : "border-zinc-500/40 text-zinc-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")} {section.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="border border-zinc-900/15 bg-[#f1edff] text-zinc-900">
              {sections.map((section, index) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="min-h-[92vh] scroll-mt-28 border-t border-zinc-900/15 px-6 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14"
                >
                  <div
                    className={`${dmSans.className} mb-10 flex items-center gap-3 border-b border-zinc-900/15 pb-4 text-xs uppercase tracking-[0.2em] text-zinc-700`}
                  >
                    <span className="h-2 w-2 bg-[#ff4500]" />
                    <span>{section.eyebrow}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[56%_1fr]">
                    <h2
                      className={`${playfair.className} text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl`}
                    >
                      {section.title}
                    </h2>

                    <div className={`${dmSans.className} flex gap-4 text-zinc-700`}>
                      <span className="pt-1 text-xl tabular-nums text-zinc-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="max-w-xl text-xl leading-relaxed">{section.body}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
