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
          <p className="text-2xl text-white">
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
              className="block text-sm font-medium text-white"
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
              className="mt-2 w-full border border-[var(--background)] bg-transparent
                px-3 py-2 text-sm text-gray-100 outline-none
                focus:border-zinc-500"
              placeholder="Your name"
            />
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
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
                mt-2 w-full bg-transparent px-3 py-2 text-sm text-gray-100 
                outline-none focus:border-zinc-500 border
                ${
                  email && !isEmailValid(email)
                    ? "border-red-400"
                    : "border-[var(--background)]"
                }
              `}
              placeholder="you@example.com"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
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
              className="mt-2 w-full border border-[var(--background)] bg-transparent
                px-3 py-2 text-sm text-gray-100 outline-none
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
                className={`
                  w-44 rounded-full border border-[var(--white)] bg-transparent
                  px-5 py-3 text-sm font-semibold uppercase tracking-wide
                  text-[var(--foreground)] transition
                  cursor-pointer
                  [--secondary-light:rgba(71,85,105,0.35)]
                  hover:bg-[var(--secondary-light)] hover:text-white
                  disabled:opacity-60 disabled:cursor-not-allowed
                `}
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