# 18 Finnhub Market News Data Layer

Read AGENTS.md first and follow it strictly.

Configure .env with NEXT_PUBLIC_FINNHUB_API_KEY (or FINNHUB_API_KEY).

Date & Unit Utilities (lib/utils.ts):

Export a dynamic date formatter getFormattedToday(): string computed at runtime (preventing stale module-level constants).

Update market capitalization formatting helper to accept marketCapUSD: number, validate it using Number.isFinite, and treat values as full USD amounts rather than millions.

Finnhub Server Actions (lib/actions/finnhub.actions.ts):

Directive: "use server".

Fail fast with an explicit error if the Finnhub API key is not defined.

Implement getNews(symbols?: string[]): Promise<MarketArticle[]>:

Fetch company news per symbol (/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}) across a 5-day window.

If no symbols or watchlists are present, gracefully fallback to general market news (/api/v1/news?category=general).

Sanitize, validate, format, and return articles matching the application article schema.
