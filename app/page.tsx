"use client";
import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App() {
  const [active, setActive] = useState<string>("#home");
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const updateActiveFromScroll = () => {
    const ids = ["home", "skills", "experience", "projects", "contact"] as const;
    // If a click initiated the scroll, freeze the active state to that target
    // and ignore all scroll-based calculations until the scroll ends.
    if (pendingTarget) {
      if (active !== pendingTarget) setActive(pendingTarget);
      return;
    }
    if (window.scrollY <= 100) {
      setActive("#home");
      return;
    }
    // Bottom-of-page guard to ensure the last section becomes active.
    const doc = document.documentElement;
    const atBottom =
      Math.ceil(window.innerHeight + window.scrollY) >= doc.scrollHeight;
    if (atBottom) {
      setActive("#contact");
      return;
    }
    // Normal behavior: choose the section closest to a mid-viewport anchor.
    const targetY = window.innerHeight * 0.2;
    let bestId: string | null = null;
    let bestDist = Infinity;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestId = id;
      }
    }
    if (bestId) setActive(`#${bestId}`);
  };
  useMotionValueEvent(scrollY, "change", () => {
    updateActiveFromScroll();
  });
  useEffect(() => {
    updateActiveFromScroll();
  }, []);
  useEffect(() => {
    if (!pendingTarget) return;
    const onScrollEnd = () => {
      setPendingTarget(null);
      window.removeEventListener("scrollend", onScrollEnd as EventListener);
    };
    // Use 'scrollend' when available; keep a short fallback so we always release.
    window.addEventListener("scrollend", onScrollEnd as EventListener, {
      once: true,
    });
    const timeout = window.setTimeout(() => {
      setPendingTarget(null);
      window.removeEventListener("scrollend", onScrollEnd as EventListener);
    }, 1600);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scrollend", onScrollEnd as EventListener);
    };
  }, [pendingTarget]);
  return (
    <div className="antialiased">
      <Nav
        active={active}
        setActive={setActive}
        setPendingTarget={setPendingTarget}
      />
      <main
        className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-32
          px-6 pt-36 pb-24 sm:pt-40"
      >
        <Home />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
