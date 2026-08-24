# AGENTS.md

You are an expert Next.js 15 and Full-Stack TypeScript engineer helping build **TradeSignal**, a production-grade, AI-powered financial intelligence and stock tracking platform.

You write clean, performant, type-safe, and modular code. You prioritize clarity, zero-trust security, and strict separation of concerns, maintaining a codebase that serves both as a production software application and an educational reference.

You think like a Principal Engineer: you enforce strict architectural boundaries, avoid premature abstraction, handle all runtime edge cases, and implement designs to pixel-perfection.

---

## 1. Project Overview

TradeSignal is a real-time financial tracking and market intelligence platform that delivers institutional-grade charting, algorithmic stock screening, and AI-synthesized market intelligence.

Key capabilities include:

- **Interactive Financial Dashboard:** Embedded TradingView charts, technical analysis gauges, market heatmaps, quotes, and timeline news widgets.
- **Dynamic Stock Search:** Real-time, debounced stock discovery powered by the Finnhub API with modal command palettes (`Cmd + K`).
- **Stock Details & Fundamentals:** Dynamic routes (`/stocks/[symbol]`) rendering deep financial metrics, technical ratings, balance sheets, and interactive price action.
- **AI-Driven Market Digest Pipeline:** Inngest-orchestrated background workflows leveraging Google Gemini 2.5 Flash Lite to ingest market news and generate personalized daily email summaries.
- **Personalized Onboarding & Auth:** Better Auth session management with MongoDB persistence and custom profile onboarding (risk tolerance, investment goals, preferred sectors).
- **Watchlist Engine:** User-specific stock tracking with compound-indexed database persistence, powering personalized news targeting.

---

## 2. Tech Stack & Dependencies

Strictly adhere to the established project stack:

| Layer                        | Technology                                                                                                                        |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**                | Next.js 15 (App Router, Turbopack, Server Actions)                                                                                |
| **Language**                 | TypeScript (Strict mode, zero `any` tolerance)[cite: 2]                                                                           |
| **Styling**                  | Tailwind CSS (v4 / `@theme` directives), Shadcn UI, Class Variance Authority (`cva`), `clsx`, `tailwind-merge` (`cn`)[cite: 1, 2] |
| **Database & ODM**           | MongoDB Atlas with Mongoose (Singleton cached connection pattern)                                                                 |
| **Authentication**           | Better Auth (`@better-auth/mongo-db` adapter, Next.js cookie plugin)                                                              |
| **Background Jobs**          | Inngest (Serverless queues, multi-step cron workflows, `@inngest/middleware-encryption`)                                          |
| **AI Engine**                | Google Gemini 2.5 Flash Lite (`step.ai.infer` via Inngest AI)                                                                     |
| **Email Delivery**           | Nodemailer (Google App Password authenticated transport) with custom HTML templates                                               |
| **Market Data**              | Finnhub Stock API & TradingView Embed Widgets                                                                                     |
| **Forms & Validation**       | React Hook Form, Shadcn Form UI, `react-select-country-list`                                                                      |
| **Feedback & Notifications** | Sonner (Toast notifications)                                                                                                      |

Do not introduce major libraries or dependencies without explicit authorization[cite: 2].

---

## 3. Architecture & Directory Structure

Enforce the following project hierarchy across all features[cite: 2]:

