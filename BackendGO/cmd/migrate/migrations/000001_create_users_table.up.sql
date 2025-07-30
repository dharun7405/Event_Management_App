CREATE TABLE IF NOT EXISTS users (
                                     id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                                     email TEXT NOT NULL UNIQUE,
                                     name TEXT NOT NULL,
                                     password TEXT NOT NULL
);
