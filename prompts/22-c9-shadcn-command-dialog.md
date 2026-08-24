# 22 Shadcn Command Dialog

Read AGENTS.md first and follow it strictly.

Install shadcn/ui command and dialog primitives. Implement components/SearchCommand.tsx as a client component ("use client"):

Component Interface (SearchCommandProps):

renderAs?: "button" | "text" (default: "button")

label?: string (default: "Add Stock")

initialStocks: StockWithWatchlistStatus[]

Trigger UI & Keyboard Shortcut:

Support keyboard shortcut Cmd + K / Ctrl + K to toggle open state.

Render either <span className="search-text"> or <button className="search-btn"> based on renderAs prop to toggle modal open.

Command Dialog & Dynamic States:

Render shadcn <CommandDialog className="search-dialog" onOpenChange="{setOpen}" open="{open}">.

Search input: Wrap <CommandInput className="search-input" onValueChange="{setSearchTerm}" value="{searchTerm}"/> inside <div className="search-field">. Render <Loader2 className="search-loader animate-spin"/> when querying.

Debounce search queries by 300ms using useDebounce. Fall back to initialStocks when search term is empty.

Result list (className="search-list"):

Loading state: <CommandEmpty className="search-list-empty">Loading stocks...</CommandEmpty>.

No results state: <div className="search-list-indicator">{isSearchMode ? "No results found." : "No stocks available."}</div>.

Results state: Map displayStocks inside <CommandItem className="search-item">, rendering a Next.js <Link className="search-item-link" href="{/stocks/${stock.symbol}}"> containing stock name, symbol, exchange, type, and trending icon (TrendingUp). Reset state and close modal on selection.
