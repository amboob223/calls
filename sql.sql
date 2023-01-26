CREATE DATABASE crypto;

CREATE TABLE metaverse(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    price INT
);

CREATE SEQUENCE metaverse_id_seq START 1 INCREMENT BY 1;

DELETE FROM metaverse;