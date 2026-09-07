export type GameDevStat = {
  label: string;
  value: string;
};

export type WorkshopItem = {
  id: string;
  title: string;
  previewUrl: string;
  subscribers: number;
  views: number;
  favorites: number;
  collections: number;
};

/** Live Steam figures for all featured workshop addons (July 2026). */
export const WORKSHOP_ITEMS: WorkshopItem[] = [
  {
    id: "964845907",
    title: "Star Wars CGI Jedi Playermodel Pack!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/850468241630363294/B9AB1CE4287214E6AEBF7D9E359E9D5F0F057207/",
    subscribers: 26_006,
    views: 26_950,
    favorites: 768,
    collections: 9_311,
  },
  {
    id: "878090416",
    title: "HD Clone Troopers Playermodels (Part 1)",
    previewUrl:
      "https://images.steamusercontent.com/ugc/172665489903265601/64E31FCC8BBE2398AFC5FAF4EEA2BEA563052DFC/",
    subscribers: 18_854,
    views: 50_599,
    favorites: 1_402,
    collections: 7_752,
  },
  {
    id: "878092659",
    title: "HD Clone Troopers Playermodels Pack (Part 2)",
    previewUrl:
      "https://images.steamusercontent.com/ugc/172665489903288321/A8B0FE056140FE08EE820CFC94F7044CCD42C6E4/",
    subscribers: 18_505,
    views: 43_027,
    favorites: 1_296,
    collections: 7_588,
  },
  {
    id: "973062927",
    title: "Post-Apocalyptic Insurgent Coalition Bandits!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/835831966959607963/576C17AC9EDDA6D9CC02C334E8470F253F8236C0/",
    subscribers: 16_701,
    views: 23_171,
    favorites: 1_027,
    collections: 6_077,
  },
  {
    id: "906562953",
    title: "Star Wars CGI Umbarans Playermodel & NPC Pack!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/85974691418736567/E06087A79C300EE33E9E4D4EBA98F5F19A1846C7/",
    subscribers: 15_721,
    views: 10_855,
    favorites: 363,
    collections: 4_222,
  },
  {
    id: "885064519",
    title: "Star Wars CGI Naval Playermodels",
    previewUrl:
      "https://images.steamusercontent.com/ugc/85972156533129368/E06087A79C300EE33E9E4D4EBA98F5F19A1846C7/",
    subscribers: 12_332,
    views: 9_218,
    favorites: 275,
    collections: 3_849,
  },
  {
    id: "966377279",
    title: "Star Wars Kylo Ren Playermodel (With Face & Helmet)!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/835831635480330825/689C76CA021E52B239B6DDC91D8C9E454CE0B6A3/",
    subscribers: 11_212,
    views: 19_015,
    favorites: 452,
    collections: 2_829,
  },
  {
    id: "782446441",
    title: "CGI Clone Training Armor Playermodel Pack!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/253717471682739410/B44368C634ED8EE4276E4B8330A7FECE674F811F/",
    subscribers: 3_917,
    views: 3_282,
    favorites: 62,
    collections: 1_443,
  },
  {
    id: "932962841",
    title: "Star Wars CGI Battle of Geonosis Playermodel & NPC Pack!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/772777351446720670/E06087A79C300EE33E9E4D4EBA98F5F19A1846C7/",
    subscribers: 2_808,
    views: 5_391,
    favorites: 99,
    collections: 850,
  },
  {
    id: "1238998550",
    title: "Star Wars CGI Sith Playermodel Pack!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/909030263371984188/31E7634F481D45491401F4A8533F5A99EC43A009/",
    subscribers: 2_543,
    views: 8_041,
    favorites: 105,
    collections: 1_159,
  },
  {
    id: "828469388",
    title: "Superior Servers 104th/Wolfpack Playermodel Pack!",
    previewUrl:
      "https://images.steamusercontent.com/ugc/101727694598996752/A96E4DD2596E263DF07375F3F3F8BDCBD5F3B2CB/",
    subscribers: 2_207,
    views: 2_780,
    favorites: 43,
    collections: 534,
  },
  {
    id: "741862697",
    title: "CGI Bald Clone Trooper/Cadet Playermodel",
    previewUrl:
      "https://images.steamusercontent.com/ugc/264970571025301959/B44368C634ED8EE4276E4B8330A7FECE674F811F/",
    subscribers: 1_815,
    views: 2_644,
    favorites: 20,
    collections: 711,
  },
  {
    id: "891461624",
    title: "CGI Star Wars Rebels Storm Trooper Playermodel/NPC Pack",
    previewUrl:
      "https://images.steamusercontent.com/ugc/85972696333918259/6F1558F7202B766BD390433AF0E5A1F5C727268D/",
    subscribers: 1_651,
    views: 9_727,
    favorites: 155,
    collections: 484,
  },
  {
    id: "795796944",
    title: "Star Wars CGI Clone Playermodel Pack #1",
    previewUrl:
      "https://images.steamusercontent.com/ugc/192920657758221480/EE18716FF31E1D7944BA487E757A341F29F73274/",
    subscribers: 1_059,
    views: 4_058,
    favorites: 58,
    collections: 500,
  },
];

