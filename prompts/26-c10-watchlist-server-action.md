# 26 Watchlist Server Action

Read AGENTS.md first and follow it strictly.

Implement end-to-end Watchlist CRUD actions and UI bindings:

Server Actions (lib/actions/watchlist.actions.ts):

Directive: "use server".

addToWatchlist({ symbol, company }: { symbol: string; company: string }): Authenticate active session via auth.api.getSession({ headers: await headers() }). Find or create entry in Watchlist collection (userId, symbol, company). Return { success: true }.

removeFromWatchlist(symbol: string): Authenticate active session, delete matching watchlist record by userId and symbol, and return { success: true }.

getUserWatchlist(): Retrieve all watchlist documents for current authenticated user, lean-mapped with formatted timestamps.

Watchlist Action Component (components/AddToWatchlistButton.tsx):

Client component ("use client") managing optimistic toggle states (starred/unstarred) with Sonner toast feedback.

Search Bar Integration (components/SearchCommand.tsx):

Bind a star action icon to the right of each stock result row in the Command dialog to allow 1-click watchlist additions directly from search queries.
