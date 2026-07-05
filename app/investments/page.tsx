import { FadeIn } from "@/animations/fade-in";
import { InvestmentHoldingsTable } from "@/components/investment";
import { PageLayout } from "@/components/page";
import { AVATARS } from "@/lib/avatars";
import {
  ETF_HOLDINGS,
  STOCK_HOLDINGS,
} from "@/lib/investment-holdings";
import { fetchMarketQuotes } from "@/lib/market-quotes";

function mergeHoldings<T extends { ticker: string }>(
  holdings: T[],
  quotes: Awaited<ReturnType<typeof fetchMarketQuotes>>
) {
  return holdings.map((holding) => ({
    ...holding,
    quote: quotes[holding.ticker] ?? null,
  }));
}

export default async function InvestmentsPage() {
  const quotes = await fetchMarketQuotes([
    ...STOCK_HOLDINGS.map((holding) => holding.ticker),
    ...ETF_HOLDINGS.map((holding) => holding.ticker),
  ]);

  const updatedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  return (
    <PageLayout
      title="Investment Strategies & Performance"
      description="Investment frameworks, portfolio construction principles, and live watchlist tracking across public markets."
      avatar={{
        src: AVATARS.thinking,
        alt: "Mark Schmidt thinking",
      }}
      wide
    >
      <FadeIn delay={180}>
        <InvestmentHoldingsTable
          title="Stocks"
          description="Below you can find a list of the most high potential stocks that I believe will have significant returns in the near to long term, accompanied by explanations."
          rows={mergeHoldings(STOCK_HOLDINGS, quotes)}
          updatedAt={updatedAt}
        />
      </FadeIn>

      <FadeIn delay={260}>
        <InvestmentHoldingsTable
          title="ETFs"
          description="These thematic ETFs have performed well for me in the past, and I believe will continue to have strong returns."
          rows={mergeHoldings(ETF_HOLDINGS, quotes)}
          updatedAt={updatedAt}
        />
      </FadeIn>

      <FadeIn delay={340}>
        <div className="rounded-2xl border border-ink/10 bg-paper-elevated/80 p-6 md:p-8">
          <h2 className="font-serif text-xl font-medium text-ink">
            Data source
          </h2>
          <p className="mt-3 font-serif text-sm leading-relaxed text-ink-muted">
            Nothing on this page constitutes financial advice. Daily performance
            badges use publicly accessible Yahoo Finance chart data refreshed
            every 5 minutes. No API key is required. Safety ratings, themes, and
            explanations are manually curated.
          </p>
        </div>
      </FadeIn>
    </PageLayout>
  );
}
