-- Drop and recreate passwords table (Example)

DROP TABLE IF EXISTS passwords CASCADE;
CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  organization_id INTEGER REFERENCES organizations(id),
  password VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL
);
