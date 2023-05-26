CREATE DATABASE likeme;

\c likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);

\dt posts;

INSERT INTO posts (titulo, img, descripcion) VALUES
('Jack Sparrow', 'https://www.latercera.com/resizer/byOqyX3DbjzewqOo1L5De2xNDjM=/arc-anglerfish-arc2-prod-copesa/public/NI6XTALQUFFVXGZ6TXKJBB5B3Q.jpg', 'Sigue tu propia brújula #like #f4f');
