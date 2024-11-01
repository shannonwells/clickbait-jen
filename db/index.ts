import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { Client } from "pg";
import { nounsTable } from './schema';

// drizzle docs are wrong.
// Got the correct answer from:
// https://fix-kit-docs.drizzle-orm-fe.pages.dev/docs/installation-and-db-connection/postgresql/node-postgres

const client = new Client({
    connectionString: process.env.DATABASE_URL!,
});

async function main() {
    await client.connect();
    const db = drizzle(client);
    const noun: typeof nounsTable.$inferInsert = {
        name: 'John',
        isProper: true,
        isAgent: true,
    };

    await db.insert(nounsTable).values(noun);
    console.log('New noun created!')

    const nouns = await db.select().from(nounsTable);
    console.log('Getting all nouns from the database: ', nouns)

    await db
        .update(nounsTable)
        .set({
            name: 'Johnny',
            isProper: noun.isProper,
            isAgent: noun.isAgent,
        })
        .where(eq(nounsTable.name, noun.name));
    console.log('User info updated!')

    await db.delete(nounsTable).where(eq(nounsTable.name, 'Johnny'));
    console.log('User deleted!')
}
main().finally(() => {
    console.log("done")
});