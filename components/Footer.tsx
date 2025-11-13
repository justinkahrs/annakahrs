import { useMemo } from "react";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="py-10 backdrop-blur">
      <div
        className="mx-auto flex w-full max-w-4xl flex-col items-center
          justify-center gap-6 px-6 text-center"
      >
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/justinkahrs"
            aria-label="GitHub"
            className="rounded-full bg-green-300 p-2 hover:bg-zinc-200/60"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-kahrs"
            aria-label="LinkedIn"
            className="rounded-full bg-green-300 p-2 hover:bg-zinc-200/60"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-zinc-200">
          © {year} Made thoughtfully by Justin Kahrs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
