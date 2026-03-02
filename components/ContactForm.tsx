"use client";

import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const isFormValid =
    name.trim().length > 0 &&
    isEmailValid(email) &&
    message.trim().length > 0 &&
    status !== "loading";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch (err) {
      console.error({ err });
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {status === "success" ? (
        <div
          className="mt-4 bg-transparent p-4 text-center text-gray-100
            sm:col-span-2"
        >
          <p className="text-2xl text-zinc-900">
            Thanks! I will be in contact soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full border border-zinc-900/10 bg-white/40
                px-3 py-2 text-sm text-zinc-900 outline-none
                focus:border-zinc-500"
              placeholder="Your name"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`
                mt-2 w-full bg-white/40 px-3 py-2 text-sm text-zinc-900 
                outline-none focus:border-zinc-500 border
                ${email && !isEmailValid(email)
                  ? "border-red-400"
                  : "border-zinc-900/10"
                }
              `}
              placeholder="you@example.com"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full border border-zinc-900/10 bg-white/40
                px-3 py-2 text-sm text-zinc-900 outline-none
                focus:border-zinc-500"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            {/* SINGLE SECONDARY BUTTON — MATCHES HOME.TSX */}
            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-48 rounded-full bg-zinc-900 px-6 py-4
                    text-sm font-semibold uppercase tracking-wide text-white
                    transition hover:bg-zinc-800 cursor-pointer shadow-lg shadow-zinc-900/10
                    disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">
                {errorMsg || "Something went wrong."}
              </p>
            )}
          </div>
        </form>
      )}
    </>
  );
}

export default ContactForm;