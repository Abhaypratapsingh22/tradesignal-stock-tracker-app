# 06 Responsive Homepage

Read AGENTS.md first and follow it strictly.

Implement the responsive dashboard grid layout on the homepage in app/(root)/page.tsx utilizing TradingViewWidget:

Define the base TradingView embed URL constant: [https://s3.tradingview.com/external-embedding/embed-widget-](https://s3.tradingview.com/external-embedding/embed-widget-).

Construct two responsive grid sections (<section className="grid w-full gap-8 home-section">):

Section 1 (Market Overview & Heatmap):

Col 1 (md:col-span-1 xl:col-span-1): <TradingViewWidget> with title "Market Overview", script embed-widget-market-overview.js, config marketOverviewWidgetConfig, and class "custom-chart".

Col 2 (md:col-span-1 xl:col-span-2): <TradingViewWidget> with title "Stock Heatmap", script embed-widget-stock-heatmap.js, and config heatMapWidgetConfig.

Section 2 (Top Stories & Market Quotes):

Col 1 (h-full md:col-span-1 xl:col-span-1): <TradingViewWidget> (no title) with script embed-widget-timeline.js, config topStoriesWidgetConfig, and class "custom-chart".

Col 2 (h-full md:col-span-1 xl:col-span-2): <TradingViewWidget> (no title) with script embed-widget-market-quotes.js, and config marketDataConfig.

Preserve full responsive behavior (collapsing into a single-column layout on mobile, multi-span grid on md/xl screens).
