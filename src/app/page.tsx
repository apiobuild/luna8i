"use client";

import {
  BarChart3,
  Globe,
  Route,
  Server,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const contactEmail = "luluc@apiobuild.com";

const hero = {
  eyebrow: "Scalable LLM Inference Platform",
  titleLines: ["Scale intelligence,", "not the cost"],
  description:
    "Run LLM inference at scale with open-weight models. Frontier  performance at a fraction of the cost.",
  primaryCta: "Let's talk",
  secondaryCta: "Build with us",
};

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Stop overpaying frontier models for simple tasks",
    description:
      "Our complexity-based and task-aware model optimization typically gets 3-15x cheaper than frontier (OpenAI, Gemini, Anthropic) pricing.",
    icon: Route,
  },
  {
    title: "No more rate limiting",
    description:
      "Scale GPU capacity based on your volume and turnaround-time needs. Stop worrying about rate limiting and unpredictable throughput from third-party providers.",
    icon: Zap,
  },
  {
    title: "Stop building AI infrastructure yourself",
    description:
      "Our platform handles capacity planning, GPU provisioning and scaling, task orchestration, fault tolerance, and model evaluation, so you can focus on business problems, not AI infrastructure.",
    icon: Server,
  },
  {
    title: "Available as managed service or self-hosted",
    description:
      "Get up and running in minutes with our managed service or deploy onto your existing infrastructure for workloads that can't leave your environment.",
    icon: Shield,
  },
  {
    title: "See the model performance yourself",
    description:
      "Automated benchmarking of open-weight models against frontier models on your actual workload -- o you have the confidence to switch",
    icon: BarChart3,
  },
];

const icp = [
  {
    title: "Why are we paying frontier prices for simple tasks?",
    description: "Do we really need a frontier model to extract a date from a document or triage a support ticket?",
  },
  {
    title: "We're rate-limited by our provider, and it's slowing down customer onboarding.",
    description: "We just signed our largest pilot customer with 200M documents but we're not sure how quickly we can get them onboarded.",
  },
  {
    title: "It doesn't make sense for us to build our own LLM inference pipeline.",
    description: "Our core business is helping our customers move faster with AI, why are we building AI infrastructure ourselves?",
  },
  {
    title: "We have no idea how our models are actually performing in production.",
    description: "We had no choice but to switch off GPT-4o last month. Now the customers are saying the tags look different but we have no idea how to explain what's changed.",
  },
];

const about = {
  companyTitle: "Let us handle the AI infrastructure, so you can focus on the business problems.",
  companyBio: [
    "AI has fundamentally changed how we solve business problems. However, how we scale AI-based workloads hasn't changed.",
    "Product teams race to ship LLM based features and ended up building the infrastructure themselves. They ask infra and platform teams for help, but LLM based workloads is still too new and customized from their typical workloads, so it doesn't fit well into their existing tech stack and roadmap.",
    "The result? Product teams are unable to iterate quickly from the spaghetti codebase, unpredictable capacity, model performance and costs and unstable infrastructure.",
    "I'm building luna8i so that you can focus on the business problem and we handle the rest."
  ],
  photo: "/profile.png",
  bio:
    "15+ years building large-scale distributed systems for data and AI/ML workloads at Reddit, Block (fka. Square), Capital One, and Deloitte. Most recently scaling LLM inference at Reddit, serving 200k+ predictions/sec and 100MM multi-modal assets.",
  linkedin: "https://www.linkedin.com/in/luluchengengineeratheart/",
  website: "https://l1990790120.github.io",
  name: "Lulu Cheng",
};

const cta = {
  title: "Build with us",
  description:
    "We're running founder-led pilots with AI-enabled companies: 4-6 weeks, benchmarked against your current provider on your real workload with no long-term commitment. You only pay for infrastructure costs and walk away with a benchmark report on cost/model performance gains and a custom pipeline ready to deploy on your infra or run on our managed platform.",
  cta: "Let's talk",
  href: "https://calendar.app.google/ePSZJr9xcjNphjS87",
};

const navLinks = [
  { label: "Workloads", href: "#workloads" },
  { label: "About", href: "#about" },
  { label: "Build with Us", href: "#build" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight [font-family:var(--font-comfortaa)]">
          <Image src="/icon.svg" alt="" width={24} height={24} className="h-6 w-6" />
          <span className="hidden sm:inline">luna8i</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="sm:hidden border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-24 sm:py-32 border-b border-zinc-200 dark:border-zinc-800">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {hero.eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl font-semibold capitalize tracking-tight">
        {hero.titleLines.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        {hero.description}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-zinc-900 px-8 py-3 text-base font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
        >
          {hero.primaryCta}
        </a>
        <a
          href="#build"
          className="rounded-full border border-zinc-300 px-8 py-3 text-base font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900 transition-colors"
        >
          {hero.secondaryCta}
        </a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Solutions
      </h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6"
          >
            <feature.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Icp() {
  return (
    <section id="workloads" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl capitalize font-semibold text-center">
        Sounds familiar?
      </h2>
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {icp.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        About
      </h2>
      <div className="mt-10 grid sm:grid-cols-2 gap-10">
        <div>
          <p className="font-semibold">{about.companyTitle}</p>
          <div className="mt-1 space-y-4 text-zinc-600 dark:text-zinc-400">
            {about.companyBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="flex flex-col items-center gap-3 shrink-0">
            <Image
              src={about.photo}
              alt={about.name}
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover bg-zinc-200 dark:bg-zinc-800"
            />
            <div className="flex items-center gap-3">
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href={about.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal website"
                className="text-zinc-500 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold">{about.name}</p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {about.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="build" className="px-6 py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        {cta.title}
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
        {cta.description}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-zinc-900 px-8 py-3 text-base font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
        >
          {cta.cta}
        </a>
        <a
          href={`mailto:${contactEmail}`}
          className="inline-block rounded-full border border-zinc-300 dark:border-zinc-700 px-8 py-3 text-base font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          Email us
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Header />
      <Hero />
      <Icp />
      <Features />
      <About />
      <Cta />
      <footer className="px-6 py-8 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
        <Image src="/icon.svg" alt="" width={16} height={16} className="h-4 w-4" />
        © {new Date().getFullYear()} <span className="[font-family:var(--font-comfortaa)]">luna8i</span>
      </footer>
    </div>
  );
}
