# Weekend-5-Challenge-Time-Tracker


-------------
SQL CREATE TABLE Queries
-------------
CREATE TABLE "project"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL
);

CREATE TABLE "entry"(
	"id" SERIAL PRIMARY KEY,
	"description" VARCHAR(255) NOT NULL,
	"date" DATE NOT NULL,
	"start_time" TIME NOT NULL,
	"end_time" TIME NOT NULL,
	"project_id" INTEGER REFERENCES "project"
);
