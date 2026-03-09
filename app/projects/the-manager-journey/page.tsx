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
    <div className="min-h-screen bg-[var(--project-bg)] text-zinc-100">
      <Nav
        setActive={setActiveNav}
        setPendingTarget={setPendingTarget}
      />
      <main className="pt-[60px]">
        <div className="mx-auto w-full max-w-[1920px] px-6 py-4 sm:px-10">
          <nav
            aria-label="Breadcrumb"
            className={`${dmSans.className} flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-zinc-300/75 sm:text-xs`}
          >
            <a
              href="/"
              className="inline-flex items-center transition hover:text-zinc-100"
              aria-label="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 10.5 8.25-6.75 8.25 6.75M5.25 9.75V20.25h13.5V9.75M9.75 20.25v-6h4.5v6" />
              </svg>
            </a>
            <span className="text-zinc-500">/</span>
            <span aria-current="page" className="text-zinc-100">
              The Manager Journey
            </span>
          </nav>
        </div>
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8 flex min-h-[78vh] w-screen items-center justify-center overflow-hidden bg-[#1a2028] px-6 py-20 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(92%_56%_at_50%_100%,rgba(77,187,255,0.36),rgba(77,187,255,0.10)_34%,rgba(176,255,225,0.16)_56%,rgba(26,32,40,0.92)_76%,rgba(26,32,40,1)_88%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_32%_at_50%_36%,rgba(210,236,255,0.28),rgba(210,236,255,0.06)_58%,transparent_75%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_28%_at_24%_50%,rgba(195,255,225,0.22),rgba(195,255,225,0.05)_60%,transparent_78%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(146,219,255,0.24)_0%,transparent_24%,transparent_78%,rgba(170,255,227,0.20)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-[20%] w-[24%] rotate-[8deg] bg-[linear-gradient(to_bottom,rgba(230,244,255,0.26),rgba(230,244,255,0.04)_55%,transparent)] blur-2xl" />
          <div className="pointer-events-none absolute inset-y-0 right-[20%] w-[24%] -rotate-[8deg] bg-[linear-gradient(to_bottom,rgba(219,255,238,0.24),rgba(219,255,238,0.04)_55%,transparent)] blur-2xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-screen"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.20'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative mx-auto max-w-5xl text-center">
            <p
              className={`${dmSans.className} mb-7 text-[11px] uppercase tracking-[0.22em] text-zinc-300/75 sm:text-xs`}
            >
              The Manager Journey
            </p>
            <h1
              className={`${playfair.className} text-5xl leading-[0.95] text-[#f1edff] sm:text-6xl lg:text-8xl`}
            >
              Designing the manager experience
              <br />
              <span className={`${dmSans.className} text-[0.92em] font-light tracking-[-0.015em]`}>
                across hiring, onboarding, and team growth
              </span>
            </h1>
            <p
              className={`${dmSans.className} mx-auto mt-8 max-w-3xl text-base leading-relaxed text-zinc-200/85 sm:text-lg`}
            >
              A service design direction that aligned systems, decisions, and handoffs into one clearer path for managers.
            </p>
          </div>
        </section>

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
            <div className="sticky top-[60px] z-20 mb-4 overflow-x-auto border-y border-zinc-200/15 bg-[color:var(--project-bg)]/95 py-2 backdrop-blur lg:hidden">
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

            <div className="border border-zinc-900/15 bg-[var(--background)] text-zinc-900">
              {sections.map((section, index) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="min-h-[92vh] scroll-mt-28 border-t border-zinc-900/15 px-6 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14"
                >
                  <div
                    className={`${dmSans.className} mb-10 flex items-center gap-3 border-b border-zinc-900/15 pb-4 text-xs uppercase tracking-[0.2em] text-zinc-700`}
                  >
                    <span className="h-2 w-2 bg-(--highlight)" />
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
