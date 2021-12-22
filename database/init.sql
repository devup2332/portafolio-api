USE db-portafolio

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    description VARCHAR(500) NOT NULL,
    phone INT(11) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user'
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE links(
    id INT(11) NOT NULL,
    linkedin VARCHAR(300) NOT NULL,
    github VARCHAR(300) NOT NULL,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links 
    ADD PRIMARY KEY (id);
    
ALTER TABLE links 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE projects(
    id INT(11) NOT NULL,
    image VARCHAR(300) NOT NULL,
    description VARCHAR(300) NOT NULL,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_userproject FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE projects 
    ADD PRIMARY KEY (id);
    
ALTER TABLE projects 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE projects;
DESCRIBE users;
DESCRIBE links;

INSERT INTO users (
    description,
    username,
    password,
    fullname,
    phone,
    role
)
VALUES (
    'Esta es mi descripcion inicial',
    'diegorrc147',
    '123456789',
    'Diego Rojas',
    '988937949',
    'superadmin'
)
