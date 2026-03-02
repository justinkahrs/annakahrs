"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import handleScroll from "@/utils/handleScroll";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type NavItem = {
  label: string;
  href: string;
};

type BrandNavItem = {
  label: string;
  blurb: string;
  href: string;
  icon: string;
};

const NAV: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "https://blog.annakahrs.com" },
];

const BRAND_NAV: BrandNavItem[] = [
  {
    label: "Anna Kahrs Portfolio",
    blurb: "Main site for UX work, case studies, and featured projects.",
    href: "#home",
    icon: "AC",
  },
  {
    label: "Work in Practice",
    blurb: "A blog with practical UX notes, process write-ups, and ideas.",
    href: "https://blog.annakahrs.com",
    icon: "WP",
  },
];

interface NavProps {
  active: string;
  setActive: (href: string) => void;
  setPendingTarget: (href: string | null) => void;
}

function Nav({ active, setActive, setPendingTarget }: NavProps) {
  const [open, setOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const brandMenuRef = useRef<HTMLDivElement | null>(null);
  const brandCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!brandMenuRef.current?.contains(target)) {
        setBrandOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    return () => {
      if (brandCloseTimerRef.current) {
        window.clearTimeout(brandCloseTimerRef.current);
      }
    };
  }, []);

  const openBrandMenu = () => {
    if (brandCloseTimerRef.current) {
      window.clearTimeout(brandCloseTimerRef.current);
      brandCloseTimerRef.current = null;
    }
    setBrandOpen(true);
  };

  const closeBrandMenuSoon = () => {
    if (brandCloseTimerRef.current) {
      window.clearTimeout(brandCloseTimerRef.current);
    }
    brandCloseTimerRef.current = window.setTimeout(() => {
      setBrandOpen(false);
      brandCloseTimerRef.current = null;
    }, 120);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("http")) {
      setBrandOpen(false);
      return window.open(href, "_blank");
    }
    const id = href.replace("#", "");
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;

    if (el) {
      setPendingTarget(href);
    }
    setActive(href);
    handleScroll(href);
    setOpen(false);
    setBrandOpen(false);
  };

  const handleHomeClick = () => {
    const el =
      typeof document !== "undefined" ? document.getElementById("home") : null;

    if (el) {
      setPendingTarget("#home");
    }
    setActive("#home");
    handleScroll("#home");
    setOpen(false);
    setBrandOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-80 h-[60px] bg-[#f4f3ec]">
      <div
        className="relative z-10 flex h-full w-full max-w-[1920px] mx-auto items-center
          justify-between px-6"
      >
        <div
          ref={brandMenuRef}
          className="relative flex items-center gap-1.5"
          onMouseEnter={openBrandMenu}
          onMouseLeave={closeBrandMenuSoon}
        >
          {/* AK LOGO (flush left) */}
          <button
            type="button"
            className={`${playfair.className} flex items-center justify-center w-9
              aspect-square rounded-full bg-(--primary) text-white text-sm
              font-semibold cursor-pointer`}
            onClick={handleHomeClick}
            aria-label="Go to home"
          >
            AK
          </button>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full
              text-zinc-800/75 hover:text-zinc-900
              transition-colors duration-150 opacity-100 outline-none ring-0"
            aria-label="Toggle brand menu"
            aria-expanded={brandOpen}
            onMouseEnter={openBrandMenu}
            onClick={() => setBrandOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className={`h-4 w-4 transition-transform duration-200 ${brandOpen ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <AnimatePresence>
            {brandOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
                className="absolute left-0 top-[3.1rem] w-[22rem] rounded-2xl border
                  border-zinc-900/10 bg-[#f4f3ec] p-2 shadow-xl shadow-zinc-900/10"
                onMouseEnter={openBrandMenu}
                onMouseLeave={closeBrandMenuSoon}
              >
                {BRAND_NAV.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="flex w-full items-start gap-3 rounded-xl p-3 text-left
                      hover:bg-zinc-900/5"
                  >
                    <span
                      className={`${playfair.className} mt-0.5 inline-flex h-9 w-9 shrink-0
                        items-center justify-center rounded-full bg-zinc-900 text-xs
                        font-semibold text-white`}
                    >
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span className={`${dmSans.className} block text-sm font-semibold text-zinc-900`}>
                        {item.label}
                      </span>
                      <span className={`${dmSans.className} mt-1 block text-xs leading-relaxed text-zinc-600`}>
                        {item.blurb}
                      </span>
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP NAV (right aligned) */}
        <ul
          className={`${dmSans.className} hidden lg:flex items-center gap-1
            uppercase tracking-wide ml-auto`}
        >
          {NAV.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="relative px-4 py-2 text-xs sm:text-sm font-semibold
                  text-zinc-900/90 hover:text-(--highlight) transition"
                onClick={() => handleNavClick(item.href)}
              >
                <span className="relative inline-flex items-center gap-1">
                  {item.label}
                  {item.href.startsWith("http") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 opacity-100"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  )}
                  {active === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 w-full
                        origin-left bg-(--highlight)"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER (right aligned) */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center
            rounded-full p-2 text-zinc-900/90 hover:text-zinc-900 hover:bg-zinc-900/10
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-zinc-900/40 ml-auto"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            className="lg:hidden fixed top-0 bottom-0 w-full h-screen bg-[#f4f3ec]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <div
              className="px-6 pt-24 pb-12 bg-[#f4f3ec]"
              onClick={(event) => event.stopPropagation()}
            >
              <ul
                className={`${dmSans.className} flex flex-col items-center py-24
                gap-6 tracking-[0.2em] bg-[#f4f3ec]`}
              >
                {NAV.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="uppercase text-lg font-semibold text-zinc-900/90
                        hover:text-(--highlight) transition p-8 flex items-center gap-2"
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                      {item.href.startsWith("http") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4 opacity-100"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
