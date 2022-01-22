USE dbportafolio

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(300) NOT NULL,
    password VARCHAR(300) NOT NULL,
    fullname VARCHAR(300) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    description VARCHAR(1000) NOT NULL,
    phone INT(60) NOT NULL,
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
    '$2b$10$X5xESP7CKck/tDxDhjhtdu8SeQ/./B7DCVMqtXtNbjWSBXMbcdeGG', /*Password is 123123123 */
    'Diego Rojas',
    '976469908',
    'superadmin'
);

INSERT INTO links (
    linkedin,
    github,
    user_id
)

VALUES (
    'https://www.linkedin.com/in/diego-raul-rojas-ab289b208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFCOotEMFQg%2B4ZedNKjAbaA%3D%3D',
    'https://github.com/devup2332',
    2
);
