import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  Send,
  CheckCircle2,
  Newspaper,
  Briefcase,
  Layers,
  FolderKanban,
  MessageSquare,
  Heart,
} from "lucide-react";
import readerSticker from "./assets/reader-sticker.png";

// ---------------------------------------------------------------------------
// Global counters — no backend required. Keys are unique so they don't
// collide with anyone else using the same free counting service.
// ---------------------------------------------------------------------------
const COUNTER_BASE = "https://countapi.mileshilliard.com/api/v1";
const VISITS_KEY = "frontend-gazette-umar-shaikh-visits-2026";
const LIKES_KEY = "frontend-gazette-umar-shaikh-likes-2026";

// ---------------------------------------------------------------------------
// THE FRONTEND GAZETTE — a newspaper-themed portfolio for Umar Shaikh
// ---------------------------------------------------------------------------

const INK = "#211F1A";
const INK_SOFT = "#514C40";
const PAPER = "#EFE9D8";
const PAPER_DIM = "#E5DDC6";
const RED = "#9C2B21";
const BLUE = "#233A5E";
const MUSTARD = "#B4841E";
const RULE = "#C7BC9E";

const experience = [
  {
    kicker: "BREAKING — REMOTE DESK, LONDON",
    role: "Frontend Engineer",
    company: "ScriptAssist",
    place: "UK, London (Remote)",
    date: "Mar 2025 — Present",
    lead: "Our correspondent reports Shaikh has spent the last year rebuilding a healthcare SaaS front end from the ground up, with a particular eye on the patients who never see the code at all.",
    bullets: [
      "Architected a reusable component library on Mantine UI and Storybook, cutting feature development time by 30% for future releases.",
      "Built dynamic theming infrastructure supporting white-label branding and light/dark modes across client instances.",
      "Translated clinical workflows into an intuitive onboarding UI with Product and UX, lifting patient onboarding completion by 20%.",
      "Optimized React state management and concurrent rendering, cutting unnecessary re-renders by 25% and improving Core Web Vitals (LCP).",
      "Integrated REST APIs and hardened state handling for complex, multi-step patient onboarding flows.",
    ],
  },
  {
    kicker: "DISPATCH — FREELANCE DESK, INDIA",
    role: "MERN Stack Developer",
    company: "Freelance",
    place: "India (Remote)",
    date: "Sep 2024 — Jan 2025",
    lead: "A five-month stretch spent shipping fast: full-stack builds and demo-ready MVPs for founders racing the clock.",
    bullets: [
      "Delivered scalable full-stack applications and rapid MVP prototypes for startups and client demos.",
      "Built frontend architecture with React, Next.js and TypeScript, prioritising performance and responsive UX.",
      "Coordinated with distributed backend teams on integrations, releases and production deployments.",
      "Built and wired RESTful APIs, authentication flows, admin dashboards and real-time features.",
      "Diagnosed and resolved production bugs while holding the line on uptime.",
    ],
  },
  {
    kicker: "FILE REPORT — NS BIGMEDIA PVT LTD.",
    role: "Web Developer",
    company: "NS Bigmedia Pvt Ltd.",
    place: "India · Intern, then part-time",
    date: "Jan 2023 — Mar 2024",
    lead: "Fourteen months on the record, three as an intern and eleven part-time — long enough to lead a migration nobody else wanted to touch.",
    bullets: [
      "Led migration of legacy frontend systems to Next.js, improving SEO performance by 60%.",
      "Built and maintained responsive production web apps with React, Next.js and TypeScript.",
      "Built reusable components and scalable UI structures to standardise consistency across projects.",
      "Translated stakeholder requirements into scalable technical solutions across multiple client projects.",
      "Took part in deployment workflows, debugging and production issue resolution.",
    ],
  },
  {
    kicker: "EARLY EDITION — TECH2EDGE LLP SOLUTIONS",
    role: "Frontend Developer Intern",
    company: "Tech2Edge LLP Solutions",
    place: "India",
    date: "Jun 2022 — Nov 2022",
    lead: "Where the record begins: responsive interfaces, cross-browser debugging, and the first bylines under his own name.",
    bullets: [
      "Developed responsive frontend interfaces with HTML, CSS, JavaScript and Bootstrap for desktop and mobile.",
      "Partnered with developers and content teams to ship UI updates and feature enhancements.",
      "Wrote technical documentation and helped maintain internal project workflows.",
      "Gained hands-on experience in responsive design, cross-browser compatibility and debugging.",
    ],
  },
];

