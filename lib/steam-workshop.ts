export type LiveWorkshopItem = {
  id: string;
  title: string;
  previewUrl: string;
  subscriptions: number;
  views: number;
  favorites: number;
};

type SteamWidgetsResponse = {
  code: number;
  itemid?: string;
  msg?: string;
  data?: {
    publishedfileid: string;
    title: string;
    preview_url: string;
    subscriptions: number;
    views: number;
    favorited: number;
  };
};

type SteamPublishedFileDetails = {
  publishedfileid: string;
  result: number;
  preview_url?: string;
  title?: string;
  subscriptions?: number;
  views?: number;
  favorited?: number;
};

type SteamApiResponse = {
  response?: {
    result: number;
    resultcount: number;
    publishedfiledetails?: SteamPublishedFileDetails[];
  };
};

function getSteamWidgetsBaseUrl() {
  return process.env.STEAM_WIDGETS_URL ?? "http://127.0.0.1:3002";
}

/** Sister API may append PHP debug output after the JSON body. */
function parseSteamWidgetsPayload(text: string): SteamWidgetsResponse {
  const start = text.indexOf("{");
  if (start === -1) {
    throw new Error("SteamWidgets response did not contain JSON");
  }

  let depth = 0;
  for (let i = start; i < text.length; i += 1) {
    const char = text[i];
    if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return JSON.parse(text.slice(start, i + 1)) as SteamWidgetsResponse;
      }
    }
  }

  throw new Error("SteamWidgets response JSON was incomplete");
}

async function fetchWorkshopItemFromSisterApi(
  itemId: string
): Promise<LiveWorkshopItem | null> {
  const baseUrl = getSteamWidgetsBaseUrl();

  try {
    const response = await fetch(
      `${baseUrl}/api/query/workshop?itemid=${encodeURIComponent(itemId)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const payload = parseSteamWidgetsPayload(await response.text());
    if (payload.code !== 200 || !payload.data) {
      return null;
    }

    const { data } = payload;
    return {
      id: data.publishedfileid,
      title: data.title,
      previewUrl: data.preview_url,
      subscriptions: data.subscriptions,
      views: data.views,
      favorites: data.favorited,
    };
  } catch {
    return null;
  }
}

async function fetchWorkshopItemsFromSteam(
  itemIds: readonly string[]
): Promise<LiveWorkshopItem[]> {
  if (itemIds.length === 0) return [];

  try {
    const body = new URLSearchParams();
    body.set("itemcount", String(itemIds.length));
    itemIds.forEach((id, index) => {
      body.set(`publishedfileids[${index}]`, id);
    });

    const response = await fetch(
      "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as SteamApiResponse;
    const details = payload.response?.publishedfiledetails ?? [];

    return details
      .filter(
        (item) => item.result === 1 && item.preview_url && item.title
      )
      .map((item) => ({
        id: item.publishedfileid,
        title: item.title!,
        previewUrl: item.preview_url!,
        subscriptions: item.subscriptions ?? 0,
        views: item.views ?? 0,
        favorites: item.favorited ?? 0,
      }));
  } catch {
    return [];
  }
}

export async function fetchWorkshopItem(
  itemId: string
): Promise<LiveWorkshopItem | null> {
  const [steamItem] = await fetchWorkshopItemsFromSteam([itemId]);
  if (steamItem) return steamItem;

  return fetchWorkshopItemFromSisterApi(itemId);
}

export async function fetchWorkshopItems(itemIds: readonly string[]) {
  const steamItems = await fetchWorkshopItemsFromSteam(itemIds);
  if (steamItems.length > 0) {
    return steamItems.sort((a, b) => b.subscriptions - a.subscriptions);
  }

  const sisterItems = await Promise.all(
    itemIds.map((id) => fetchWorkshopItemFromSisterApi(id))
  );

  return sisterItems
    .filter((item): item is LiveWorkshopItem => item !== null)
    .sort((a, b) => b.subscriptions - a.subscriptions);
}
