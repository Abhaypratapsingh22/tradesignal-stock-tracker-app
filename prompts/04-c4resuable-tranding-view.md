# 04 Reusable Trading View

Read AGENTS.md first and follow it strictly.

Constants Configuration (lib/constants.ts): Export widget configuration objects: marketOverviewWidgetConfig, heatMapWidgetConfig, topStoriesWidgetConfig, and marketDataConfig (configured for dark theme and full container fit), along with industry, risk tolerance, and investment goal constants.

Dynamic Script Loading Hook (hooks/useTradingViewWidget.tsx):

Create a client hook ("use client") accepting scriptUrl: string, config: Record<string, unknown>, and height: number = 600.

Initialize a typed containerRef = useRef<HTMLDivElement | null>(null).

In useEffect, guard against missing refs and prevent duplicate script injection using a dataset flag (containerRef.current.dataset.loaded).

Reset innerHTML to an inner wrapper <div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>.

Create an async <script> element setting src to scriptUrl, innerHTML to JSON.stringify(config), and append it to containerRef.current while marking dataset.loaded = "true".

Implement strict cleanup on unmount: clear innerHTML and delete dataset.loaded. Return containerRef.
