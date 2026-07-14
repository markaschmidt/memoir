import type { Interest } from "@/types/interest";

export const interests: Interest[] = [
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    media: {
      type: "video",
      src: "https://www.youtube.com/watch?v=g_IaVepNDT4",
      title: "How Does a Quantum Computer Work? (Veritasium)",
    },
    lede: "Exploring how quantum information could reshape computation beyond classical limits.",
    body: [
      "I follow quantum computing as both a systems curiosity and a long-horizon bet on hardware that breaks assumptions baked into binary machines. The interesting part for me is not the hype cycle — it is the mapping between physical qubits, error correction, and the kinds of algorithms that actually become practical.",
      "I pursue it through technical lectures, papers, and comparative study against classical and unconventional architectures. When I build, I keep asking where agentic software and synthesis pipelines would change if the underlying compute substrate stopped being purely binary.",
    ],
  },
  {
    id: "ternary-computing",
    title: "Ternary Computing",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      alt: "Close-up of electronic circuit traces and components",
      credit: "Photo via Unsplash",
    },
    lede: "Building toward a tangible case that balanced ternary can outpace primitive binary hardware.",
    body: [
      "Ternary computing is where my hardware fascination turns into an experiment. The claim I want to stress-test is simple: between a primitive binary machine and a primitive balanced-ternary machine — both built by hand — ternary should show a measurable advantage and help push past the comfort of Moore’s-law thinking.",
      "I pursue this by designing logic, assembling prototypes, and comparing workloads side by side. The work lives in Triumni: schematics, gate experiments, and eventually a shared benchmark suite that makes the theory concrete.",
    ],
    projects: [{ slug: "triumni" }],
  },
  {
    id: "european-asian-history",
    title: "European & Asian History",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1461360228754-6e81c08cd9f8?auto=format&fit=crop&w=1600&q=80",
      alt: "Weathered historical documents and maps on a wooden surface",
      credit: "Photo via Unsplash",
    },
    lede: "Reading the long arc of states, trade, and culture that still shapes modern systems.",
    body: [
      "I dig into European and Asian history because institutions, frontiers, and technologies rarely appear from nowhere — they are path-dependent. Understanding how empires, trade routes, and belief systems collided helps me reason about present-day geopolitics and the social systems software touches.",
      "I pursue it through primary narratives, comparative timelines, and occasional simulation. Agentic Anthropology was one outlet: letting historical factions act under scarcity and conflict made abstract history feel like a living system instead of a static reading list.",
    ],
    projects: [{ slug: "agentic-anthropology" }],
  },
  {
    id: "astronomy-cosmology",
    title: "Astronomy & Cosmology",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80",
      alt: "Deep-space nebula glowing against a field of stars",
      credit: "Photo via Unsplash",
    },
    lede: "Keeping scale in view — from planetary systems to the structure of the cosmos.",
    body: [
      "Astronomy and cosmology pull me out of the day-to-day and into questions of origin, scale, and observation. I care about how instruments and models turn faint signals into explanations — the same epistemic loop that shows up in media analysis and scientific communication.",
      "I pursue it by following surveys, mission releases, and research explainers, and by turning dense papers into clearer media when I can. Podkaster is part of that habit: an agentic pipeline that helps research leave the PDF and reach people who would never open arXiv.",
    ],
    projects: [{ slug: "podkaster" }],
  },
  {
    id: "prehistory-anthropology",
    title: "Prehistory & Anthropology",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1555881403-64992e9802a5?auto=format&fit=crop&w=1600&q=80",
      alt: "Ancient stone ruins under a clear sky",
      credit: "Photo via Unsplash",
    },
    lede: "Studying how early humans organized, adapted, and left cultural traces we still inherit.",
    body: [
      "Prehistory and anthropology keep me honest about what “intelligence” and “society” looked like before writing, markets, or silicon. Material culture, migration, and ritual are older forms of coordination — useful mirrors when designing multi-agent systems that claim to model human behavior.",
      "I pursue it through archaeology-facing reading and by prototyping simulations of factional decision-making under stress. That thread became Agentic Anthropology: autonomous historical agents, a gamemaster loop, and a chronicle you can watch unfold.",
    ],
    projects: [{ slug: "agentic-anthropology" }],
  },
];
