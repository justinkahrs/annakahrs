"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
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

type ProjectNavGroup = {
  heading: string;
  items: Array<{ label: string; href: string; comingSoon?: boolean }>;
};



const PROJECT_NAV: ProjectNavGroup[] = [
  {
    heading: "UX Research",
    items: [{ label: "The Manager Journey", href: "", comingSoon: true }],
  },
  {
    heading: "Visual Design",
    items: [
      {
        label: "Digital A11y Chatbot",
        href: "",
        comingSoon: true,
      },
      {
        label: "Staff Portal",
        href: "",
        comingSoon: true,
      },
    ],
  },
];

interface NavProps {
  setActive?: (href: string) => void;
  setPendingTarget?: (href: string | null) => void;
}

function Nav({ setActive, setPendingTarget }: NavProps) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [open, setOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const projectMenuRef = useRef<HTMLDivElement | null>(null);
  const projectCloseTimerRef = useRef<number | null>(null);

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
      if (!projectMenuRef.current?.contains(target)) {
        setProjectOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    return () => {
      if (projectCloseTimerRef.current) {
        window.clearTimeout(projectCloseTimerRef.current);
      }
    };
  }, []);



  const openProjectMenu = () => {
    if (projectCloseTimerRef.current) {
      window.clearTimeout(projectCloseTimerRef.current);
      projectCloseTimerRef.current = null;
    }
    setProjectOpen(true);
  };

  const closeProjectMenuSoon = () => {
    if (projectCloseTimerRef.current) {
      window.clearTimeout(projectCloseTimerRef.current);
    }
    projectCloseTimerRef.current = window.setTimeout(() => {
      setProjectOpen(false);
      projectCloseTimerRef.current = null;
    }, 120);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("http")) {
      return window.open(href, "_blank");
    }
    if (href.startsWith("/")) {
      setOpen(false);
      setProjectOpen(false);
      window.location.assign(href);
      return;
    }
    if (href.startsWith("#") && pathname !== "/") {
      setOpen(false);
      setProjectOpen(false);
      window.location.assign(`/${href}`);
      return;
    }
    const id = href.replace("#", "");
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;

    if (el) {
      setPendingTarget?.(href);
    }
    setActive?.(href);
    handleScroll(href);
    setOpen(false);
    setProjectOpen(false);
  };

  const handleHomeClick = () => {
    if (pathname !== "/") {
      setOpen(false);
      setProjectOpen(false);
      window.location.assign("/");
      return;
    }
    const el =
      typeof document !== "undefined" ? document.getElementById("home") : null;

    if (el) {
      setPendingTarget?.("#home");
    }
    setActive?.("#home");
    handleScroll("#home");
    setOpen(false);
    setProjectOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-100 h-[60px] border-b sm:border-b-0 ${
        isProjectPage
          ? "bg-(--project-bg) border-zinc-200/15"
          : "bg-(--background) border-zinc-900/10"
      }`}
    >
      <div
        className="relative z-10 flex h-full w-full max-w-[1920px] mx-auto items-center
          justify-between px-6"
      >
        <div className="relative flex items-center gap-3">
          {/* AK LOGO (flush left) */}
          <button
            type="button"
            className={`${playfair.className} flex items-center justify-center w-9
              aspect-square rounded-full bg-(--primary) text-white text-sm
              font-semibold cursor-pointer shrink-0`}
            onClick={handleHomeClick}
            aria-label="Go to home"
          >
            AK
          </button>

          <div
            className={`hidden h-6 w-px lg:block ${isProjectPage ? "bg-zinc-200/20" : "bg-zinc-900/15"}`}
          />

          <button
            type="button"
            className={`${dmSans.className} hidden lg:inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold tracking-[0.12em] transition ${
              isProjectPage
                ? "text-zinc-100/90 hover:text-white"
                : "text-zinc-900/90 hover:text-(--highlight)"
            }`}
            onClick={() => (pathname === "/" ? handleHomeClick() : handleNavClick("/"))}
          >
            Home
          </button>

          <div
            ref={projectMenuRef}
            className="relative hidden lg:flex items-center"
            onMouseEnter={openProjectMenu}
            onMouseLeave={closeProjectMenuSoon}
          >
            <button
              type="button"
              className={`${dmSans.className} inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold tracking-[0.12em] transition ${
                isProjectPage
                  ? "text-zinc-100/90 hover:text-white"
                  : "text-zinc-900/90 hover:text-(--highlight)"
              }`}
              aria-label="Toggle projects menu"
              aria-expanded={projectOpen}
              onMouseEnter={openProjectMenu}
              onClick={() => setProjectOpen((prev) => !prev)}
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className={`h-4 w-4 transition-transform duration-200 ${projectOpen ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <AnimatePresence>
              {projectOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className={`absolute left-0 top-[3.1rem] w-84 rounded-2xl border p-3 shadow-xl ${
                    isProjectPage
                      ? "border-zinc-200/15 bg-(--project-bg) shadow-black/40"
                      : "border-zinc-900/10 bg-(--background) shadow-zinc-900/10"
                  }`}
                  onMouseEnter={openProjectMenu}
                  onMouseLeave={closeProjectMenuSoon}
                >
                  {PROJECT_NAV.map((group) => (
                    <div key={group.heading} className="px-1 py-1">
                      <p
                        className={`${dmSans.className} mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                          isProjectPage ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        {group.heading}
                      </p>
                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => {
                              if (!item.comingSoon) handleNavClick(item.href);
                            }}
                            disabled={item.comingSoon}
                            className={`${dmSans.className} block w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                              isProjectPage
                                ? "text-zinc-100 hover:bg-white/10"
                                : "text-zinc-900 hover:bg-zinc-900/5"
                            } ${item.comingSoon ? "opacity-60 cursor-not-allowed hover:bg-transparent" : ""}`}
                          >
                            {item.label}
                            {item.comingSoon ? " (Coming Soon)" : ""}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className={`${dmSans.className} hidden lg:inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold tracking-[0.12em] transition ${
              isProjectPage
                ? "text-zinc-100/90 hover:text-white"
                : "text-zinc-900/90 hover:text-(--highlight)"
            }`}
            onClick={() => handleNavClick("/blog")}
          >
            Blog
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/annakahrs/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${dmSans.className} inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold tracking-[0.12em] transition ${
              isProjectPage
                ? "text-zinc-100/90 hover:text-white"
                : "text-zinc-900/90 hover:text-(--highlight)"
            }`}
          >
            LinkedIn
          </a>

          <button
            type="button"
            className={`${dmSans.className} inline-flex rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition cursor-pointer ${
              isProjectPage
                ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                : "bg-zinc-900 hover:bg-zinc-800 shadow-zinc-900/10"
            }`}
            onClick={() => handleNavClick("/contact")}
          >
            Contact
          </button>
        </div>

        {/* MOBILE HAMBURGER (right aligned) */}
        <button
          type="button"
          className="lg:hidden relative z-110 inline-flex items-center justify-center
            rounded-full p-2 hover:text-zinc-900 hover:bg-zinc-900/10
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-zinc-900/40 ml-auto"
          style={{
            color: isProjectPage && !open ? "rgb(244 244 245 / 0.9)" : undefined,
          }}
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
            className={`lg:hidden fixed inset-0 w-full h-screen z-90 backdrop-blur-md ${
              isProjectPage ? "bg-(--project-bg)/95" : "bg-(--background)/95"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <div
              className="flex h-full w-full flex-col items-center justify-center px-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col items-center gap-7 sm:gap-9 -mt-16 sm:-mt-24">
                <button
                  type="button"
                  className={`${playfair.className} text-4xl sm:text-6xl font-semibold transition hover:text-(--highlight) ${
                    isProjectPage ? "text-zinc-100" : "text-zinc-900"
                  }`}
                  onClick={() => handleHomeClick()}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={`${playfair.className} text-4xl sm:text-6xl font-semibold transition hover:text-(--highlight) ${
                    isProjectPage ? "text-zinc-100" : "text-zinc-900"
                  }`}
                  onClick={() => handleNavClick("#projects")}
                >
                  Projects
                </button>
                <button
                  type="button"
                  className={`${playfair.className} text-4xl sm:text-6xl font-semibold transition hover:text-(--highlight) ${
                    isProjectPage ? "text-zinc-100" : "text-zinc-900"
                  }`}
                  onClick={() => handleNavClick("/blog")}
                >
                  Blog
                </button>
                <a
                  href="https://www.linkedin.com/in/annakahrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${playfair.className} text-4xl sm:text-6xl font-semibold transition hover:text-(--highlight) ${
                    isProjectPage ? "text-zinc-100" : "text-zinc-900"
                  }`}
                >
                  LinkedIn
                </a>
                <button
                  type="button"
                  className={`${dmSans.className} mt-10 rounded-xl px-7 py-3 text-lg font-semibold transition cursor-pointer ${
                    isProjectPage
                      ? "bg-white text-zinc-900 hover:bg-zinc-100 shadow-xl shadow-black/20"
                      : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/10"
                  }`}
                  onClick={() => handleNavClick("/contact")}
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
