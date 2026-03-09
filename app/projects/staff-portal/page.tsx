"use client";

import { useEffect, useState } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    title: "Staff Portal",
    body: "A unified staff portal concept that centralizes application discovery, saved tools, support resources, and internal updates in one UCSF-aligned experience.",
  },
  {
    id: "problem",
    label: "Problem",
    eyebrow: "Defines the challenge",
    title: "The legacy application was never built to scale",
    body: "The existing portal architecture could not support growing content, ownership complexity, and modern staff workflows. Fragmentation across tools was a symptom of that underlying scalability gap.",
  },
  {
    id: "goals",
    label: "Goals",
    eyebrow: "Design intent",
    title: "Make finding and using tools fast, clear, and role-aware",
    body: "The design focused on current-state utility while building toward a scalable future: reducing navigation overhead, surfacing frequently used apps, and improving self-service through strong search, filtering, and in-context details.",
  },
  {
    id: "research",
    label: "Research",
    eyebrow: "Grounded in workflows",
    title: "Task patterns shaped the information architecture",
    body: "Common staff tasks informed the content model: app metadata, categories, access requirements, ownership contacts, and high-priority tools for recurring work.",
  },
  {
    id: "discovery",
    label: "Discovery",
    eyebrow: "Cross-system search",
    title: "Global search connected apps, docs, sites, and news",
    body: "A single search layer combined application records with institutional resources, then supported filtering by source and type so users could narrow results quickly.",
  },
  {
    id: "personalization",
    label: "Personalization",
    eyebrow: "Everyday efficiency",
    title: "Saved and pinned apps created a practical home view",
    body: "Staff could save tools, pin essentials, and return to a stable launcher tailored to their routine rather than repeatedly browsing the full catalog.",
  },
  {
    id: "governance",
    label: "Governance",
    eyebrow: "Operational model",
    title: "Admin workflows enabled ongoing content quality",
    body: "An administrative dashboard supported app management, announcements, and news updates with role-based editing views for governance and scalability.",
  },
  {
    id: "outcomes",
    label: "Outcomes",
    eyebrow: "Impact",
    title: "Outcomes",
    body: "This section is in progress and will be completed as implementation milestones and validation metrics are finalized.",
    disabled: true,
  },
  {
    id: "next-steps",
    label: "Next steps",
    eyebrow: "What comes next",
    title: "Next steps",
    body: "This section is in progress and will be updated once the current phase of the Staff Portal project is complete.",
    disabled: true,
  },
];

export default function StaffPortalPage() {
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
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8 flex min-h-[78vh] w-screen items-center justify-center overflow-hidden bg-[#1d1a2b] px-6 py-20 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_58%_at_50%_100%,rgba(255,88,54,0.48),rgba(255,88,54,0.14)_34%,rgba(176,154,235,0.22)_56%,rgba(29,26,43,0.92)_76%,rgba(29,26,43,1)_88%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(52%_34%_at_50%_36%,rgba(221,204,255,0.30),rgba(221,204,255,0.06)_58%,transparent_75%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(44%_30%_at_78%_48%,rgba(181,255,232,0.20),rgba(181,255,232,0.04)_60%,transparent_78%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(190,166,255,0.26)_0%,transparent_22%,transparent_78%,rgba(255,106,73,0.20)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-[22%] w-[22%] rotate-[8deg] bg-[linear-gradient(to_bottom,rgba(236,226,255,0.28),rgba(236,226,255,0.04)_55%,transparent)] blur-2xl" />
          <div className="pointer-events-none absolute inset-y-0 right-[22%] w-[22%] -rotate-[8deg] bg-[linear-gradient(to_bottom,rgba(214,255,239,0.22),rgba(214,255,239,0.04)_55%,transparent)] blur-2xl" />
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
              Staff Portal • In Progress
            </p>
            <h1
              className={`${playfair.className} text-5xl leading-[0.95] text-[#f3ece6] sm:text-6xl lg:text-8xl`}
            >
              Rebuilding a legacy staff portal
              <br />
              <span className={`${dmSans.className} text-[0.92em] font-light tracking-[-0.015em]`}>
                for scale, clarity, and daily utility
              </span>
            </h1>
            <p
              className={`${dmSans.className} mx-auto mt-8 max-w-3xl text-base leading-relaxed text-zinc-200/85 sm:text-lg`}
            >
              A concept direction focused on modernizing an aging application while preserving the practical utility staff rely on today.
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
                      href={section.disabled ? undefined : `#${section.id}`}
                      aria-disabled={section.disabled ? "true" : undefined}
                      className={`flex items-center gap-3 transition ${
                        section.disabled
                          ? "cursor-not-allowed text-zinc-500/60"
                          : isActive
                            ? "text-zinc-100"
                            : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.label}</span>
                      {section.disabled ? (
                        <span className="rounded-full border border-zinc-400/40 px-2 py-0.5 text-[10px] tracking-[0.08em] text-zinc-400">
                          In progress
                        </span>
                      ) : null}
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
                      href={section.disabled ? undefined : `#${section.id}`}
                      aria-disabled={section.disabled ? "true" : undefined}
                      className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.15em] transition ${
                        section.disabled
                          ? "cursor-not-allowed border-zinc-600/40 text-zinc-500/70"
                          : isActive
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
                  className={`min-h-[92vh] scroll-mt-28 border-t border-zinc-900/15 px-6 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14 ${
                    section.disabled ? "opacity-70" : ""
                  }`}
                >
                  <div className="relative mb-10 w-full">
                    <div
                      className={`${dmSans.className} absolute bottom-[12px] left-0 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-zinc-600/60 sm:text-sm`}
                    >
                      <span className="h-2 w-2 bg-[#ff4500]" />
                      <span>{section.eyebrow}</span>
                      {section.disabled ? (
                        <span className="rounded-full border border-zinc-500/40 px-2 py-0.5 text-[10px] tracking-[0.08em] text-zinc-600">
                          In progress
                        </span>
                      ) : null}
                    </div>
                    <div className="w-full border-t-[3px] border-dotted border-zinc-900/10" />
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
