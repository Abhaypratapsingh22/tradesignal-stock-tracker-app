# 24 Dynamic Stock Details Page

Read AGENTS.md first and follow it strictly.

Implement the dynamic stock details route at app/(root)/stocks/[symbol]/page.tsx as an asynchronous Next.js Server Component:

Route Parameters & Setup:

Extract dynamic route param symbol from params (ensure uppercase normalization).

Render a responsive 2-column CSS grid layout (grid grid-cols-1 lg:grid-cols-3 gap-8).

Left Column (lg:col-span-2 space-y-8):

Symbol Info Card: Top stock header displaying ticker, pricing data, market status, and an <AddToWatchlistButton symbol="{symbol}"/> action button (do not duplicate the symbol string next to the button).

Advanced Real-Time Chart: Render <TradingViewWidget> with script embed-widget-advanced-chart.js, passing dynamic symbol config (e.g., NASDAQ:${symbol}), dark theme, and height 500.

Company Financials: Render <TradingViewWidget> with script embed-widget-financials.js, displaying balance sheet, cash flow, profitability, and valuation metrics.

Right Column (lg:col-span-1 space-y-8):

Company Profile: Render <TradingViewWidget> with script embed-widget-symbol-profile.js showing company summary and sector info.

Technical Analysis Gauge: Render <TradingViewWidget> with script embed-widget-technical-analysis.js displaying live buy/sell indicator meters.

Ensure full reuse of the generic TradingViewWidget component and proper responsive stacking on mobile viewports.