const skillColumns = [
  {
    heading: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Mantine UI",
      "Storybook",
    ],
  },
  {
    heading: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Swagger"],
  },
  {
    heading: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    heading: "Tools & Practice",
    items: [
      "GitHub",
      "GitLab",
      "Docker",
      "AWS Basics",
      "TanStack Query",
      "Component Architecture",
    ],
  },
  {
    heading: "AI Workflow",
    items: ["Claude Code", "Cursor AI", "n8n"],
    highlight: true,
  },
];

const tickerItems = [
  "REACT ▲ 25% FEWER RE-RENDERS",
  "NEXT.JS ▲ 60% SEO GAIN",
  "MANTINE UI ▲ 30% FASTER SHIPPING",
  "ONBOARDING ▲ 20% COMPLETION",
  "TYPESCRIPT ● HOLDING STEADY",
  "CORE WEB VITALS ▲ LCP IMPROVED",
  "CLAUDE CODE ● DAILY DRIVER",
  "CURSOR AI ● DAILY DRIVER",
  "N8N ● AUTOMATING THE DESK",
  "STORYBOOK ● IN PRODUCTION",
  "TAILWIND CSS ● ACTIVE",
  "MONGODB ● STABLE",
  "POSTGRESQL ● STABLE",
];

const education = [
  {
    degree: "B.Tech, Computer Engineering",
    school: "Mumbai University",
    date: "2021 — 2024",
    note: "CGPA 7.00 / 10.00",
  },
  {
    degree: "Diploma, Information Technology",
    school: "Government Polytechnic, Mumbai",
    date: "2018 — 2021",
    note: "69.70%",
  },
];

const navLinks = [
  {
    href: "#front-page",
    id: "front-page",
    label: "Front Page",
    short: "Home",
    icon: Newspaper,
  },
  {
    href: "#dispatches",
    id: "dispatches",
    label: "Dispatches",
    short: "Work",
    icon: Briefcase,
  },
  {
    href: "#the-stack",
    id: "the-stack",
    label: "The Stack",
    short: "Stack",
    icon: Layers,
  },
  {
    href: "#bylines",
    id: "bylines",
    label: "Bylines",
    short: "Projects",
    icon: FolderKanban,
  },
  {
    href: "#letters",
    id: "letters",
    label: "Letters",
    short: "Contact",
    icon: MessageSquare,
  },
];

function SectionLabel({ children }) {
  return (
    <div
      className="uppercase tracking-[0.25em] text-xs font-semibold mb-2"
      style={{ color: RED, fontFamily: "'JetBrains Mono', monospace" }}
    >
      {children}
    </div>
  );
}

function HairlineRule({ thick }) {
  return (
    <div
      style={{
        borderTop: `${thick ? 3 : 1}px solid ${INK}`,
        opacity: thick ? 1 : 0.35,
      }}
    />
  );
}

