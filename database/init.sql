USE db-portafolio

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(300) NOT NULL,
    email VARCHAR(300) NOT NULL,
    password VARCHAR(300) NOT NULL,
    fullname VARCHAR(300) NOT NULL,
    about_me VARCHAR(1000),
    phone INT(60) NOT NULL,
    cv VARCHAR(600),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    CONSTRAINT chk_role CHECK (role in ('admin','superadmin','user'))
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE social_links(
    id INT(11) NOT NULL,
    github VARCHAR(500),
    linkedin VARCHAR(500),
    youtube VARCHAR(500),
    website VARCHAR(500),
    facebook VARCHAR(500),
    instagram VARCHAR(500),
    user_id INT(11) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_usersocial FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE social_links 
    ADD PRIMARY KEY (id);

ALTER TABLE social_links 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE projects(
    id INT(11) NOT NULL,
    description VARCHAR(300) NOT NULL,
    name VARCHAR(300) NOT NULL,
    stacks VARCHAR(1000) NOT NULL,
    github VARCHAR(500) NOT NULL,
    website VARCHAR(500) NOT NULL,
    figma VARCHAR(800) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_userproject FOREIGN KEY (user_id) REFERENCES users(id) 
);

ALTER TABLE projects 
    ADD PRIMARY KEY (id);
    
ALTER TABLE projects 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE images(
  id INT(11) NOT NULL,
  secure_url VARCHAR(300) NOT NULL,
  public_id VARCHAR(300) NOT NULL,
  type_image VARCHAR(20) NOT NULL DEFAULT 'cover',
  project_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_imageproject FOREIGN KEY (project_id) REFERENCES projects(id),
  CONSTRAINT chk_typeimage CHECK (type_image in ('cover','image'))
);

ALTER TABLE images 
  ADD PRIMARY KEY (id);
    
ALTER TABLE images 
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
