"use client";

import TradingViewWidget from "@/components/TradingViewWidget";
import {
  heatMapWidgetConfig,
  marketDataConfig,
  marketOverviewWidgetConfig,
  topStoriesWidgetConfig,
} from "@/lib/constants";

const TV_BASE = "https://s3.tradingview.com/external-embedding/embed-widget-";

/** Row height in px – matches the reference design */
const ROW_H = 500;

/**
 * Renders a responsive dashboard with market overview, stock heatmap, top stories, and market quote widgets.
 *
 * @returns The dashboard content.
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* ─── Section 1: Market Overview (1 col) + Stock Heatmap (2 cols) ─── */}
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* Market Overview – 1 column */}
        <div className="col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${TV_BASE}market-overview.js`}
            config={marketOverviewWidgetConfig}
            height={ROW_H}
          />
        </div>

        {/* Stock Heatmap – 2 columns */}
        <div className="col-span-1 md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={`${TV_BASE}stock-heatmap.js`}
            config={heatMapWidgetConfig}
            height={ROW_H}
          />
        </div>
      </section>

      {/* ─── Section 2: Top Stories (1 col) + Market Quotes (2 cols) ─── */}
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* Top Stories timeline – 1 column */}
        <div className="col-span-1">
          <TradingViewWidget
            scriptUrl={`${TV_BASE}timeline.js`}
            config={topStoriesWidgetConfig}
            height={ROW_H}
          />
        </div>

        {/* Market Quotes – 2 columns */}
        <div className="col-span-1 md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={`${TV_BASE}market-quotes.js`}
            config={marketDataConfig}
            height={ROW_H}
          />
        </div>
      </section>
    </div>
  );
}
