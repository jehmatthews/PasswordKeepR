-- Drop and recreate passwords table (Example)

DROP TABLE IF EXISTS passwords CASCADE;
CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  organization_id INTEGER REFERENCES organizations(id),
  websiteName VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  urlName VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL
);
