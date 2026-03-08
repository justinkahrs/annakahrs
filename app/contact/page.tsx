"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [, setActive] = useState<string>("#contact");
  const [, setPendingTarget] = useState<string | null>(null);

  return (
    <div className="antialiased bg-[#f1edff]">
      <Nav
        setActive={setActive}
        setPendingTarget={setPendingTarget}
      />
      <main
        className="mx-auto flex min-h-screen w-full flex-col gap-0
          px-0 pt-[60px] pb-24"
      >
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
