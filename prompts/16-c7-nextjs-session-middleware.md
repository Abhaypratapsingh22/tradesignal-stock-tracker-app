# 16 Nextjs Session Middleware

Read AGENTS.md first and follow it strictly.

Implement route access control using Better Auth session cookies:

Edge Middleware (middleware/index.ts / middleware.ts):

Use Better Auth's getSessionCookie(request) helper to inspect active session cookies without hitting the database.

Define route matchers: redirect unauthenticated requests away from protected root routes to /sign-in.

Server-Side Auth Layout Guard (app/(auth)/layout.tsx):

Inspect current session at the layout level via await auth.api.getSession({ headers: await headers() }).

If an active session user exists, immediately redirect to / using redirect from next/navigation.

Protected Root Layout Data Layer (app/(root)/layout.tsx):

Check active session via auth.api.getSession({ headers: await headers() }). Redirect unauthenticated users to /sign-in.

Pass authenticated user identity (id, name, email) down to <Header/> and <UserDropdown/>, removing placeholder user objects.