export default function Portfolio() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    story: "",
  });
  const [sent, setSent] = useState(false);
  const [activeSection, setActiveSection] = useState("front-page");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navPressed, setNavPressed] = useState(null);

  // Circulation (global visit count) + reader stamp (global like count)
  const [visitCount, setVisitCount] = useState(null);
  const [likeCount, setLikeCount] = useState(null);
  const [liked, setLiked] = useState(false);
  const [stamping, setStamping] = useState(false);

  // Tally a visit once per browser session, then pull the running totals.
  useEffect(() => {
    const alreadyLiked = window.localStorage.getItem("fg_liked") === "true";
    setLiked(alreadyLiked);

    const alreadyCountedVisit =
      window.sessionStorage.getItem("fg_visited") === "true";
    const visitUrl = alreadyCountedVisit
      ? `${COUNTER_BASE}/get/${VISITS_KEY}`
      : `${COUNTER_BASE}/hit/${VISITS_KEY}`;

    fetch(visitUrl)
      .then((r) => r.json())
      .then((data) => {
        setVisitCount(Number(data.value));
        if (!alreadyCountedVisit)
          window.sessionStorage.setItem("fg_visited", "true");
      })
      .catch(() => {});

    fetch(`${COUNTER_BASE}/get/${LIKES_KEY}`)
      .then((r) => r.json())
      .then((data) => setLikeCount(Number(data.value)))
      .catch(() => setLikeCount(0));
  }, []);

  const handleLike = () => {
    if (liked) return;
    setLiked(true);
    window.localStorage.setItem("fg_liked", "true");
    setStamping(true);
    window.setTimeout(() => setStamping(false), 400);
    fetch(`${COUNTER_BASE}/hit/${LIKES_KEY}`)
      .then((r) => r.json())
      .then((data) => setLikeCount(Number(data.value)))
      .catch(() => setLikeCount((c) => (c ?? 0) + 1));
  };

  // Track scroll progress for the top progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setScrollProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for whichever section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
    setNavPressed(id);
    window.setTimeout(() => setNavPressed(null), 250);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.story) return;
    setSent(true);
  };

  return (
    <div
      style={{
        background: PAPER,
        color: INK,
        fontFamily: "'Source Serif 4', Georgia, serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .fg-display { font-family: 'Playfair Display', Georgia, serif; }
        .fg-mono { font-family: 'JetBrains Mono', monospace; }

        .fg-paper-texture {
          background-image:
            repeating-linear-gradient(0deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 3px);
        }

        .drop-cap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 900;
          font-size: 4.2rem;
          float: left;
          line-height: 0.78;
          padding-right: 0.35rem;
          padding-top: 0.2rem;
          color: ${RED};
        }

        .fg-link {
          text-decoration: underline;
          text-decoration-color: ${MUSTARD};
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }
        .fg-link:hover { color: ${RED}; }

        .fg-skill-chip { border-radius: 999px; }
        @media (max-width: 767px) {
          .fg-skill-chip { background: ${PAPER}; }
          .fg-skill-chip-ai { background: transparent; border: 1px solid ${INK}; }
        }

        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fg-ticker-track {
          animation: ticker-scroll 32s linear infinite;
          display: flex;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .fg-ticker-track { animation: none; }
        }

        .fg-article:hover .fg-headline { color: ${RED}; }

        input.fg-input, textarea.fg-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid ${RULE};
          font-family: 'Source Serif 4', Georgia, serif;
          padding: 0.5rem 0.1rem;
          width: 100%;
          outline: none;
          color: ${INK};
        }
        input.fg-input:focus, textarea.fg-input:focus {
          border-bottom: 2px solid ${RED};
        }
        input.fg-input::placeholder, textarea.fg-input::placeholder {
          color: ${INK_SOFT};
          opacity: 0.6;
        }

        /* Reader sticker — taped-on photo that wobbles on hover */
        .fg-sticker {
          transform: rotate(-8deg);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .fg-sticker:hover {
          transform: rotate(6deg) scale(1.08);
        }
        @keyframes fg-sticker-drift {
          0%, 100% { transform: rotate(-8deg) translateY(0px); }
          50% { transform: rotate(-5deg) translateY(-3px); }
        }
        .fg-sticker-idle { animation: fg-sticker-drift 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .fg-sticker-idle { animation: none; }
        }
/* Like stamp — a real pressable button with a hard offset shadow,
   tilted like a rubber stamp. Lifts on hover, slams flat on click. */
.fg-stamp-btn {
  border: 2px solid ${RED};
  border-radius: 3px;
  transform: rotate(-3deg);
  box-shadow: 4px 4px 0 0 ${RED};
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease;
}
.fg-stamp-btn:not(:disabled):hover {
  transform: rotate(-3deg) translate(-2px, -2px);
  box-shadow: 6px 6px 0 0 ${RED};
}
.fg-stamp-btn:not(:disabled):active {
  transform: rotate(-3deg) translate(4px, 4px);
  box-shadow: 0 0 0 0 ${RED};
}
.fg-stamp-btn-pressed {
  cursor: default;
  transform: rotate(-3deg) translate(4px, 4px) !important;
  box-shadow: 0 0 0 0 ${RED} !important;
}
@keyframes fg-stamp-down {
  0% { transform: scale(1.7) rotate(-16deg); opacity: 0; box-shadow: 0 0 0 0 ${RED}; }
  55% { transform: scale(0.95) rotate(-3deg) translate(4px, 4px); opacity: 1; box-shadow: 0 0 0 0 ${RED}; }
  100% { transform: scale(1) rotate(-3deg) translate(4px, 4px); opacity: 1; box-shadow: 0 0 0 0 ${RED}; }
}
.fg-stamp-hit { animation: fg-stamp-down 0.35s ease-out; }
      `}</style>

      <div className="fg-paper-texture">
        {/* Scroll progress — reads like a printing press feed line */}
        <div
          className="fixed top-0 left-0 h-[3px] z-50"
          style={{
            width: `${scrollProgress}%`,
            background: RED,
            transition: "width 0.1s linear",
          }}
        />

        {/* ---------------- NAV ---------------- */}
        <header
          className="sticky top-0 z-40"
          style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}
        >
          <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
            <a
              href="#front-page"
              onClick={(e) => {
                e.preventDefault();
                jumpTo("#front-page");
              }}
              className="fg-display font-bold text-base sm:text-lg tracking-tight active:scale-95 transition-transform"
              style={{ color: INK }}
            >
              The Frontend Gazette
            </a>
            <nav className="hidden md:flex items-center gap-6 fg-mono text-xs uppercase tracking-widest">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    jumpTo(l.href);
                  }}
                  className="fg-link"
                  style={activeSection === l.id ? { color: RED } : undefined}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#letters"
                onClick={(e) => {
                  e.preventDefault();
                  jumpTo("#letters");
                }}
                className="px-3 py-1.5 font-semibold active:scale-95 transition-transform"
                style={{ background: INK, color: PAPER }}
              >
                Hire Him
              </a>
            </nav>
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 active:scale-90 transition-transform"
              style={{ background: INK, color: PAPER, borderRadius: "999px" }}
              onClick={() => jumpTo("#letters")}
              aria-label="Jump to contact"
            >
              <Mail size={16} />
            </button>
          </div>
        </header>

        {/* ---------------- MASTHEAD ---------------- */}
        <div className="max-w-6xl mx-auto px-5 pt-8">
          <div
            className="flex flex-wrap justify-between items-end gap-2 fg-mono text-[11px] uppercase tracking-widest pb-3"
            style={{ color: INK_SOFT }}
          >
            <span>Monday, 10 August 2026</span>
            <span>Vol. IV · No. 43 · Remote Edition</span>
            <span>Render conditions: clear · 60fps · zero console errors</span>
          </div>
          <HairlineRule thick />
          <div className="text-center py-6">
            <h1
              className="fg-display font-black tracking-tight"
              style={{
                fontSize: "clamp(2.6rem, 8vw, 5.2rem)",
                color: INK,
                lineHeight: 0.95,
              }}
            >
              THE FRONTEND GAZETTE
            </h1>
            <p
              className="fg-mono text-xs md:text-sm uppercase tracking-[0.3em] mt-3"
              style={{ color: RED }}
            >
              Dispatches from the Component Desk · Est. 2022
            </p>
          </div>
          <HairlineRule thick />
          <div
            className="flex flex-wrap justify-between gap-2 fg-mono text-[11px] uppercase tracking-widest py-3"
            style={{ color: INK_SOFT }}
          >
            <span>Price: One Code Review</span>
            <span>Mumbai, India · Ships Worldwide, Remote-First</span>
            <span>
              Circulation:{" "}
              {visitCount === null
                ? "counting…"
                : `${visitCount.toLocaleString()} copies printed`}
            </span>
          </div>
          <HairlineRule />
        </div>

        {/* ---------------- FRONT PAGE / HERO ---------------- */}
        <section
          id="front-page"
          className="max-w-6xl mx-auto px-5 py-10 md:py-14 scroll-mt-20"
        >
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <SectionLabel>
                Front Page — Filed Under: Open to Work
              </SectionLabel>
              <h2
                className="fg-display font-bold"
                style={{
                  fontSize: "clamp(1.9rem, 4vw, 3rem)",
                  lineHeight: 1.05,
                  color: INK,
                }}
              >
                Umar Shaikh, frontend engineer, on shipping components that
                <em style={{ color: RED }}> hold up in the field.</em>
              </h2>
              <p
                className="fg-mono text-xs uppercase tracking-widest mt-4 mb-5"
                style={{ color: INK_SOFT }}
              >
                By The Engineering Desk · Filed from Mumbai, working remote with
                a London team
              </p>
              <p
                className="drop-cap text-lg leading-relaxed"
                style={{ color: INK }}
              >
                Three years into the beat, Mr. Shaikh has made a habit of owning the
                whole front end, architecture, state, performance, and the
                deploy pipeline underneath it, across SaaS, healthcare, and
                full-stack builds. Sources close to his GitHub describe a
                developer who reaches for React, Next.js and TypeScript by
                default, and who has twice been called in to lead a legacy
                migration nobody else wanted on their desk.
              </p>
              <p className="leading-relaxed mt-4" style={{ color: INK_SOFT }}>
                Currently filing from ScriptAssist, a UK-based healthcare SaaS,
                where he is rebuilding patient onboarding flows and a
                white-label component system used across client instances.
                Before that: freelance MVPs, a Next.js migration that lifted SEO
                by 60%, and an internship where the debugging never really
                stopped.
              </p>
              <a
                href="#dispatches"
                onClick={(e) => {
                  e.preventDefault();
                  jumpTo("#dispatches");
                }}
                className="inline-flex items-center gap-2 mt-6 font-semibold fg-mono text-xs uppercase tracking-widest fg-link active:scale-95 transition-transform"
              >
                Read the full record <ArrowRight size={14} />
              </a>
            </div>

            <aside
              style={{ borderLeft: `1px solid ${RULE}` }}
              className="pl-6 relative"
            >
              {/* Reader sticker — a little taped-on clipping */}
              <img
                src={readerSticker}
                alt=""
                aria-hidden="true"
                className="fg-sticker fg-sticker-idle hidden md:block absolute -top-3 -right-2 w-14 h-auto drop-shadow-lg select-none pointer-events-none"
                style={{ pointerEvents: "auto" }}
              />
              <SectionLabel>At a Glance</SectionLabel>
              <ul className="space-y-4 fg-mono text-xs">
                {[
                  ["Experience", "3+ years, 4 postings"],
                  ["Currently", "Frontend Engineer, ScriptAssist (UK, remote)"],
                  ["Specialty", "React · Next.js · TypeScript"],
                  ["Notable gain", "+30% faster feature delivery"],
                  ["Notable gain", "+20% onboarding completion"],
                  ["Notable gain", "+60% SEO after migration"],
                ].map(([k, v], i) => (
                  <li key={i}>
                    <div
                      className="uppercase tracking-widest"
                      style={{ color: MUSTARD }}
                    >
                      {k}
                    </div>
                    <div
                      className="mt-1"
                      style={{
                        color: INK,
                        fontFamily: "'Source Serif 4', serif",
                      }}
                    >
                      {v}
                    </div>
                  </li>
                ))}
              </ul>
              <HairlineRule />
              <div
                className="mt-4 space-y-2 fg-mono text-xs"
                style={{ color: INK_SOFT }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={13} /> Mumbai, India
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} /> umarshaikhshaikh7@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} /> +91 90042 50688
                </div>
              </div>
              <HairlineRule />
              <button
                onClick={handleLike}
                disabled={liked}
                className={`fg-stamp-btn mt-5 inline-flex items-center gap-2 px-4 py-2.5 fg-mono text-[11px] font-bold uppercase tracking-widest ${liked ? "fg-stamp-btn-pressed fg-stamp-hit" : ""}`}
                style={{
                  borderColor: RED,
                  color: liked ? PAPER : RED,
                  background: liked ? RED : PAPER,
                }}
                aria-pressed={liked}
                aria-label="Stamp this story with your approval"
              >
                <Heart
                  size={14}
                  fill={liked ? PAPER : "none"}
                  strokeWidth={2.5}
                />
                {liked ? "Stamped" : "Stamp of Approval"}
                <span style={{ opacity: 0.75 }}>
                  · {likeCount === null ? "…" : likeCount.toLocaleString()}
                </span>
              </button>
            </aside>
          </div>
        </section>

        {/* ---------------- TICKER (signature element) ---------------- */}
        <div
          style={{
            background: INK,
            color: PAPER,
            borderTop: `3px solid ${RED}`,
            borderBottom: `3px solid ${RED}`,
          }}
          className="overflow-hidden py-2.5"
        >
          <div className="fg-ticker-track fg-mono text-xs md:text-sm tracking-wider">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="px-6 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ---------------- DISPATCHES (Experience) ---------------- */}
        <section
          id="dispatches"
          className="max-w-6xl mx-auto px-5 py-12 md:py-16 scroll-mt-20"
        >
          <SectionLabel>The Evidence Log</SectionLabel>
          <h2
            className="fg-display font-bold text-3xl md:text-4xl mb-1"
            style={{ color: INK }}
          >
            Dispatches
          </h2>
          <p
            className="fg-mono text-xs uppercase tracking-widest mb-8"
            style={{ color: INK_SOFT }}
          >
            Four postings on the record, 2022 to present
          </p>
          <HairlineRule thick />
          <div>
            {experience.map((job, i) => (
              <article
                key={i}
                className="fg-article py-8"
                style={{ borderBottom: `1px solid ${RULE}` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <p
                      className="fg-mono text-[10px] uppercase tracking-widest"
                      style={{ color: RED }}
                    >
                      {job.kicker}
                    </p>
                    <p
                      className="fg-mono text-xs uppercase tracking-widest mt-2"
                      style={{ color: INK_SOFT }}
                    >
                      {job.date}
                    </p>
                    <p
                      className="fg-mono text-xs mt-1"
                      style={{ color: INK_SOFT }}
                    >
                      {job.place}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <h3
                      className="fg-headline fg-display font-bold text-xl md:text-2xl"
                      style={{ color: INK }}
                    >
                      {job.role}{" "}
                      <span style={{ color: INK_SOFT, fontWeight: 500 }}>
                        — {job.company}
                      </span>
                    </h3>
                    <p className="italic mt-2 mb-4" style={{ color: INK_SOFT }}>
                      {job.lead}
                    </p>
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 leading-relaxed">
                          <span style={{ color: MUSTARD }}>—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- THE STACK (Skills) ---------------- */}
        <section
          id="the-stack"
          className="scroll-mt-20"
          style={{
            background: PAPER_DIM,
            borderTop: `1px solid ${RULE}`,
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
            <SectionLabel>Market Report</SectionLabel>
            <h2
              className="fg-display font-bold text-3xl md:text-4xl mb-1"
              style={{ color: INK }}
            >
              The Stack
            </h2>
            <p
              className="fg-mono text-xs uppercase tracking-widest mb-8"
              style={{ color: INK_SOFT }}
            >
              Instruments on the desk, sorted by section
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-8 md:gap-8">
              {skillColumns.map((col, i) => (
                <div
                  key={i}
                  className={col.highlight ? "p-3 -m-1" : ""}
                  style={
                    col.highlight
                      ? {
                          border: `1px dashed ${MUSTARD}`,
                          borderRadius: "0.5rem",
                        }
                      : undefined
                  }
                >
                  <h3
                    className="fg-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-2.5 md:mb-3 pb-2"
                    style={{
                      color: col.highlight ? MUSTARD : RED,
                      borderBottom: `2px solid ${INK}`,
                    }}
                  >
                    {col.heading}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:block md:space-y-1.5">
                    {col.items.map((s, j) => (
                      <span
                        key={j}
                        className={`fg-skill-chip md:block text-[11px] sm:text-xs md:text-sm px-2 py-1 md:px-0 md:py-0${
                          col.highlight ? " fg-skill-chip-ai" : ""
                        }`}
                        style={{ color: INK }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p
              className="fg-mono text-[10px] uppercase tracking-widest mt-8 max-w-md"
              style={{ color: INK_SOFT }}
            >
              Increasingly on the record: pairing with Claude Code and Cursor AI
              for daily development, and wiring workflow automation in n8n.
            </p>
          </div>
        </section>

        {/* ---------------- BYLINES (Projects) ---------------- */}
        <section
          id="bylines"
          className="max-w-6xl mx-auto px-5 py-12 md:py-16 scroll-mt-20"
        >
          <SectionLabel>Feature Byline</SectionLabel>
          <h2
            className="fg-display font-bold text-3xl md:text-4xl mb-8"
            style={{ color: INK }}
          >
            Selected Work
          </h2>
          <HairlineRule thick />
          <div className="grid md:grid-cols-5 gap-8 py-8">
            <div
              className="md:col-span-2 flex items-center justify-center fg-display font-black text-center p-8"
              style={{
                background: INK,
                color: PAPER,
                fontSize: "1.6rem",
                lineHeight: 1.15,
                minHeight: 220,
              }}
            >
              PET24-7.COM
              <br />
              <span
                className="fg-mono text-xs font-normal tracking-widest block mt-3"
                style={{ color: MUSTARD }}
              >
                EXHIBIT A · JULY 2023
              </span>
            </div>
            <div className="md:col-span-3">
              <p
                className="fg-mono text-[11px] uppercase tracking-widest mb-2"
                style={{ color: RED }}
              >
                Freelance · Full-Stack Platform
              </p>
              <h3
                className="fg-display font-bold text-2xl mb-3"
                style={{ color: INK }}
              >
                A veterinary booking platform, built solo
              </h3>
              <p className="leading-relaxed mb-3">
                Built end to end for a freelance client: a full-stack veterinary
                appointment booking platform on Next.js, TypeScript, Node.js and
                MongoDB. Patient and appointment management workflows were built
                responsive-first, with reusable components and a scalable
                architecture meant to outlast the first release.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: INK_SOFT }}>
                Focus areas: performance tuning, cross-browser consistency, and
                REST API integrations that kept the frontend and backend talking
                cleanly under real booking traffic.
              </p>
              <div className="flex flex-wrap gap-2 fg-mono text-[10px] uppercase tracking-widest">
                {["Next.js", "TypeScript", "Node.js", "MongoDB"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1"
                    style={{ border: `1px solid ${INK}`, color: INK }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- CLASSIFIEDS (Education) ---------------- */}
        <section
          style={{
            borderTop: `1px solid ${RULE}`,
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div className="max-w-6xl mx-auto px-5 py-10">
            <SectionLabel>Classifieds</SectionLabel>
            <h2
              className="fg-display font-bold text-2xl mb-6"
              style={{ color: INK }}
            >
              Education, Filed for the Record
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 fg-mono text-xs">
              {education.map((ed, i) => (
                <div
                  key={i}
                  className="p-4"
                  style={{ border: `1px dashed ${INK_SOFT}` }}
                >
                  <p
                    className="uppercase tracking-widest"
                    style={{ color: RED }}
                  >
                    {ed.date}
                  </p>
                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: INK,
                      fontFamily: "'Source Serif 4', serif",
                    }}
                  >
                    {ed.degree}
                  </p>
                  <p className="mt-1" style={{ color: INK_SOFT }}>
                    {ed.school}
                  </p>
                  <p className="mt-1" style={{ color: MUSTARD }}>
                    {ed.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- LETTERS (Contact) ---------------- */}
        <section
          id="letters"
          className="max-w-6xl mx-auto px-5 py-12 md:py-16 scroll-mt-20 pb-28 md:pb-16"
        >
          <SectionLabel>Submit a Tip</SectionLabel>
          <h2
            className="fg-display font-bold text-3xl md:text-4xl mb-1"
            style={{ color: INK }}
          >
            Letters to the Editor
          </h2>
          <p
            className="leading-relaxed mt-3 mb-8 max-w-xl"
            style={{ color: INK_SOFT }}
          >
            A role in mind, a project to scope, or just a good question about
            React rendering — write it up and it'll get a reply, usually within
            a day.
          </p>
          <div className="grid md:grid-cols-5 gap-10">
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
              {sent ? (
                <div
                  className="flex items-start gap-3 p-4"
                  style={{ border: `1px solid ${INK}` }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: RED, flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <p className="fg-display font-bold" style={{ color: INK }}>
                      Letter received.
                    </p>
                    <p className="text-sm mt-1" style={{ color: INK_SOFT }}>
                      It's on the desk. For a faster reply, email directly at{" "}
                      <a
                        href="mailto:umarshaikhshaikh7@gmail.com"
                        className="fg-link"
                      >
                        umarshaikhshaikh7@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="fg-mono text-[10px] uppercase tracking-widest"
                        style={{ color: INK_SOFT }}
                      >
                        Your Name
                      </label>
                      <input
                        className="fg-input"
                        placeholder="Jane Reporter"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="fg-mono text-[10px] uppercase tracking-widest"
                        style={{ color: INK_SOFT }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="fg-input"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="fg-mono text-[10px] uppercase tracking-widest"
                      style={{ color: INK_SOFT }}
                    >
                      Subject
                    </label>
                    <input
                      className="fg-input"
                      placeholder="Frontend role, freelance build, a question..."
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="fg-mono text-[10px] uppercase tracking-widest"
                      style={{ color: INK_SOFT }}
                    >
                      The Story
                    </label>
                    <textarea
                      className="fg-input"
                      rows={4}
                      placeholder="Tell him what you're building..."
                      value={form.story}
                      onChange={(e) =>
                        setForm({ ...form, story: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 fg-mono text-xs uppercase tracking-widest font-semibold active:scale-95 transition-transform"
                    style={{ background: INK, color: PAPER }}
                  >
                    Send the Letter <Send size={13} />
                  </button>
                </>
              )}
            </form>

            <aside
              className="md:col-span-2 pl-0 md:pl-8"
              style={{ borderLeft: "none" }}
            >
              <div
                className="md:border-l pl-0 md:pl-8"
                style={{ borderColor: RULE }}
              >
                <SectionLabel>The Desk</SectionLabel>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: INK }}
                >
                  Mumbai, India — working AEST-to-IST hours with international,
                  remote-first teams.
                </p>
                <div className="space-y-3 fg-mono text-xs">
                  <a
                    href="mailto:umarshaikhshaikh7@gmail.com"
                    className="flex items-center gap-2 fg-link"
                    style={{ color: INK }}
                  >
                    <Mail size={14} /> umarshaikhshaikh7@gmail.com
                  </a>
                  <a
                    href="tel:+919004250688"
                    className="flex items-center gap-2 fg-link"
                    style={{ color: INK }}
                  >
                    <Phone size={14} /> +91 90042 50688
                  </a>
                  <a
                    href="https://linkedin.com/in/umar-shaikh-5318bb183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 fg-link"
                    style={{ color: INK }}
                  >
                    <Linkedin size={14} /> linkedin.com/in/umar-shaikh
                  </a>
                  <a
                    href="https://github.com/umar-webdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 fg-link"
                    style={{ color: INK }}
                  >
                    <Github size={14} /> github.com/umar-webdev
                  </a>
                  <a
                    href="https://umar-shaikh.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 fg-link"
                    style={{ color: INK }}
                  >
                    <ExternalLink size={14} /> umar-shaikh.vercel.app
                  </a>
                </div>
                <HairlineRule />
                <p
                  className="fg-mono text-xs uppercase tracking-widest mt-4"
                  style={{ color: MUSTARD }}
                >
                  Availability
                </p>
                <p className="text-sm mt-1" style={{ color: INK }}>
                  Open to frontend / product engineering roles and select
                  freelance builds.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer
          style={{ background: INK, color: PAPER }}
          className="mt-6 pb-24 md:pb-0"
        >
          <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-8">
            <div>
              <p className="fg-display font-bold text-lg">
                The Frontend Gazette
              </p>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "#BEB89F" }}
              >
                The personal record of Umar Shaikh, frontend engineer. Set in
                Playfair Display and Source Serif, printed digitally, filed from
                Mumbai.
              </p>
            </div>
            <div className="fg-mono text-xs uppercase tracking-widest space-y-2">
              <p style={{ color: MUSTARD }}>Sections</p>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block hover:underline"
                  style={{ color: "#DAD4BC" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="fg-mono text-xs uppercase tracking-widest space-y-2">
              <p style={{ color: MUSTARD }}>Wire Services</p>
              <a
                href="https://github.com/umar-webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
                style={{ color: "#DAD4BC" }}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/umar-shaikh-5318bb183"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
                style={{ color: "#DAD4BC" }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:umarshaikhshaikh7@gmail.com"
                className="block hover:underline"
                style={{ color: "#DAD4BC" }}
              >
                Email
              </a>
            </div>
          </div>
          <div
            style={{ borderTop: "1px solid #3B3830" }}
            className="text-center py-4 fg-mono text-[10px] uppercase tracking-widest"
          >
            © 2026 The Frontend Gazette · Umar Shaikh · Case Closed, Next One
            Filed Soon
          </div>
        </footer>

        {/* ---------------- FLOATING MOBILE NAV ---------------- */}
        <nav
          className="md:hidden fixed left-3 right-3 z-50 flex items-stretch justify-between"
          style={{
            bottom: "max(0.75rem, env(safe-area-inset-bottom))",
            background: INK,
            borderRadius: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            padding: "0.4rem",
          }}
          aria-label="Section navigation"
        >
          {navLinks.map((l) => {
            const Icon = l.icon;
            const isActive = activeSection === l.id;
            return (
              <button
                key={l.href}
                onClick={() => jumpTo(l.href)}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-2xl transition-all duration-150"
                style={{
                  background: isActive ? PAPER : "transparent",
                  color: isActive ? RED : "#B9B29A",
                  transform: navPressed === l.id ? "scale(0.9)" : "scale(1)",
                }}
                aria-current={isActive ? "true" : undefined}
                aria-label={l.label}
              >
                <Icon size={18} strokeWidth={isActive ? 2.4 : 2} />
                <span
                  className="fg-mono uppercase tracking-wide"
                  style={{ fontSize: "9px" }}
                >
                  {l.short}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
