# 02 Responsive Header

Read AGENTS.md first and follow it strictly.
Create a sticky desktop/mobile header and navigation data layer:Navigation Data (lib/constants.ts): Export a strongly-typed NAV_ITEMS array as const containing objects with href and label (/ $\rightarrow$ "Dashboard", /search $\rightarrow$ "Search", /watchlist $\rightarrow$ "Watchlist").

 Derive and export a TypeScript type from this array.NavItems Component (components/NavItems.tsx): Create a client component ("use client") using Next.js usePathname(). 
 
 Map over NAV_ITEMS with dynamic active route styling: exact match for / (pathname === '/') and prefix match for other paths (pathname.startsWith(path)). Apply active state class text-gray-100, inactive class text-gray-400, hover class hover:text-yellow-500, and smooth color transitions.
 
 Header Component (components/Header.tsx): Render a semantic <header className="sticky top-0 header"> containing a <div className="container header-wrapper">. Add an accessible Next.js <Link href="/"> displaying the logo via Next.js <Image alt="tradesignal-logo" className="h-8 w-auto cursor-pointer" height="{32}" src="/assets/icons/logo.svg" width="{140}"/>. Render <NavItems/> inside a <nav className="hidden sm:block"> container and include placeholder placement for <UserDropdown/>.
