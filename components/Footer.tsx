import { useMemo } from "react";

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative py-10 backdrop-blur">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-[52vh] w-screen -translate-x-1/2 opacity-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(24,24,27,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 42%, black 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 42%, black 100%)",
          animation: "footer-graph-fade-in 1.2s ease-out 0.2s forwards",
        }}
      />
      <div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center
          justify-center gap-6 px-6 text-center"
      >
        <p className="text-sm text-zinc-600">
          © {year} Made thoughtfully by Anna Kahrs. See, users do scroll.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