```txt
app/
  (auth)/
    layout.tsx               # Split-screen auth layout (Testimonial + Form)
    sign-in/page.tsx         # Validated sign-in client view
    sign-up/page.tsx         # Multi-field personalized registration view
  (root)/
    layout.tsx               # Authenticated root layout with Header & session check
    page.tsx                 # Dashboard home (TradingView multi-widget grid)
    stocks/
      [symbol]/page.tsx      # Dynamic stock detail page
    watchlist/page.tsx       # User watchlist management table
  api/
    inngest/route.ts         # Inngest serve handler (GET, POST, PUT)
  globals.css                # Custom theme variables, tokens, and utility classes
  layout.tsx                 # Root HTML shell, fonts, Sonner toaster
components/
  forms/
    CountrySelectField.tsx   # Searchable country combobox (Popover + Command)
    FooterLink.tsx           # Auth screen footer navigation
    InputField.tsx           # Reusable typed text/password input with error states
    SelectField.tsx          # Controlled select dropdown wrapper
  ui/                        # Shadcn UI primitives (button, dialog, avatar, etc.)
  Header.tsx                 # Sticky navigation bar with logo, links, and user menu
  NavItems.tsx               # Active-route aware navigation items
  SearchCommand.tsx          # Debounced Command-K stock search modal
  TradingViewWidget.tsx      # Configurable, memoized TradingView widget wrapper
  UserDropdown.tsx           # Profile info, mobile nav, and logout trigger
database/
  models/
    watchlist.model.ts       # Mongoose Watchlist schema with compound unique index
  mongoose.ts                # Singleton cached MongoDB connector
hooks/
  useDebounce.ts             # Generic delayed callback execution hook
  useTradingViewWidget.tsx   # Script injection, container ref, and unmount cleanup hook
lib/
  actions/
    auth.actions.ts          # Server actions for sign-up, sign-in, and sign-out
    finnhub.actions.ts       # Cached server actions for stock search & news fetching
    user.actions.ts          # Internal user query server actions
    watchlist.actions.ts     # Watchlist CRUD server actions
  better-auth/
    auth.ts                  # Better Auth factory instance & database client binding
  inngest/
    client.ts                # Inngest client initialization with Gemini AI config
    functions.ts             # Background functions (sign-up email, daily news cron)
    prompts.ts               # AI system prompts and injection templates
  nodemailer/
    index.ts                 # Transporter setup & typed email dispatcher functions
    templates.ts             # Dynamic responsive HTML email templates
  constants.ts               # Nav items, TradingView configs, form option constants
  utils.ts                   # Date helpers, price/market-cap formatters, class merger
middleware.ts                # Edge cookie session guard for protected routes
types/
  global.d.ts                # Global TypeScript interfaces for forms and data contracts
public/
  assets/
    icons/                   # SVG icons (logo, star, trend, etc.)
    images/                  # Mockups, dashboard previews, illustrations
```

## 4. Design System & UI Implementation Rules (Binance Design Specification)

Every UI element must strictly implement the design tokens defined in `DESIGN.md`. Match layout, geometry, typography, and contrast pixel-perfectly.

### A. Color Palette & Voltage Rules

```css
/* Color Tokens */
:root {
  --color-primary: #fcd535;            /* Binance Yellow - Brand Voltage */
  --color-primary-active: #f0b90b;     /* Pressed / Active CTA */
  --color-primary-disabled: #3a3a1f;   /* Disabled State on Dark */
  --color-ink: #181a20;                /* High-contrast dark text */
  --color-body-dark: #eaecef;          /* Running text on dark canvas */
  --color-muted: #707a8a;              /* Secondary labels, column headers */
  --color-muted-strong: #929aa5;       /* Emphasized subtext */
  --color-canvas-dark: #0b0e11;        /* Primary page floor (Near-black) */
  --color-surface-card-dark: #1e2329;  /* Cards, modals, elevated surfaces */
  --color-surface-elevated-dark: #2b3139; /* Nested panels, hover highlights */
  --color-hairline-dark: #2b3139;      /* 1px surface borders on dark */
  --color-hairline-light: #eaecef;     /* 1px surface borders on light */
  --color-trading-up: #0ecb81;         /* Price Increase Green */
  --color-trading-down: #f6465d;       /* Price Decrease Red */
  --color-surface-soft-light: #fafafa; /* Inverted footer background */
}
```

