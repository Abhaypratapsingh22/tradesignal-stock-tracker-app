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

follow this exact UI 
@prompt_material/03-dashboard.png

heatmap code tradeview code - 
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "dataSource": "SPX500",
          "blockSize": "market_cap_basic",
          "blockColor": "change",
          "grouping": "sector",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "exchanges": [],
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/heatmap/stock/" rel="noopener nofollow" target="_blank"><span className="blue-text">Stock Heatmap</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);


symbol overview tradeview -
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "lineWidth": 2,
          "lineType": 0,
          "chartType": "area",
          "fontColor": "rgb(106, 109, 120)",
          "gridLineColor": "rgba(46, 46, 46, 0.06)",
          "volumeUpColor": "rgba(34, 171, 148, 0.5)",
          "volumeDownColor": "rgba(247, 82, 95, 0.5)",
          "backgroundColor": "#ffffff",
          "widgetFontColor": "#0F0F0F",
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f",
          "colorTheme": "light",
          "isTransparent": false,
          "locale": "en",
          "chartOnly": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "symbols": [
            [
              "Apple",
              "NASDAQ:AAPL|1D"
            ],
            [
              "Google",
              "NASDAQ:GOOGL|1D"
            ],
            [
              "Microsoft",
              "NASDAQ:MSFT|1D"
            ]
          ],
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "fontSize": "10",
          "headerFontSize": "medium",
          "autosize": true,
          "width": "100%",
          "height": "100%",
          "noTimeScale": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span className="blue-text">Apple</span></a><span className="comma">,</span>&nbsp;<a href="https://www.tradingview.com/symbols/NASDAQ-GOOGL/" rel="noopener nofollow" target="_blank"><span className="blue-text">Google</span></a><span className="comma">,</span><span className="and">&nbsp;and&nbsp;</span><a href="https://www.tradingview.com/symbols/NASDAQ-MSFT/" rel="noopener nofollow" target="_blank"><span className="blue-text">Microsoft stock price</span></a><span className="trademark">&nbsp;by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
