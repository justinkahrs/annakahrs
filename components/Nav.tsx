"use client";

import { useState } from "react";
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

const NAV: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  active: string;
  setActive: (href: string) => void;
  setPendingTarget: (href: string | null) => void;
}

function Nav({ active, setActive, setPendingTarget }: NavProps) {
  const [open, setOpen] = useState(false);

  const handleInternalNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;

    if (el) {
      setPendingTarget(href);
    }
    setActive(href);
    handleScroll(href);
    setOpen(false);
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
  };

  return (
    <nav
  className="
    fixed top-0 inset-x-0 z-50
    bg-black/30 backdrop-blur-2xl border-b border-white/10
  "
>
  <div
    className="
      flex w-full items-center justify-between
      px-4 py-3
    "
  >
    {/* AK LOGO (flush left) */}
    <button
      type="button"
      className={`${playfair.className} flex items-center justify-center
        w-9 aspect-square rounded-full bg-[var(--primary)] text-white
        text-sm font-semibold cursor-pointer`}
      onClick={handleHomeClick}
    >
      AK
    </button>

    {/* DESKTOP NAV (right aligned) */}
    <ul
      className={`${dmSans.className} hidden lg:flex items-center gap-1
        uppercase tracking-wide ml-auto`}
    >
      {NAV.map((item) => (
        <li key={item.label}>
          <button
            type="button"
            className="
              relative px-4 py-2 text-xs sm:text-sm
              font-semibold text-white/90 hover:text-[var(--highlight)]
              transition
            "
            onClick={() => handleInternalNavClick(item.href)}
          >
            <span className="relative inline-block">
              {item.label}
              {active === item.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] w-full
                    origin-left bg-[var(--highlight)]"
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
      className="
        lg:hidden inline-flex items-center justify-center
        rounded-full p-2 text-white/90 hover:text-white hover:bg-white/10
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-white/40 ml-auto
      "
      onClick={() => setOpen((prev) => !prev)}
    >
      {open ? (
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
        </svg>
      )}
    </button>
  </div>

  {/* FULL-SCREEN MOBILE OVERLAY (unchanged) */}
  { /* ... keep the overlay code you have now ... */ }
</nav>
  );
}

export default Nav;