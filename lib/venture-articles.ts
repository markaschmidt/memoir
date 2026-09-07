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
      "An AI-powered media analysis platform that empowers users to understand the value of any media, prior to viewing it.",
    blocks: [
      {
        type: "heading",
        content: "The idea",
      },
      {
        type: "paragraph",
        content:
          "Reef Media's inception began after the shocking realization that over 800 people had died from supposed COVID-19 cures that they found on social media. The idea that people could cause their own deaths from reading the wrong information was a repulsive and disappointing thought.",
      },
      {
        type: "paragraph",
        content:
          "A platform where you could drop in a YouTube video, Tiktok, article, or any other social media content, and receive a structured breakdown of what was claimed, and evaluate it against research, reasoning, and community verdict. It was built to bridge the digital literacy gap seamlessly to move fast without sacrificing rigor.",
      },
      {
        type: "video",
        src: "https://youtu.be/8tbxIkaKMTw",
        title: "Reef Media product walkthrough",
      },
      {
        type: "heading",
        content: "The platform",
      },
      {
        type: "paragraph",
        content:
          "At its core, Reef Media was a media intelligence workspace. Users analyzed content through a unified toolset. Every session produced a persistent record you could return to, share, or build on.",
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
          "Reef Media's tools would generate a full analytical response: a summary of claims, distilled key points, supplemental context about the content, and an interactive verdict layer where users could endorse or challenge the analysis. Under the hood, a set of specialized models would dissect the content for strengths and weaknesses in logic, argumentation, rhetoric, and factuality.",
      },
      {
        type: "stacked-images",
        images: [reefMediaImages.analysisTop, reefMediaImages.analysisBottom],
        alt: "Reef Media video analysis showing summarization output and fact-check metrics",
        caption:
          "A complete analysis response including summarization and scoring metrics.",
      },
      {
        type: "heading",
        content: "Link analysis",
      },
      {
        type: "paragraph",
        content:
          "Our machine learning pipeline was versatile enough to support an array of media formats including Truth Social, TikTok, Youtube, and Substack. The analyzer requires just any URL and returned the same structured format: summary, key points, and supplemental context — ready to interrogate before you committed to a take. The input bar anchored a workflow designed for speed: paste, analyze, decide.",
      },
      {
        type: "stacked-images",
        images: [reefMediaImages.analyzerTop, reefMediaImages.analyzerBottom],
        alt: "Reef Media link analyzer showing structured summary output and analysis input",
        caption:
          "Above is a structured outline of the summary and key points of an informative Youtube video about recent developments in Ukraine.",
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
          "Building Reef Media taught me a considerable amount about building with cloud services, AI models, and creating robust full stack applicaitons including resilient APIs. Collaborating with Wikimedia Foundation on a case study demonstrated the importance of not just determining build vs buy in a startup setting, but seeking out synergistic strategic partnerships can catapult ventures forward.",
      },
      {
        type: "paragraph",
        content:
          "These lessons have fostered better product development skills by recognizing that customer discovery is not the preamble to building products, but an intermittent process that is revisited throughout the MVP's creation.",
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
        type: "video",
        src: "https://youtu.be/iDzmycg_M48",
        title: "Vektre product walkthrough",
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
