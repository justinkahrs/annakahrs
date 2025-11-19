"use client";

import { motion } from "framer-motion";
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
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full items-center justify-center sm:mt-6 sm:px-4"
    >
      <div
        className="
          relative isolation-auto flex w-full max-w-4xl items-center
          justify-between rounded-full px-3 py-2
        "
      >
        {/* Frosted-glass background */}
        <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-2xl" />

        <div className="relative z-10 flex w-full items-center justify-between">

          {/* --- AK LOGO --- */}
          <div
            className={`
              ${playfair.className}
              flex h-9 w-9 items-center justify-center
              rounded-full bg-[var(--primary)]
              text-white text-sm font-semibold cursor-pointer ml-2
            `}
            onClick={() => {
              const id = "home";
              const el =
                typeof document !== "undefined"
                  ? document.getElementById(id)
                  : null;
              if (el) {
                setPendingTarget("#home");
              }
              setActive("#home");
              handleScroll("#home");
            }}
          >
            AK
          </div>

          {/* --- NAV LINKS --- */}
          <ul
            className={`
              ${dmSans.className}
              flex items-center gap-1 uppercase tracking-wide
            `}
          >
            {NAV.map((item) => (
              <li key={item.href}>
                <button
                  className={`
                    relative px-4 py-2 text-xs sm:text-sm font-semibold
                    text-[var(--foreground)] transition
                    hover:text-[var(--highlight)]
                  `}
                  onClick={() => {
                    const id = item.href.replace("#", "");
                    const el =
                      typeof document !== "undefined"
                        ? document.getElementById(id)
                        : null;
                    if (el) {
                      setPendingTarget(item.href);
                    }
                    setActive(item.href);
                    handleScroll(item.href);
                  }}
                >
                  <span className="relative inline-block">
                    {item.label}

                    {/* Active underline */}
                    {active === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[var(--highlight)]"
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
        </div>
      </div>
    </nav>
  );
}

export default Nav;