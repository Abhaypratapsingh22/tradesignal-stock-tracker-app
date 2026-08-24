# 01 Root Layout Group Architecture

Read AGENTS.md first and follow it strictly.

Reorganize the routing structure into a dedicated (root) route group under app/. Move app/page.tsx inside app/(root)/page.tsx and create a dedicated shared layout at app/(root)/layout.tsx. Preserve the global app/layout.tsx for base providers, dark mode, and font imports.

In app/(root)/layout.tsx, accept children: React.ReactNode, wrap content inside a <main className="min-h-screen text-gray-400"> and an inner <div className="container py-10">, and render the upcoming <Header/> component at the top across all child routes.

Update app/(root)/page.tsx with className="flex min-h-screen home-wrapper" and placeholder text "Home". Ensure routing paths are unaffected so that / continues resolving to the home page without exposing (root) in the URL.
