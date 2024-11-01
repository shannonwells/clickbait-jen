import {boolean, integer, pgTable, varchar} from "drizzle-orm/pg-core";

export const nounsTable = pgTable("nouns", {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name', {length: 128}).notNull(),
    isProper: boolean('is_proper'),
    isAgent: boolean('is_agent')
});

//     id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
//     name: text('name'),
//     isProper: integer('isProper', { mode: "boolean"}).default(false),
//     isAgent: integer('isAgent', { mode: "boolean"}).default(false),
//     season: text('season'),
//     updatedAt: text("updatedAt").default(sql`(CURRENT_TIMESTAMP)`),