# 17 Watchlist Mongoose Model

Read AGENTS.md first and follow it strictly.

Watchlist Schema (database/models/watchlist.model.ts):

Define and export IWatchlistItem extends Document with fields: userId: string (required, indexed), symbol: string (required, uppercase, trimmed), company: string (required, trimmed), and addedAt: Date (default Date.now).

Create a compound unique index { userId: 1, symbol: 1 } to prevent duplicate watchlist entries per user.

Export the model via standard Next.js cached model compilation pattern.

Watchlist Server Action (lib/actions/watchlist.actions.ts):

Directive: "use server".

Implement getWatchlistSymbolsByEmail(email: string): Promise<string[]>: connect to DB via connectToDatabase(), find user by email from the users collection, query Watchlist.find({ userId: user._id }).select("symbol").lean(), and return an array of uppercase symbol strings. Return an empty array on error or if the user is missing.
