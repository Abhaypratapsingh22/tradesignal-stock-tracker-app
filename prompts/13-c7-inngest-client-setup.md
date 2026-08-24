# 13 Inngest Client Setup

Read AGENTS.md first and follow it strictly.

Install inngest, inngest-cli, @inngest/middleware-encryption, and configure process.env.GEMINI_API_KEY.

Client Initialization (lib/inngest/client.ts): Instantiate and export new Inngest({ id: "signalist", ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } } }).

Next.js API Handler (app/api/inngest/route.ts): Export { GET, POST, PUT } = serve({ client: inngest, functions: [sendSignUpEmail] }).

Background Job Definition (lib/inngest/functions.ts):

Implement sendSignUpEmail = inngest.createFunction({ id: "sign-up-email" }, { event: "app/user.created" }, async ({ event, step }) => { ... }).

Step 1 (step.ai.infer): Formulate the user profile string (country, investmentGoals, riskTolerance, preferredIndustry) and replace {user_profile} in personalizedWelcomeEmailPrompt from lib/inngest/prompts.ts. Invoke gemini-2.5-flash-lite using role "user" to generate a personalized introductory snippet.

Step 2 (step.run): Extract the generated text response, fallback to "Thanks for joining Signalist. You now have the tools to track markets and make smarter moves." on failure, and invoke sendWelcomeEmail via Nodemailer passing email, name, and introText.
