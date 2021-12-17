USE db-portafolio

CREATE TABLE users(
    id INT(11) NOT NULL PRIMARY KEY (id) AUTO_INCREMENT, AUTO_INCREMENT=2,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    role VARCHAR(20) NOT NULL DEFAULT 'user'
)

DESCRIBE users;
