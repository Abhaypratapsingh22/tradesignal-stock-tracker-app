# 05 Generic Tranding View

Read AGENTS.md first and follow it strictly.

Implement components/TradingViewWidget.tsx as a client component ("use client") wrapping the useTradingViewWidget hook.

Component Interface (TradingViewWidgetProps):

title?: string

scriptUrl: string

config?: Record<string, unknown>

height?: number (default: 600)

className?: string

Rendering & Structure:

Outer container: <div className="w-full">.

Optional title header: Render an <h3> with className="font-semibold text-2xl text-gray-100 mb-5" if title is provided.

Widget container: Render <div ref={containerRef} className={cn("tradingview-widget-container", className)} /> passing the ref returned by useTradingViewWidget.

Ensure clean utility class merging using cn() and full TypeScript type safety across all props.
