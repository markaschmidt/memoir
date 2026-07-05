export type MarketQuote = {
  ticker: string;
  name: string | null;
  price: number | null;
  changePercent: number | null;
  currency: string | null;
};

type YahooChartResponse = {
  chart?: {
    result?: Array<{
      meta?: {
        symbol?: string;
        shortName?: string;
        longName?: string;
        regularMarketPrice?: number;
        currency?: string;
      };
      indicators?: {
        quote?: Array<{
          close?: (number | null)[];
        }>;
      };
    }>;
  };
};

async function fetchQuoteForTicker(ticker: string): Promise<MarketQuote> {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=5d`,
      {
        headers: { "User-Agent": "Mozilla/5.0" },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      return { ticker, name: null, price: null, changePercent: null, currency: null };
    }

    const data = (await response.json()) as YahooChartResponse;
    const result = data.chart?.result?.[0];
    const meta = result?.meta;

    if (!meta) {
      return { ticker, name: null, price: null, changePercent: null, currency: null };
    }

    const price = meta.regularMarketPrice ?? null;

    // chartPreviousClose is the close from the START of the range, not yesterday.
    // Use the second-to-last value in the actual close series for the true prior-day close.
    const closes = result?.indicators?.quote?.[0]?.close ?? [];
    const validCloses = closes.filter((c): c is number => c !== null && c !== undefined);
    const previousClose = validCloses.length >= 2
      ? validCloses[validCloses.length - 2]
      : null;

    const changePercent =
      price !== null && previousClose !== null && previousClose !== 0
        ? ((price - previousClose) / previousClose) * 100
        : null;

    return {
      ticker: meta.symbol ?? ticker,
      name: null,
      price,
      changePercent,
      currency: meta.currency ?? null,
    };
  } catch {
    return { ticker, name: null, price: null, changePercent: null, currency: null };
  }
}

export async function fetchMarketQuotes(
  tickers: string[]
): Promise<Record<string, MarketQuote>> {
  const uniqueTickers = [...new Set(tickers)];
  const quotes = await Promise.all(
    uniqueTickers.map((ticker) => fetchQuoteForTicker(ticker))
  );

  return Object.fromEntries(quotes.map((quote) => [quote.ticker, quote]));
}
