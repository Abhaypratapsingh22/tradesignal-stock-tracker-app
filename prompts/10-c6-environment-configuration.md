# 10 Environment Configuration

Read AGENTS.md first and follow it strictly.

Install mongodb and mongoose. Configure environment variables in .env (NEXT_PUBLIC_BASE_URL="http://localhost:3000", MONGODB_URI).

Implement a cached, singleton database connection helper in database/mongoose.ts to prevent duplicate connections across server action executions and hot reloads in Next.js:

Global Cache Interface: Define global type interface MongooseCache with { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } and attach it to global.mongooseCache.

Connection Logic (connectToDatabase):

Validate that process.env.MONGODB_URI exists; throw a descriptive error if missing.

If cached.conn exists, return it immediately.

If !cached.promise, initiate connection via mongoose.connect(MONGODB_URI, { bufferCommands: false }) and store the promise.

Await the promise and assign resolved instance to cached.conn.

Include error handling: reset cached.promise = null on failure and rethrow.

Log connection status (Connected to database in [development/production]) without exposing sensitive connection string credentials.
