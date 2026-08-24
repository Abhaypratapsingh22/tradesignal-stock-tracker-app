# 20 Ai Summarization Pipeline

Read AGENTS.md first and follow it strictly.

Nodemailer Summary Dispatcher (lib/nodemailer/index.ts):

Implement sendNewsSummaryEmail({ email, date, newsContent }: NewsSummaryEmailData).

Load newsSummaryEmailTemplate from lib/nodemailer/templates.ts, dynamically inject runtime date and AI-generated newsContent, and send via Nodemailer transporter with subject "Signalist - Market News Summary for Today".

Inngest Workflow Engine (lib/inngest/functions.ts):

Implement sendDailyNewsSummary = inngest.createFunction({ id: "daily-news-summary" }, [{ event: "app/send.daily.news" }, { cron: "0 12 * * *" }], async ({ step }) => { ... }).

Step 1 (step.run: get-all-users): Invoke getAllUsersForNewsEmail(). Return early if user list is empty.

Step 2 (step.run: fetch-user-news): For each user, fetch watchlist symbols via getWatchlistSymbolsByEmail(user.email) and fetch news via getNews(symbols). Cap at 6 articles per user with fallback to general news.

Step 3 (AI Inference): For each user with articles, replace {news_data} in newsSummaryEmailPrompt with formatted JSON. Invoke gemini-2.5-flash-lite via step.ai.infer with dynamic step ID summarize-news-${user.email}. Parse the markdown-free HTML summary or provide a clean fallback.

Step 4 (step.run: send-news-emails): Map over users with generated summaries using Promise.all and dispatch emails using sendNewsSummaryEmail.

Register sendDailyNewsSummary inside app/api/inngest/route.ts.
