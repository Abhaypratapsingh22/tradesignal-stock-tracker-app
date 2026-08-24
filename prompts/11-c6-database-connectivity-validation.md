# 11 Database Connectivity Validation

Read AGENTS.md first and follow it strictly.

Create a standalone database verification test harness to validate the MongoDB Atlas connection:

Test Runner Script (scripts/test-db.mjs): Create an executable script importing connectToDatabase from database/mongoose.ts. Log the connection host, database name, and round-trip connection latency in milliseconds on success. Handle rejection with structured error logging and an exit code process.exit(1).

NPM Script Integration (package.json): Add "test:db": "node scripts/test-db.mjs" under scripts.

Verify that running npm run test:db establishes a connection without hanging processes or leaking connection pools.
