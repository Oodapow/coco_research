CREATE SEQUENCE users_seq;
CREATE TABLE users
(
    id        BIGINT DEFAULT nextval('users_seq') PRIMARY KEY,
    username  VARCHAR(255) NOT NULL UNIQUE,
    password  VARCHAR(255) NOT NULL
);
