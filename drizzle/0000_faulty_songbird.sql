CREATE TABLE IF NOT EXISTS "nouns" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "nouns_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(128) NOT NULL,
	"is_proper" boolean,
	"is_agent" boolean
);