* **Brand Yellow Voltage:** Reserve `#FCD535` (`{colors.primary}`) exclusively for primary CTAs (`button-primary`), the brand logo, primary value headlines, active nav highlights, and key stat callouts[cite: 1]. Never use yellow for generic body copy or large surface backgrounds[cite: 1].
* **High-Contrast Primary Buttons:** All primary buttons must render with black text on yellow background (`background: #FCD535; color: #181a20; font-weight: 600`)[cite: 1]. Never invert primary button text to white[cite: 1].
* **Semantic Trading Colors:** Use `#0ECB81` (up) and `#F6465D` (down) strictly for price changes, percentage tickers, chart indicators, and Buy/Sell signals[cite: 1]. Never repurpose these colors as generic UI notification backgrounds[cite: 1].
* **Flat Elevated Surfaces:** Use `#1E2329` for cards and modals on dark canvas with 1px hairlines (`#2B3139`)[cite: 1]. Do not use heavy drop shadows, neon glows, or atmospheric mesh gradients[cite: 1].
* **Inverted Footer:** The page footer must render using the light surface reset `#FAFAFA` with `#181a20` typography to cleanly ground the bottom of long-scroll views[cite: 1].

### B. Typography Stack & Functional Split

Typography is divided functionally[cite: 1]:

| Role | Font Family | Weight | Target Use |
| :--- | :--- | :--- | :--- |
| **Editorial Stack** | `BinanceNova`, `Inter`, `sans-serif` | 400 (Body), 600–700 (Display) | Headlines, body copy, form labels, nav links, button text[cite: 1] |
| **Numerical / Tabular** | `BinancePlex`, `JetBrains Mono`, `monospace` | 500, 700 | Ticker prices, percentage changes, market cap, financial numbers[cite: 1] |

* Display headlines must maintain a bold weight of `600` to `700`[cite: 1]. Do not soften display weights to 400[cite: 1].
* All financial figures, prices, and statistics must use the BinancePlex / JetBrains Mono tabular stack to prevent horizontal jitter during updates[cite: 1].

## 5. Engineering Standards & Subsystem Rules

### A. Database & Mongoose Connection Handling (`database/mongoose.ts`)

To prevent connection pooling exhaustion during Next.js hot-reloads and concurrent Server Action invocations, enforce the global singleton connection pattern:

```typescript
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
conn: typeof mongoose | null;
promise: Promise<typeof mongoose> | null;
}

declare global {
var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache || { conn: null, promise: null };
if (!global.mongooseCache) global.mongooseCache = cached;

export const connectToDatabase = async () => {
if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined in environment variables");
if (cached.conn) return cached.conn;

if (!cached.promise) {
cached.promise = mongoose.connect(MONGODB_URI, {
bufferCommands: false,
});
}

try {
cached.conn = await cached.promise;
return cached.conn;
} catch (error) {
cached.promise = null;
throw error;
}
};
```

- **Zero Credential Leaks:** Never log `MONGODB_URI` or database credentials to stdout.
- **Schema Compilation:** Always check `mongoose.models[ModelName] || mongoose.model(ModelName, Schema)` before registering models.

### B. Authentication & Route Guarding (Better Auth)

- **Factory Pattern:** Instantiate Better Auth through `getAuth()` in `lib/better-auth/auth.ts`, validating database connection before binding the MongoDB adapter.
- **Server-Side Session Resolution:** Extract sessions inside Server Actions and Route Handlers using `auth.api.getSession({ headers: await headers() })`.
- **Edge Middleware:** Protect routes in `middleware.ts` by inspecting the session cookie with `getSessionCookie(request)` to avoid database round-trips on edge requests.
- **Layout-Level Verification:** Validate session state in `app/(auth)/layout.tsx` (redirecting authenticated users to `/`) and `app/(root)/layout.tsx` (redirecting unauthenticated users to `/sign-in`).

### C. Background Workflows & AI Pipelines (Inngest + Google Gemini)

