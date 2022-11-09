-- Drop and recreate websites table (Example)

DROP TABLE IF EXISTS websites CASCADE;
CREATE TABLE websites (
  id SERIAL PRIMARY KEY NOT NULL,
  organization_id INTEGER REFERENCES organizations(id),
  url VARCHAR(255) NOT NULL
);
