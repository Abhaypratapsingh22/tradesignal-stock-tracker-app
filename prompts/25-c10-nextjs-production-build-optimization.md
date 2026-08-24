# 25 Nextjs Production Build Optimization

Read AGENTS.md first and follow it strictly.

Configure Next.js build options and deployment environment for zero-downtime Vercel deployments:

Build Error Tolerance (next.config.ts):

Configure typescript: { ignoreBuildErrors: true } and eslint: { ignoreDuringBuilds: true } to unblock continuous integration pipelines from non-fatal linting and typing warnings during Vercel builds.

Environment & Deployment Sync:

Prepare production environment variable mappings: ensure NODE_ENV="production", BETTER_AUTH_SECRET, BETTER_AUTH_URL, MONGODB_URI, GEMINI_API_KEY, NODEMAILER_EMAIL, NODEMAILER_PASSWORD, and NEXT_PUBLIC_FINNHUB_API_KEY are configured.

Connect Inngest to the production Vercel deployment URL via the manual webhook endpoint (https://<DEPLOYED_DOMAIN>/api/inngest).
