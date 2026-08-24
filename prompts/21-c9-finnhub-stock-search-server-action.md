# 21 Finnhub Stock Search Server Action

Read AGENTS.md first and follow it strictly.

Generic Debounce Hook (hooks/useDebounce.ts):

Create a client-side hook ("use client") useDebounce(callback: (...args: any[]) => void, delay: number).

Store timer reference via useRef<NodeJS.Timeout null |>(null).

Return a memoized useCallback that clears active timeouts and sets a new delayed execution for delay milliseconds.

Finnhub Search Action (lib/actions/finnhub.actions.ts):

Directive: "use server".

Implement cached server action searchStocks(query?: string): Promise<StockWithWatchlistStatus[]>:

If query is empty or trimmed to empty string, return top popular fallback stocks.

If query is provided, call Finnhub symbol lookup endpoint (/api/v1/search?q=${query}&token=${FINNHUB_API_KEY}).

Map, sanitize, and limit returned results to 15 items with consistent typing (symbol, name, exchange, type), ensuring zero client-side Node.js module leakage.
