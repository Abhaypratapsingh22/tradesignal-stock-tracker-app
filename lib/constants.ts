export const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/search", label: "Search" },
  { href: "/watchlist", label: "Watchlist" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

const WIDGET_LOCALE = "en";

export const marketOverviewWidgetConfig = {
  colorTheme: "dark",
  dateRange: "12M",
  showChart: true,
  locale: WIDGET_LOCALE,
  largeChartUrl: "",
  isTransparent: false,
  showSymbolLogo: true,
  showFloatingTooltip: false,
  width: "100%",
  height: "100%",
  plotLineColorGrowing: "#0ecb81",
  plotLineColorFalling: "#f6465d",
  gridLineColor: "#2b3139",
  scaleFontColor: "#929aa5",
  belowLineFillColorGrowing: "rgba(14, 203, 129, 0.12)",
  belowLineFillColorFalling: "rgba(246, 70, 93, 0.12)",
  belowLineFillColorGrowingBottom: "rgba(14, 203, 129, 0)",
  belowLineFillColorFallingBottom: "rgba(246, 70, 93, 0)",
  symbolActiveColor: "#fcd535",
  tabs: [
    {
      title: "Indices",
      symbols: [
        { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
        { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
        { s: "INDEX:DOWI", d: "Dow 30" },
        { s: "INDEX:NKY", d: "Nikkei 225" },
        { s: "INDEX:DEU40", d: "DAX Index" },
        { s: "FOREXCOM:UKXGBP", d: "UK 100" },
      ],
    },
  ],
} as const;

export const heatMapWidgetConfig = {
  dataSource: "SPX500",
  grouping: "sector",
  blockSize: "market_cap_basic",
  blockColor: "change",
  locale: WIDGET_LOCALE,
  symbolUrl: "",
  colorTheme: "dark",
  hasTopBar: true,
  isDataSetEnabled: true,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  width: "100%",
  height: "100%",
} as const;

export const topStoriesWidgetConfig = {
  feedMode: "all_symbols",
  colorTheme: "dark",
  isTransparent: false,
  displayMode: "regular",
  width: "100%",
  height: "100%",
  locale: WIDGET_LOCALE,
} as const;

export const marketDataConfig = {
  colorTheme: "dark",
  isTransparent: false,
  locale: WIDGET_LOCALE,
  width: "100%",
  height: "100%",
  largeChartUrl: "",
  showSymbolLogo: true,
  backgroundColor: "#1e2329",
  gridLineColor: "#2b3139",
  fontColor: "#eaecef",
  showFloatingTooltip: false,
  tabs: [
    {
      title: "Indices",
      symbols: [
        { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
        { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
        { s: "INDEX:DOWI", d: "Dow 30" },
      ],
    },
    {
      title: "Commodities",
      symbols: [
        { s: "TVC:GOLD", d: "Gold" },
        { s: "TVC:SILVER", d: "Silver" },
        { s: "NYMEX:CL1!", d: "Crude Oil" },
      ],
    },
  ],
} as const;

export const INDUSTRIES = [
  "Technology",
  "Healthcare",
  "Financial Services",
  "Consumer Cyclical",
  "Communication Services",
  "Industrials",
  "Consumer Defensive",
  "Energy",
  "Basic Materials",
  "Real Estate",
  "Utilities",
] as const;

export const RISK_TOLERANCE = ["Low", "Medium", "High"] as const;

export const RISK_TOLERANCE_OPTIONS = RISK_TOLERANCE;

export const INVESTMENT_GOALS = [
  "Growth",
  "Income",
  "Preservation of Capital",
  "Speculation",
] as const;
