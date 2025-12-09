"use client";

import { useState, useEffect } from "react";
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
  { label: "Blog", href: "https://blog.annakahrs.com" },
];

interface NavProps {
  active: string;
  setActive: (href: string) => void;
  setPendingTarget: (href: string | null) => void;
}

function Nav({ active, setActive, setPendingTarget }: NavProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('http')){
      return window.open(href, '_blank');
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
      className="fixed top-0 inset-x-0 z-80 bg-black/30 backdrop-blur-2xl
        border-b border-white/10"
    >
      <div
        className="relative z-10 flex w-full items-center justify-between px-4
          py-3"
      >
        {/* AK LOGO (flush left) */}
        <button
          type="button"
          className={`${playfair.className} flex items-center justify-center w-9
            aspect-square rounded-full bg-(--primary) text-white text-sm
            font-semibold cursor-pointer`}
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
                className="relative px-4 py-2 text-xs sm:text-sm font-semibold
                  text-white/90 hover:text-(--highlight) transition"
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
            rounded-full p-2 text-white/90 hover:text-white hover:bg-white/10
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-white/40 ml-auto"
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
            className="lg:hidden fixed top-0 bottom-0 w-full h-screen bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <div
              className="px-6 pt-24 pb-12 bg-black"
              onClick={(event) => event.stopPropagation()}
            >
              <ul
                className={`${dmSans.className} flex flex-col items-center py-24
                gap-6 tracking-[0.2em] bg-black`}
              >
                {NAV.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="uppercase text-lg font-semibold text-white/90
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
