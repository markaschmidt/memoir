import type { AccoladeProps } from "@/types/accolade";
import type { ProjectProps } from "@/types/project";
import type { VentureProps } from "@/types/venture";
import {
  artieLogo,
  podkasterLogo,
  reefTerminalLogo,
  triumniLogo,
  vektreLogo,
} from "@/lib/project-logos";
import { TrophyIcon } from "@/icons";

export const MARK_EMAIL = "markaaronschmidt@gmail.com";
export const MARK_DISCORD = "ardenid";

export const projects: ProjectProps[] = [
  {
    slug: "triumni",
    title: "Triumni",
    description:
      "A research project investigating balanced-ternary computing through matched binary and ternary architectures. Triumni progresses from emulation and binary-hosted prototypes to a minimal kernel and a genuinely three-state primitive computer, with reproducible experiments used to evaluate where ternary computing provides measurable advantages.",
    githubUrl: "https://github.com/markaschmidt/trinary",
    logo: triumniLogo,
    startDate: "2026-09-15",
    status: {
      milestones: [
        {
          label: "Binary reference-machine design",
          status: "completed",
          details:
            "Schematic, architecture, and breadboard design for a primitive binary comparison machine.",
        },
        {
          label: "Balanced-ternary logic core",
          status: "completed",
          details:
            "Validated ternary values, arithmetic, logic gates, conversions, and foundational three-valued operations.",
        },
        {
          label: "Ternary ISA and Rust emulator",
          status: "in-progress",
          details:
            "Instruction set, CPU state, memory model, and Rust emulator for running ternary programs.",
        },
        {
          label: "Prototype device design",
          status: "pending",
          details:
            "Schematics, BOM, and board layout for breadboard or FPGA prototype hardware to host the emulator.",
        },
        {
          label: "Prototype device assembly",
          status: "pending",
          details:
            "Physical assembly of prototype boards, wiring, and basic I/O so the emulator can run on real hardware.",
        },
        {
          label: "Emulator bring-up on prototype hardware",
          status: "pending",
          details:
            "Flash, boot, and validate the ternary emulator on prototype devices with test programs and debug interfaces.",
        },
        {
          label: "Development toolchain and binary baseline",
          status: "pending",
          details:
            "Assembler, debugger, monitor, executable format, and matched binary emulator for side-by-side testing.",
        },
        {
          label: "Experiments and automated results platform",
          status: "pending",
          details:
            "Benchmark phases, automated testing, reproducible datasets, and a dashboard for tables, graphs, and run history.",
        },
        {
          label: "Binary-hosted ternary devices",
          status: "pending",
          details:
            "Binary-hosted emulator and FPGA softcore—intermediary devices that remain physically binary while running or implementing ternary logic.",
        },
        {
          label: "Bootloader and minimal kernel",
          status: "pending",
          details:
            "Bootloader, monitor, syscalls, memory management, task execution, console I/O, and binary-peripheral drivers.",
        },
        {
          label: "Physical ternary processor prototype",
          status: "pending",
          details:
            "True three-level circuits, ternary ALU, and a small programmable processor, with matched physical experiments on cost, cycles, energy, and complexity.",
        },
        {
          label: "Results publication",
          status: "pending",
          details:
            "Source code, schematics, ISA docs, methodology, datasets, articles, videos, and formal research findings.",
        },
      ],
    },
    skills: [
      { name: "Digital logic design", category: "Hardware" },
      { name: "Computer architecture", category: "Systems" },
      { name: "Balanced-ternary systems", category: "Architecture" },
    ],
    blog: [
      {
        type: "paragraph",
        content:
          "A research project investigating balanced-ternary computing through matched binary and ternary architectures. Triumni progresses from emulation and binary-hosted prototypes to a minimal kernel and a genuinely three-state primitive computer, with reproducible experiments used to evaluate where ternary computing provides measurable advantages.",
      },
    ],
    techStack: [
      {
        name: "Balanced Ternary",
        category: "Architecture",
        notes: "Three-valued logic foundation",
      },
      {
        name: "Digital Logic",
        category: "Hardware",
        notes: "Custom binary and ternary prototypes",
      },
      {
        name: "Computer Architecture",
        category: "Systems",
        notes: "Side-by-side primitive machine design",
      },
    ],
    tags: [
      { label: "Systems", tag: true, color: "bg-stone-200/80 text-stone-900" },
      { label: "Hardware", tag: true, color: "bg-amber-100/80 text-amber-950" },
    ],
  },
  {
    slug: "podkaster",
    title: "Podkaster",
    description:
      "Agentic software for an informative media content pipeline. It ingests arXiv articles, transforms them into engaging written pieces and podcasts, and automatically publishes to Spotify, TikTok, and YouTube.",
    githubUrl: "https://github.com/markaschmidt/Podkaster",
    logo: podkasterLogo,
    startDate: "2025-08-01",
    status: {
      milestones: [
        {
          label: "Desktop shell",
          status: "completed",
          details:
            "Tauri 2 app scaffold, local workflow UI, and project structure are in place.",
        },
        {
          label: "arXiv ingestion pipeline",
          status: "completed",
          details:
            "Paper fetching, parsing, and agent prompts for article generation are working end to end.",
        },
        {
          label: "Audio generation",
          status: "pending",
          details:
            "Podcast voice synthesis and episode packaging still need tighter quality control.",
        },
        {
          label: "Multi-platform publishing",
          status: "pending",
          details:
            "Automated posting to Spotify, TikTok, and YouTube is partially implemented but not fully reliable.",
        },
      ],
    },
    skills: [
      { name: "Agentic workflows", category: "Agents" },
      { name: "Content pipeline automation", category: "Media" },
      { name: "Multi-platform distribution", category: "Media" },
    ],
    blog: [
      {
        type: "paragraph",
        content:
          "Podkaster pairs a desktop agent workflow with automated distribution. The pipeline turns dense research papers into audience-ready media — articles, audio episodes, and short-form clips — then routes each format to the platforms where it performs best.",
      },
    ],
    techStack: [
      { name: "Tauri 2", category: "Desktop", notes: "Cross-platform shell" },
      { name: "React", category: "Frontend", notes: "Dashboard UI" },
      { name: "TypeScript", category: "Language", notes: "Shared app logic" },
      { name: "Rust", category: "Backend", notes: "Native integrations" },
    ],
    tags: [
      { label: "Agentic Content Creation", tag: true, color: "bg-sky-100/80 text-sky-950" },
      { label: "AI x Digital Media", tag: true, color: "bg-violet-100/80 text-violet-950" },
    ],
  },
  {
    slug: "reef-media-browser-extension",
    title: "Reef Media Browser Extension",
    description:
      "A browser extension that brings Reef Media's misinformation analysis directly into the user's browsing flow, helping people evaluate media credibility without leaving the page they are reading.",
    githubUrl: "https://github.com/markaschmidt/Reef-Media-Browser-Plugin",
    logo: "/projects/reef-media-browser.svg",
    startDate: "2025-01-01",
    status: {
      milestones: [
        {
          label: "Extension scaffold",
          status: "completed",
          details:
            "Manifest, content-script injection, and popup shell are implemented.",
        },
        {
          label: "Inline analysis UI",
          status: "completed",
          details:
            "Users can trigger Reef Media checks from the active page without switching tabs.",
        },
        {
          label: "Reef API integration",
          status: "completed",
          details:
            "Production auth, rate limits, and response caching are wired into the extension.",
        },
      ],
    },
    skills: [
      { name: "Browser extension development", category: "Platform" },
      { name: "In-page UX integration", category: "Frontend" },
      { name: "Media verification", category: "Trust & Safety" },
    ],
    blog: [
      {
        type: "paragraph",
        content:
          "The extension surfaces Reef Media's trust-and-safety tooling at the point of consumption. Instead of switching contexts to verify a claim, users get analysis inline as they browse news, social posts, and other media.",
      },
    ],
    techStack: [
      { name: "Browser Extension", category: "Platform", notes: "In-page analysis UI" },
      { name: "JavaScript", category: "Language", notes: "Extension runtime" },
      { name: "Reef Media API", category: "Backend", notes: "Media verification" },
    ],
    tags: [
      { label: "AI x Digital Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
      { label: "Trust & Safety", tag: true, color: "bg-teal-100/80 text-teal-950" },
    ],
  },
  {
    slug: "reef-terminal",
    title: "Reef Terminal",
    description:
      "First-place Hack in Paradise project built solo in Miami. An enterprise platform for affordably managing misinformation mitigation — case triage, bad-actor investigation, and AI-assisted enforcement — designed to pair with Reef Media's consumer-facing media analyzer.",
    githubUrl: "https://github.com/markaschmidt/Reef-Terminal",
    logo: reefTerminalLogo,
    startDate: "2026-02-01",
    endDate: "2026-02-01",
    status: {
      milestones: [
        {
          label: "Hack in Paradise demo",
          status: "completed",
          details:
            "Built solo at Hack in Paradise in Miami and won first place against 18 teams, most with 2–4 members.",
        },
        {
          label: "Trust & Safety operations dashboard",
          status: "completed",
          details:
            "Live panel for triaging flagged content, investigating bad actors, and applying graduated enforcement policies.",
        },
        {
          label: "AI-assisted case triage",
          status: "completed",
          details:
            "Gemini-powered recommendations with policy actions, rationales, confidence scores, and escalation paths for analysts.",
        },
      ],
    },
    skills: [
      { name: "Trust & Safety operations", category: "Trust & Safety" },
      { name: "Enterprise SaaS", category: "Product" },
      { name: "AI-assisted enforcement", category: "Agents" },
      { name: "Rapid hackathon prototyping", category: "Product" },
    ],
    blog: [
      {
        type: "paragraph",
        content:
          "Reef Terminal is the enterprise counterpart to Reef Media's consumer media analyzer. Trust & Safety teams use it to investigate flagged misinformation, assess bad-actor threat profiles, and apply graduated enforcement — from content advisories and fact-check labels through reach reduction, monetisation suspension, and bans.",
      },
      {
        type: "paragraph",
        content:
          "Built at Hack in Paradise in Miami, the project won first place while competing solo against 18 teams, most with two to four members. The live dashboard at panel.reefmedia.ai combines case triage, actor investigation, analytics, and Gemini-driven triage recommendations in a single workspace.",
      },
    ],
    techStack: [
      { name: "Jaclang", category: "Backend", notes: "Walker API and auth" },
      { name: "React", category: "Frontend", notes: "Trust & Safety dashboard" },
      { name: "TypeScript", category: "Language", notes: "Shared client logic" },
      { name: "Google Cloud Firestore", category: "Database", notes: "Cases and actor data" },
      { name: "Google Gemini", category: "AI", notes: "Case triage and assessments" },
      { name: "Docker", category: "DevOps", notes: "Containerised deployment" },
    ],
    tags: [
      {
        label: "Hackathon Winner",
        tag: true,
        color: "bg-amber-100/80 text-amber-950",
        icon: <TrophyIcon className="size-3.5" />,
      },
      { label: "Trust & Safety", tag: true, color: "bg-teal-100/80 text-teal-950" },
      { label: "AI x Digital Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
    ],
  },
  {
    slug: "agentic-anthropology",
    title: "Agentic Anthropology",
    description:
      "Winner of the Betaworks hackathon, built solo in a matter of hours. A multi-user dungeon in Tribute Labs's Intent Spaces where several AI agents play a D&D-style campaign guided by a gamemaster agent. — autonomous historical factions, world events, and intent-space-native orchestration via Spacebase.",
    githubUrl: "https://github.com/markaschmidt/Betaworks-Intent-Space",
    logo: "/projects/agentic-anthropology.svg",
    startDate: "2025-05-21",
    endDate: "2025-05-21",
    status: {
      milestones: [
        {
          label: "Hackathon demo",
          status: "completed",
          details:
            "Built solo and won the Betaworks Intent Space hackathon with a live playable simulation.",
        },
        {
          label: "Faction agent loop",
          status: "completed",
          details:
            "Autonomous civilization agents post moves, react to events, and update world state.",
        },
        {
          label: "Gamemaster dilemmas",
          status: "completed",
          details:
            "A gamemaster agent introduces D&D-style dilemmas and adjudicates faction responses.",
        },
      ],
    },
    skills: [
      { name: "Multi-agent simulation", category: "Agents" },
      { name: "Intent-space orchestration", category: "Agents" },
      { name: "Gamemaster agent design", category: "Agents" },
      { name: "Rapid hackathon prototyping", category: "Product" },
    ],
    blog: [
      {
        type: "paragraph",
        content:
          "Agentic Anthropology simulates five competing historical civilizations under stress from scarcity, unrest, plague, climate, and warfare. Faction agents act autonomously, a gamemaster agent introduces dilemmas, and every major world event is posted as a nested Spacebase intent — making the simulation observable and auditable in real time.",
      },
      {
        type: "paragraph",
        content:
          "Built for the Betaworks Intent Space hackathon, the project won competing solo. The demo runs as a local dashboard where you can watch factions move, adjudicate dilemmas, and trace the full chronicle of agent decisions.",
      },
    ],
    techStack: [
      { name: "Python", category: "Backend", notes: "Simulation server" },
      { name: "Spacebase1", category: "Agents", notes: "Intent-space orchestration" },
      { name: "JavaScript", category: "Frontend", notes: "Live dashboard" },
      { name: "HTML/CSS", category: "UI", notes: "Campaign chronicle" },
    ],
    tags: [
      {
        label: "Hackathon Winner",
        tag: true,
        color: "bg-amber-100/80 text-amber-950",
        icon: <TrophyIcon className="size-3.5" />,
      },
      { label: "Role-Playing Games", tag: true, color: "bg-sky-100/80 text-sky-950" },
      { label: "Causal Inference", tag: true, color: "bg-sky-100/80 text-sky-950" },
    ],
  },
  {
    slug: "artie-agent",
    title: "Artie Agent",
    description:
      "An agentic remote trade platform designed to help retail investors bridge the competitive gap with institutional finance through mobile-first portfolio management and intelligent automation.",
    githubUrl: "https://github.com/markaschmidt/artie-agent",
    logo: artieLogo,
    startDate: "2023-06-01",
    status: {
      milestones: [
        {
          label: "Mobile-first UI",
          status: "completed",
          details:
            "Core portfolio views and responsive Next.js app shell are implemented.",
        },
        {
          label: "Agentic API layer",
          status: "completed",
          details:
            "FastAPI services handle portfolio data flows and agent orchestration.",
        },
        {
          label: "Trade automation",
          status: "pending",
          details:
            "Brokerage integrations and execution guardrails are still being expanded.",
        },
        {
          label: "Production rollout",
          status: "in-progress",
          details:
            "Observability, compliance review, and broader user onboarding remain in progress.",
        },
      ],
    },
    skills: [
      { name: "Fintech product development", category: "Fintech" },
      { name: "Agentic Remote Trading", category: "Agents" },
      { name: "Mobile-first UI", category: "Frontend" },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend", notes: "App Router UI" },
      { name: "FastAPI", category: "Backend", notes: "Agentic API layer" },
      { name: "Python", category: "Backend", notes: "Data and agent flows" },
      { name: "TypeScript", category: "Language", notes: "Shared client types" },
    ],
    tags: [
      { label: "Fintech", tag: true, color: "bg-emerald-100/80 text-emerald-950" },
      { label: "Agents", tag: true, color: "bg-sky-100/80 text-sky-950" },
    ],
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project])
) as Record<string, ProjectProps>;

export const ventures: VentureProps[] = [
  {
    slug: "reef-media",
    name: "Reef Media",
    description:
      "A media venture providing affordable misinformation mitigation to social media platforms to significantly reduce the <$8B in trust and safety costs by automating monotonous case work and fostering healthier platform experiences by empowering users to understand the value of any media with analysis tools.",
    websiteUrl: "https://app.reefmedia.ai",
    logo: "/ventures/reef_media_svg.webp",
    category: "Digital Trust & Safety",
    period: "Oct. 2024 — May 2026",
    status: "past",
    tags: [
      { label: "Media Analysis", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
      { label: "Trust & Safety Automation", tag: true, color: "bg-teal-100/80 text-teal-950" },
    ],
  },
  {
    slug: "vektre",
    name: "Vektre",
    description:
      "An agentic asset generation platform for 3d game development that slashes game asset development timelines and costs by 80-90% for indie game studios. What started initially as a hackathon project, has evolved into a full-fledged B2B-SaaS venture.",
    websiteUrl: "https://demo.artieagent.tech",
    logo: vektreLogo,
    category: "AI for 3D Game Development",
    period: "June 2026 — present",
    status: "current",
    tags: [
      { label: "Game Dev", tag: true, color: "bg-indigo-100/80 text-indigo-950" },
      { label: "Synthesis", tag: true, color: "bg-violet-100/80 text-violet-950" },
    ],
  },
];

export const venturesBySlug = Object.fromEntries(
  ventures.map((venture) => [venture.slug, venture]),
) as Record<string, VentureProps>;

export const accolades: AccoladeProps[] = [
  {
    iconSrc: "/accolades/njit.svg",
    name: "NJIT New Business Model Competition Finalist",
    description:
      "Competed against over 80 applicants and was among the top 9 finalists who were mostly graduate and PhD students.",
    location: "Newark, New Jersey",
    year: "December 2023",
    tags: [
      { label: "Pitch Competition", tag: true, color: "bg-stone-200/80 text-stone-900" },
      { label: "Reef Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
    ],
  },
  {
    iconSrc: "/accolades/EO.webp",
    name: "NJ GSEA Top Student Entrepreneur & Finalist",
    description:
      "Recognized by the NJ chapter of Entrepreneur's Organization as a top student entrepreneur during the 2024-2025 academic year and was a finalist in the NJ GSEA pitch competition.",
    location: "New Jersey",
    year: "January 2025",
    tags: [
      { label: "Pitch Competition", tag: true, color: "bg-stone-200/80 text-stone-900" },
      { label: "Reef Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
    ],
    mediaLinks: [
      {
        label: "Press Release",
        href: "https://www.prlog.org/13062010-rutgers-university-student-wins-new-jerseys-top-student-entrepreneur-in-eos-global-student-entrepreneur-awards.html",
      },
    ],
  },
  {
    iconSrc: "/accolades/rutgers.webp",
    name: "Scarlet Pitch Competition Finalist",
    description:
      "Selected among dozens of applicants as one of the top 10.",
    location: "Rutgers University",
    year: "February 2025",
    tags: [
      { label: "Pitch Competition", tag: true, color: "bg-stone-200/80 text-stone-900" },
      { label: "Reef Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
    ],
  },
  {
    iconSrc: "/accolades/tcu.webp",
    name: "TCU Values & Ventures International Pitch Competition Semi-Finalist",
    location: "Fort Worth, Texas",
    year: "April 2025",
    tags: [
      { label: "Pitch Competition", tag: true, color: "bg-stone-200/80 text-stone-900" },
      { label: "Reef Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
    ],
  },
  {
    iconSrc: "/accolades/wiki.webp",
    name: "Wikimedia Enterprise Case Study Collaboration",
    description:
      "Collaborated with Wikimedia Foundation on a case study to establish a corpus for media claim verification.",
    location: "Wikimedia Enterprise",
    year: 2025,
    tags: [
      { label: "Reef Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
      { label: "Research", tag: true, color: "bg-teal-100/80 text-teal-950" },
    ],
    mediaLinks: [
      {
        label: "Case Study",
        href: "https://enterprise.wikimedia.com/blog/reef-media-ai/",
      },
    ],
  },
  {
    iconSrc: "/ventures/reef_media_svg.webp",
    name: "Reef Media Discord Integrated App Launch",
    description:
      "Launched Reef Media as a Discord integrated app across 15 communities with a collective ~26K members and ~300 individual users actively using the product.",
    location: "Discord",
    year: 2025,
    tags: [
      { label: "Reef Media", tag: true, color: "bg-cyan-100/80 text-cyan-950" },
      { label: "Product Launch", tag: true, color: "bg-teal-100/80 text-teal-950" },
    ],
  },
];
