# 23 Header Pre Fetching

Read AGENTS.md first and follow it strictly.

Server-Side Initial Stock Pre-fetching (components/Header.tsx):

Fetch initial top popular stocks server-side using await searchStocks() and pass initialStocks down to <NavItems/> and <UserDropdown/>.

Dynamic Route-Based Search Trigger (components/NavItems.tsx):

Update NavItems to accept initialStocks: StockWithWatchlistStatus[].

Replace fragile string label matching with exact route matching (item.href === '/search').

When rendering the search route item, render <SearchCommand initialStocks="{initialStocks}" label="Search" renderAs="text"/> inside <li key="search-trigger"> instead of a regular navigation link.

Mobile Dropdown Integration (components/UserDropdown.tsx):

Pass initialStocks into embedded mobile <NavItems initialStocks="{initialStocks}"/> to ensure seamless Cmd+K and touch search capability across mobile viewports.