export const WORKSHOP_TOTALS = WORKSHOP_ITEMS.reduce(
  (totals, item) => ({
    subscribers: totals.subscribers + item.subscribers,
    views: totals.views + item.views,
    favorites: totals.favorites + item.favorites,
    collections: totals.collections + item.collections,
  }),
  { subscribers: 0, views: 0, favorites: 0, collections: 0 }
);

function formatCount(value: number) {
  if (value >= 1_000_000) {
    return `${Math.floor(value / 100_000) / 10}M+`;
  }

  if (value >= 1_000) {
    return `${Math.floor(value / 1_000)}K+`;
  }

  return String(value);
}

export const GAME_DEV_STATS: GameDevStat[] = [
  { label: "Workshop addons", value: String(WORKSHOP_ITEMS.length) },
  {
    label: "Combined subscribers",
    value: formatCount(WORKSHOP_TOTALS.subscribers),
  },
  {
    label: "Workshop page views",
    value: formatCount(WORKSHOP_TOTALS.views),
  },
  {
    label: "Collection adds",
    value: formatCount(WORKSHOP_TOTALS.collections),
  },
  { label: "Active since", value: "2016" },
];

export const GAME_DEV_SUBHEADER =
  "Garry's Mod Workshop addons published as Arden — playermodels, NPC packs, and faction content used by servers and communities worldwide.";

export const GAME_DEV_DESCRIPTION = [
  "Game development started for me inside Garry's Mod. I taught myself modeling, rigging, NPC setup, bodygroups, and viewmodels by porting and rebuilding assets — then publishing them to the Steam Workshop under the name Arden.",
  "Those early packs — Star Wars Jedi and Sith factions, Battle of Geonosis clones, post-apocalyptic insurgents, and more — taught me how players actually experience content: load times, customization, server compatibility, and how much polish matters when thousands of people subscribe.",
  "That foundation still shapes how I build today. Whether it is Vektre's 3D asset pipeline or systems-level projects like Triumni, the through-line is the same: make something tangible, ship it where people can use it, and iterate from real feedback.",
] as const;

export const WORKSHOP_ITEM_IDS = WORKSHOP_ITEMS.map((item) => item.id);

/*
 * SteamWidgets integration (disabled — steamwidgets.com API shut down).
 *
 * export const STEAM_WORKSHOP_SCRIPT_URL =
 *   "https://cdn.jsdelivr.net/gh/danielbrendel/steamwidgets-js@main/src/js/steam_workshop.js";
 *
 * export const WORKSHOP_WIDGET_STYLE = {
 *   border: "small",
 *   shadow: "0",
 *   colorBackground: "oklch(0.985 0.009 92)",
 *   colorTitle: "oklch(0.28 0.035 58)",
 *   colorDescription: "oklch(0.48 0.028 62)",
 *   colorStatsCount: "oklch(0.28 0.035 58)",
 *   colorStatsLabel: "oklch(0.48 0.028 62)",
 * } as const;
 */
