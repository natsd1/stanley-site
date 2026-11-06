"use client";

import { useId, useState } from "react";
import clsx from "clsx";
import { AlertTriangle, ArrowUpRight, Check, Copy, Loader2 } from "lucide-react";
import { site } from "@/lib/site";
import { TelegramIcon, XIcon } from "../ui/Icons";

const ENDPOINT: string = site.formEndpoint;

export const budgets = [
  "Under $1,000 / month",
  "$1,000 – $3,000 / month",
  "$3,000 – $6,000 / month",
  "$6,000+ / month",
  "One-off project",
  "Not sure yet",
];

type Fields = { name: string; email: string; project: string; budget: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "sent" | "error" | "not-connected";

const empty: Fields = { name: "", email: "", project: "", budget: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Add your name.";
  if (!f.email.trim()) e.email = "Add an email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "That email doesn't look right.";
  if (!f.project.trim()) e.project = "What's the project called?";
  if (!f.budget) e.budget = "Pick the closest range.";
  if (f.message.trim().length < 20) e.message = "A couple of sentences helps (20+ characters).";
  return e;
}

const asText = (f: Fields) =>
  `Hi Stanley,\n\nName: ${f.name}\nEmail: ${f.email}\nProject: ${f.project}\nBudget: ${f.budget}\n\n${f.message}`;

export function ContactForm() {
  const uid = useId();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    if (honeypot) return; // bot
    if (!ENDPOINT) {
      setStatus("not-connected");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, _subject: `New project enquiry: ${fields.project}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(asText(fields));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[4px] border border-accent/40 bg-surface p-8 sm:p-10" role="status">
        <span className="grid size-12 place-items-center rounded-full bg-accent text-ink">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-8 text-3xl font-semibold tracking-tight">Message received.</h2>
        <p className="mt-3 text-muted">
          Thanks, {fields.name.split(" ")[0]}. I&apos;ll reply to <span className="text-fg">{fields.email}</span>. If
          it&apos;s urgent, ping me on Telegram too.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setStatus("idle");
          }}
          className="mt-8 rounded-full border border-line-strong px-5 py-2.5 text-sm hover:border-fg"
        >
          Send another
        </button>
      </div>
    );
  }

  const input =
    "w-full rounded-[4px] border bg-surface px-4 py-3.5 text-fg placeholder:text-dim transition-colors focus:border-accent focus:outline-none";
  const field = (k: keyof Fields) => ({
    id: `${uid}-${k}`,
    name: k,
    value: fields[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
    className: clsx(input, errors[k] ? "border-red-400/70" : "border-line-strong"),
  });
  const Err = ({ k }: { k: keyof Fields }) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-2 text-sm text-red-300">
        {errors[k]}
      </p>
    ) : null;
  const Label = ({ k, children, hint }: { k: keyof Fields; children: React.ReactNode; hint?: string }) => (
    <label htmlFor={`${uid}-${k}`} className="mb-2 flex items-baseline justify-between text-sm">
      <span className="font-medium">{children}</span>
      {hint && <span className="text-xs text-dim">{hint}</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby={!ENDPOINT ? `${uid}-notice` : undefined}>
      {!ENDPOINT && status !== "not-connected" && (
        <p id={`${uid}-notice`} className="flex gap-3 rounded-[4px] border border-line bg-surface px-4 py-3 text-sm text-muted">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>
            Form delivery is still being set up. Fill it in and I&apos;ll help you send it via Telegram or X, or message me
            there directly.
          </span>
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label k="name">Name</Label>
          <input {...field("name")} type="text" autoComplete="name" placeholder="Your name" />
          <Err k="name" />
        </div>
        <div>
          <Label k="email">Email</Label>
          <input {...field("email")} type="email" autoComplete="email" inputMode="email" placeholder="you@project.xyz" />
          <Err k="email" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label k="project">Project name</Label>
          <input {...field("project")} type="text" placeholder="e.g. YourProtocol" />
          <Err k="project" />
        </div>
        <div>
          <Label k="budget">Budget range</Label>
          <div className="relative">
            <select {...field("budget")} className={clsx(field("budget").className, "appearance-none pr-10", !fields.budget && "text-dim")}>
              <option value="" disabled>
                Select a range
              </option>
              {budgets.map((b) => (
                <option key={b} value={b} className="text-fg">
                  {b}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dim" aria-hidden="true">
              ▾
            </span>
          </div>
          <Err k="budget" />
        </div>
      </div>

      <div>
        <Label k="message">
          Project description
        </Label>
        <textarea
          {...field("message")}
          rows={6}
          maxLength={2000}
          placeholder="What are you building, where are you now, and what do you want social to do for you?"
          className={clsx(field("message").className, "resize-y")}
        />
        <Err k="message" />
      </div>

      {/* Honeypot: hidden from people, tempting for bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      {status === "not-connected" && (
        <div className="rounded-[4px] border border-accent/50 bg-surface p-6" role="alert">
          <p className="flex items-center gap-2 font-medium">
            <AlertTriangle className="size-4 text-accent" aria-hidden="true" />
            Your message has not been sent.
          </p>
          <p className="mt-2 text-sm text-muted">
            The form isn&apos;t connected to an inbox yet. Copy your message and send it on Telegram or X. It&apos;s the
            fastest way to reach me anyway.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-ink hover:bg-fg"
            >
              {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              {copied ? "Copied" : "Copy message"}
            </button>
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm hover:border-fg"
            >
              <TelegramIcon className="size-4" /> Open Telegram
            </a>
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm hover:border-fg"
            >
              <XIcon className="size-4" /> DM on X
            </a>
          </div>
        </div>
      )}

      {status === "error" && (
        <p className="rounded-[4px] border border-red-400/40 bg-red-400/5 p-4 text-sm text-red-200" role="alert">
          Something went wrong sending that. Your message is still here. Try again, or reach me on Telegram at{" "}
          {site.links.telegramHandle}.
        </p>
      )}

      <div className="flex border-t border-line pt-6 sm:justify-end">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-ink transition-colors hover:bg-fg disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send project details
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
