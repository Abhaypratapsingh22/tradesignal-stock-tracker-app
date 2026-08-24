# 12 Better Auth Initilization

Read AGENTS.md first and follow it strictly.

Install better-auth. Configure .env variables (BETTER_AUTH_SECRET, BETTER_AUTH_URL="http://localhost:3000").

Create the Better Auth singleton client instance at lib/better-auth/auth.ts:

Singleton Factory Pattern:

Implement let authInstance: ReturnType<typeof betterAuth> | null = null.

Create and export async function getAuth(): verify cached instance; if missing, await connectToDatabase() from database/mongoose.ts and validate mongoose.connection.db.

Initialize betterAuth with @better-auth/mongo-db adapter (passing the raw MongoDB DB instance), secret: process.env.BETTER_AUTH_SECRET, baseURL: process.env.BETTER_AUTH_URL, and Next.js cookie plugin (nextCookies() from better-auth/next-js).

Enable email/password provider: enabled: true, requireEmailVerification: false, minPasswordLength: 8, maxPasswordLength: 128, and autoSignIn: true.

Export top-level resolved instance export const auth = await getAuth().

Ensure database/mongoose.ts explicitly returns the resolved cached.conn instance on connection so consumers have strongly-typed database access.
