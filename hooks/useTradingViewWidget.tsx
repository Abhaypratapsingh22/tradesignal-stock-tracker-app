"use client";

import { useEffect, useRef } from "react";

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
    widgetEl.style.height = "calc(100% - 32px)";
    container.appendChild(widgetEl);

    // TradingView copyright attribution element (required by TradingView terms)
    const copyrightEl = document.createElement("div");
    copyrightEl.className = "tradingview-widget-container__copyright";
    const copyrightLink = document.createElement("a");
    copyrightLink.href = "https://www.tradingview.com/";
    copyrightLink.rel = "noopener nofollow";
    copyrightLink.target = "_blank";
    copyrightLink.textContent = "Track all markets on TradingView";
    copyrightEl.appendChild(copyrightLink);
    container.appendChild(copyrightEl);

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