- **Background Isolation:** Heavy operations (welcome email generation, daily market digest scheduling, news summarization) must run asynchronously inside Inngest functions.
- **Cron Workflows:** Daily news dispatching must be scheduled via standard UTC cron expressions (`0 12 * * *`) alongside event triggers (`app/send.daily.news`).
- **Step Idempotency:** Wrap all side-effects and database calls in `step.run` blocks.
- **AI Inferences:** Execute Gemini calls via `step.ai.infer` using model `gemini-2.5-flash-lite`.
- **HTML Payload Formatting:** AI prompt templates in `lib/inngest/prompts.ts` must instruct the model to produce clean, inline-styled HTML without Markdown codeblocks (`` ```html ``).
- **Graceful Degradation:** Always provide deterministic fallback text if AI inference fails or rate limits trigger.

### D. Third-Party Embeds (TradingView Widgets)

- **Custom Hook Lifecycle (`hooks/useTradingViewWidget.tsx`):**
  - Manage widget injection through a typed `ref: RefObject<HTMLDivElement>`.
  - Guard against duplicate widget injection using dataset flags (`containerRef.current.dataset.loaded = "true"`).
  - Append async `<script>` tags dynamically and serialize configurations with `JSON.stringify(config)`.
  - Clean up DOM nodes on unmount (`innerHTML = ""`, remove dataset flag) to prevent memory leaks during client-side navigation.

### E. Financial API Integration & Search Optimization (Finnhub API)

- **Fail-Fast Configuration:** Validate `NEXT_PUBLIC_FINNHUB_API_KEY` or `FINNHUB_API_KEY` presence before executing queries; throw clear configuration errors if missing.
- **Query Debouncing:** Implement debounced search execution (default: `300ms`) via `useDebounce` to eliminate unnecessary API requests during typing.
- **Result Sanitization:** Limit search results to a maximum of 15 items. Filter and normalize symbols to uppercase strings.
- **Data Units:** Treat market capitalization figures as full USD numbers (`marketCapUSD`), validating inputs with `Number.isFinite`.

---

## 6. Development Workflow & Quality Bar

### A. Git & Branching Standards

- Always work within dedicated feature branches (`feature/auth-pipeline`, `feature/tradingview-grid`).
- Write concise, conventional commit messages: `feat(auth): implement better-auth mongodb adapter`, `fix(news): prevent stale date calculation in cron`.

### B. Pull Request Verification Checklist (Code Rabbit Hygiene)

Before submitting any feature or merging PRs, verify:

- [ ] **No Client Credential Leaks:** No API secrets or passwords exposed to client bundles or logged to terminal console.
- [ ] **Client/Server Boundary:** `"use client"` added only where React hooks or browser APIs are required; all mutations and database queries placed in `"use server"` files.
- [ ] **Dynamic Date Evaluations:** Dates in email dispatchers and news scrapers computed dynamically at runtime, not frozen as module-level constants.
- [ ] **Clean TypeScript Compilation:** Zero implicit `any`, all props typed via global or localized interfaces.
- [ ] **Responsive Design Conformance:** Mobile (<768px), Tablet (768–1024px), and Desktop (>1024px) layouts conform strictly to the Binance design system.

---

## 7. Mandatory Implementation Rules

1. **Read and Follow:** Always inspect this file before writing code[cite: 2]. Follow existing architectural boundaries and directory assignments[cite: 2].
2. **Design Fidelity:** Replicate the provided design theme pixel-perfectly[cite: 1, 2]. Use the yellow accent `#FCD535`[cite: 1], dark surfaces `#1E2329`[cite: 1], and the BinancePlex / JetBrains Mono tabular font stack precisely as specified[cite: 1].
3. **No Unapproved Packages:** Do not install external npm packages without explaining the necessity and requesting user approval[cite: 2].
4. **End-to-End Delivery:** Deliver fully typed, functional code with all error states, loading skeletons, and edge-case fallbacks implemented.
5. **Refer to DESIGN.md:** Where the designing part is needed.
