-- Drop and recreate usernames table (Example)

DROP TABLE IF EXISTS usernames CASCADE;
CREATE TABLE usernames (
  id SERIAL PRIMARY KEY NOT NULL,
  password_id INTEGER REFERENCES passwords(id),
  organization_id INTEGER REFERENCES organizations(id),
  username VARCHAR(255) NOT NULL
);
