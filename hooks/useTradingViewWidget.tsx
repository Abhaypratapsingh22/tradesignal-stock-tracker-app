"use client";

import { useEffect, useRef } from "react";

/**
 * Creates a ref for a container that hosts an initialized TradingView widget.
 *
 * @param scriptUrl - The URL of the TradingView widget script
 * @param config - The configuration passed to the widget
 * @param height - The container height in pixels
 * @returns A ref to the widget container element
 */
export function useTradingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 480,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || container.dataset.loaded === "true") {
      return;
    }

    // Set explicit dimensions on the outer container so TradingView reads
    // the correct width when it initialises its iframe.
    container.style.width = "100%";
    container.style.height = `${height}px`;

    // Inner widget placeholder that TradingView replaces with its iframe
    const widgetEl = document.createElement("div");
    widgetEl.className = "tradingview-widget-container__widget";
    widgetEl.style.width = "100%";
    widgetEl.style.height = "100%";
    container.appendChild(widgetEl);

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    container.appendChild(script);

    container.dataset.loaded = "true";

    return () => {
      container.innerHTML = "";
      container.style.width = "";
      container.style.height = "";
      delete container.dataset.loaded;
    };
  }, [config, height, scriptUrl]);

  return containerRef;
}
