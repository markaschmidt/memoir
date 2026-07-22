import type { VentureArticle } from "@/types/venture-article";

const reefMediaImages = {
  dashboard: "/images/reef-media/dashboard-sidebar.webp",
  analysisTop: "/images/reef-media/media-summarization.webp",
  analysisBottom: "/images/reef-media/analysis-metrics.webp",
  analyzerTop: "/images/reef-media/analysis-summary.webp",
  analyzerBottom: "/images/reef-media/analysis-key-points.webp",
  research: "/images/reef-media/research-summary.webp",
} as const;

export const ventureArticles: VentureArticle[] = [
  {
    slug: "reef-media",
    subtitle:
      "An AI-powered media analysis platform that transformed long-form video and news into structured, verifiable intelligence.",
    blocks: [
      {
        type: "heading",
        content: "The idea",
      },
      {
        type: "paragraph",
        content:
          "Reef Media started from a simple frustration: the internet produces more media than any person can process, but almost none of the tools to understand it treat analysis as a first-class product. Summaries exist everywhere. Structured judgment — with sources, logic checks, and a record of what was actually said — does not.",
      },
      {
        type: "paragraph",
        content:
          "Reef Media was my answer. A platform where you could drop in a YouTube link or article, receive a structured breakdown of what was claimed, and evaluate it against research, reasoning, and community verdict. It was built for people who needed to move fast without sacrificing rigor.",
      },
      {
        type: "heading",
        content: "The platform",
      },
      {
        type: "paragraph",
        content:
          "At its core, Reef Media was a media intelligence workspace. Users analyzed content through a unified dashboard — browsing past reports, searching history, and launching new analyses from a single interface. Every session produced a persistent record you could return to, share, or build on.",
      },
      {
        type: "image",
        src: reefMediaImages.dashboard,
        alt: "Reef Media dashboard showing navigation sidebar and analysis history feed",
        caption: "The Reef Media workspace — history, search, and tools in one view.",
      },
      {
        type: "heading",
        content: "Deep analysis",
      },
      {
        type: "paragraph",
        content:
          "For video content, Reef Media generated a full analytical response: a summary of claims, distilled key points, supplemental context about the speaker, and an interactive verdict layer where users could endorse or challenge the analysis. Beneath that, automated scoring evaluated factual consistency, logical coherence, and sentiment — turning a passive watch into an auditable report.",
      },
      {
        type: "stacked-images",
        images: [reefMediaImages.analysisTop, reefMediaImages.analysisBottom],
        alt: "Reef Media video analysis showing summarization output and fact-check metrics",
        caption:
          "A complete analysis response — summarization above, scoring metrics below.",
      },
      {
        type: "heading",
        content: "Link analysis",
      },
      {
        type: "paragraph",
        content:
          "Not every input was a video. The link analyzer accepted any URL and returned the same structured format: summary, key points, and supplemental context — ready to interrogate before you committed to a take. The input bar anchored a workflow designed for speed: paste, analyze, decide.",
      },
      {
        type: "stacked-images",
        images: [reefMediaImages.analyzerTop, reefMediaImages.analyzerBottom],
        alt: "Reef Media link analyzer showing structured summary output and analysis input",
        caption:
          "The link analyzer — structured output and the input workflow as one continuous view.",
      },
      {
        type: "heading",
        content: "Research mode",
      },
      {
        type: "paragraph",
        content:
          "When a claim needed grounding, Reef Media shifted into research mode — synthesizing a cited summary from live sources rather than relying on the original media alone. Every assertion linked back to where it came from, making the output defensible rather than merely readable.",
      },
      {
        type: "image",
        src: reefMediaImages.research,
        alt: "Reef Media research summary with numbered source citations",
        caption: "Research summaries with inline citations and a full source index.",
      },
      {
        type: "heading",
        content: "What it taught me",
      },
      {
        type: "paragraph",
        content:
          "Reef Media proved that structured AI output — not just generation — is what users actually need when the stakes are high. It also reinforced something I had learned years earlier as a modder: the hardest problems are rarely technical. They are about reducing the distance between what someone wants to create and what their tools allow.",
      },
      {
        type: "paragraph",
        content:
          "That lesson carried directly into Vektre — same philosophy, different bottleneck. Where Reef Media structured information, Vektre structures assets.",
      },
    ],
  },
  {
    slug: "vektre",
    subtitle:
      "The software I wished I had ten years ago — affordable generation and animation of production-quality 3D assets for any game.",
    blocks: [
      {
        type: "heading",
        content: "The problem",
      },
      {
        type: "paragraph",
        content:
          "As a teen modder, the games I wanted to build stayed out of reach — not because of code, but because of art. Modern game development gates creation behind pipelines that demand illustrators, modelers, riggers, and animators before a single mechanic can be tested. Millions of builders hit that wall and stop.",
      },
      {
        type: "paragraph",
        content:
          "Vektre exists to remove it. An agentic design system that generates and animates high-fidelity 3D assets at a fraction of traditional cost — so intent becomes playable faster.",
      },
      {
        type: "heading",
        content: "What we're building",
      },
      {
        type: "paragraph",
        content:
          "Vektre AI is an agentic designer and asset synthesizer. Teams define constraints, taste, and brand memory; Vektre compiles those into production-ready surfaces — models, textures, animations — governed by evaluable creative loops rather than one-off prompts.",
      },
      {
        type: "heading",
        content: "From Reef Media to Vektre",
      },
      {
        type: "paragraph",
        content:
          "Reef Media taught me that AI's highest value is not raw generation — it is structured output you can trust and act on. Vektre applies that same principle to game development: assets with lineage, constraints, and the taste profile that produced them.",
      },
    ],
  },
];

export const ventureArticlesBySlug = Object.fromEntries(
  ventureArticles.map((article) => [article.slug, article]),
) as Record<string, VentureArticle>;
