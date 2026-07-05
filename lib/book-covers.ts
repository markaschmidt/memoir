const AMAZON_ASIN_PATTERN = /\/dp\/([A-Z0-9]{10})(?:[/?]|$)/i;

export function extractAmazonAsin(href: string): string | null {
  const match = href.match(AMAZON_ASIN_PATTERN);
  return match?.[1]?.toUpperCase() ?? null;
}

export function amazonCoverUrl(href: string): string {
  const asin = extractAmazonAsin(href);
  if (!asin) return "";

  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
}

export function openLibraryIsbnCoverUrl(href: string): string {
  const asin = extractAmazonAsin(href);
  if (!asin) return "";

  return `https://covers.openlibrary.org/b/isbn/${asin}-M.jpg`;
}

export function openLibraryTitleCoverUrl(title: string): string {
  return `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
}

export function bookCoverUrls(href: string, title: string) {
  const fallbacks = [
    openLibraryIsbnCoverUrl(href),
    openLibraryTitleCoverUrl(title),
  ].filter(Boolean);

  return {
    coverUrl: amazonCoverUrl(href),
    coverFallbackUrls: fallbacks,
  };
}
