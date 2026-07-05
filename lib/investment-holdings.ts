export type SafetyLevel =
  | "conservative"
  | "moderate"
  | "balanced"
  | "speculative"
  | "high_risk";

export type HoldingKind = "stock" | "etf";

export type Holding = {
  ticker: string;
  name: string;
  safety: SafetyLevel;
  themes: string[];
  explanation: string;
  kind: HoldingKind;
};

export const STOCK_HOLDINGS: Holding[] = [
  {
    ticker: "APLD",
    name: "Applied Digital",
    safety: "speculative",
    themes: ["Tech", "AI Infrastructure"],
    explanation:
      "Digital infrastructure for AI and HPC workloads; high-beta exposure to AI buildout capex cycles.",
    kind: "stock",
  },
  {
    ticker: "NVTS",
    name: "Navitas Semiconductor",
    safety: "speculative",
    themes: ["Tech", "Semiconductors"],
    explanation:
      "GaN power semiconductors positioned for electrification, data-center power, and fast-charging markets. This stock benefits from its partnerships with mag-7 companies like NVDA, and succcessfully pivoted towards GaN and Sic solutions for AI data centers and  energy infrastructure.",
    kind: "stock",
  },
  {
    ticker: "AVGO",
    name: "Broadcom",
    safety: "moderate",
    themes: ["Tech", "Semiconductors"],
    explanation:
      "Diversified semiconductor and infrastructure software franchise with AI networking tailwinds. Has a higher beta than many big tech companies, but has a promising future as a dominant player in the semiconductor industry.",
    kind: "stock",
  },
  {
    ticker: "AMD",
    name: "Advanced Micro Devices",
    safety: "moderate",
    themes: ["Tech", "Semiconductors"],
    explanation:
      "CPU and GPU leader competing in data-center, PC, and accelerated compute markets.",
    kind: "stock",
  },
  {
    ticker: "GOOG",
    name: "Alphabet",
    safety: "moderate",
    themes: ["Tech"],
    explanation:
      "Search and cloud cash engine with optional AI upside through Gemini and cloud workloads. Arguably the most comprehensive ecosystem for developing and improving AI models.",
    kind: "stock",
  },
  {
    ticker: "MU",
    name: "Micron Technology",
    safety: "moderate",
    themes: ["Tech", "Semiconductors", "Memory"],
    explanation:
      "Memory and storage supplier leveraged to AI server demand and cyclical DRAM/NAND pricing.",
    kind: "stock",
  },
  {
    ticker: "WDC",
    name: "Western Digital",
    safety: "moderate",
    themes: ["Tech", "Storage"],
    explanation:
      "Data storage hardware tied to cloud and enterprise demand with cyclical recovery potential. Has huge demand and giant RPO.",
    kind: "stock",
  },
  {
    ticker: "TSM",
    name: "Taiwan Semiconductor",
    safety: "moderate",
    themes: ["Tech", "Semiconductors"],
    explanation:
      "Foundry backbone of advanced-node chip production with geopolitical and capex-cycle risk. But, generally can be considered a monopoly in fabrication.",
    kind: "stock",
  },
  {
    ticker: "NBIS",
    name: "Nebius Group",
    safety: "speculative",
    themes: ["Tech", "AI Infrastructure"],
    explanation:
      "AI-centric cloud and infrastructure operator; early-stage rerating story with execution risk.",
    kind: "stock",
  },
  {
    ticker: "BLSH",
    name: "Bullish",
    safety: "speculative",
    themes: ["Finance", "Crypto"],
    explanation:
      "Crypto exchange and blockchain infrastructure exposure with regulatory and token-market beta.",
    kind: "stock",
  },
  {
    ticker: "NU",
    name: "Nu Holdings",
    safety: "moderate",
    themes: ["Finance", "Fintech"],
    explanation:
      "Latin American digital bank scaling deposits and lending with operating leverage potential The company's ARPU has grown significantly and they cornered the LATAM digital banking market.",
    kind: "stock",
  },
  {
    ticker: "DDOG",
    name: "Datadog",
    safety: "moderate",
    themes: ["Tech", "SaaS"],
    explanation:
      "Observability platform benefiting from cloud-native adoption and enterprise consolidation.",
    kind: "stock",
  },
  {
    ticker: "IONQ",
    name: "IonQ",
    safety: "high_risk",
    themes: ["Tech", "Quantum"],
    explanation:
      "This is a pure-play quantum computing company that has made exceptional progress in their development of a commercial-grade quantum computer. They have strong support from the government, large amount of cash, and recently acquired Oxford Ionics to further enable themselves to build custom chips for their quantum computers.",
    kind: "stock",
  },
];

export const ETF_HOLDINGS: Holding[] = [
  {
    ticker: "REMX",
    name: "VanEck Rare Earth & Strategic Metals ETF",
    safety: "moderate",
    themes: ["Commodities", "Materials"],
    explanation:
      "Rare-earth and strategic metals basket tied to electrification and defense supply chains.",
    kind: "etf",
  },
  {
    ticker: "URA",
    name: "Global X Uranium ETF",
    safety: "speculative",
    themes: ["Energy", "Commodities"],
    explanation:
      "Uranium miners and nuclear fuel chain exposure to the nuclear renaissance thesis.",
    kind: "etf",
  },
  {
    ticker: "LIT",
    name: "Global X Lithium & Battery Tech ETF",
    safety: "speculative",
    themes: ["Energy", "Commodities", "Tech"],
    explanation:
      "Lithium producers and battery-tech names linked to EV and grid-storage adoption.",
    kind: "etf",
  },
  {
    ticker: "COPX",
    name: "Global X Copper Miners ETF",
    safety: "moderate",
    themes: ["Commodities", "Materials"],
    explanation:
      "Copper-mining basket leveraged to electrification, grid buildout, and AI power demand.",
    kind: "etf",
  },
  {
    ticker: "CQQQ",
    name: "Invesco China Technology ETF",
    safety: "speculative",
    themes: ["Tech", "International"],
    explanation:
      "China internet and technology exposure with regulatory, geopolitical, and FX considerations.",
    kind: "etf",
  },
];

export const ALL_HOLDINGS = [...STOCK_HOLDINGS, ...ETF_HOLDINGS];

export const SAFETY_LABELS: Record<SafetyLevel, string> = {
  conservative: "Conservative",
  moderate: "Moderate",
  balanced: "Balanced",
  speculative: "Speculative",
  high_risk: "High Risk",
};

export const SAFETY_COLORS: Record<SafetyLevel, string> = {
  conservative: "bg-emerald-100/90 text-emerald-950",
  moderate: "bg-sky-100/90 text-sky-950",
  balanced: "bg-teal-100/90 text-teal-950",
  speculative: "bg-amber-100/90 text-amber-950",
  high_risk: "bg-rose-100/90 text-rose-950",
};

export const SAFETY_ORDER: Record<SafetyLevel, number> = {
  conservative: 0,
  moderate: 1,
  balanced: 2,
  speculative: 3,
  high_risk: 4,
};
