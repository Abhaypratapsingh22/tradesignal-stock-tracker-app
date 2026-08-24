"use client";

import { useTradingViewWidget } from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";

export interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config?: Record<string, unknown>;
  /** Total card height in px (title + chart). Default 480. */
  height?: number;
  className?: string;
}

/**
 * Renders a TradingView chart widget in a styled container.
 *
 * @param title - Optional heading displayed above the chart
 * @param scriptUrl - URL of the TradingView widget script
 * @param config - Configuration passed to the TradingView widget
 * @param height - Total container height in pixels
 * @param className - Additional CSS classes for the container
 * @returns The rendered TradingView widget
 */
export default function TradingViewWidget({
  title,
  scriptUrl,
  config = {},
  height = 480,
  className,
}: TradingViewWidgetProps) {
  // Reserve 60px for the title row; chart fills the rest.
  const titleHeight = title ? 60 : 0;
  const chartHeight = height - titleHeight;

  const containerRef = useTradingViewWidget(scriptUrl, config, chartHeight);

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-lg border border-[#2b3139] bg-[#1e2329]",
        className,
      )}
      style={{ height }}
    >
      {title && (
        <div className="flex shrink-0 items-center px-5 py-4">
          <h3 className="text-lg font-semibold leading-none text-[#eaecef]">
            {title}
          </h3>
        </div>
      )}

      {/* TradingView mounts its iframe here */}
      <div
        ref={containerRef}
        className="tradingview-widget-container min-w-0 flex-1"
      />
    </div>
  );
}
