# 19 User Retrieval Server Action

Read AGENTS.md first and follow it strictly.

Create user extraction server action in lib/actions/user.actions.ts:

Directive: "use server".

Implement getAllUsersForNewsEmail():

Establish database connection via connectToDatabase().

Query the users collection for records where email exists and is not null, projecting only _id, id, email, name, and country.

Filter and map to a strict typed return interface UserForNewsEmail[] containing { id: string, email: string, name: string }.

Do not log sensitive user email addresses to the server console; log generic diagnostic statuses only.
