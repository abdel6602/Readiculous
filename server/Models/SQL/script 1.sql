CREATE DATABASE IF NOT EXISTS Readiculous;
use Readiculous;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name NVARCHAR(255) NOT NULL,
    last_name NVARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS books(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR (40) NOT NULL,
    desctiption VARCHAR (255),
    cover_image_url VARCHAR (2048),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS clubs(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (100) NOT NULL,
    description VARCHAR (255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES users (id)
);
CREATE TABLE IF NOT EXISTS members (
    club_id INT NOT NULL,
    user_id INT NOT NULL,
    role ENUM('admin', 'member'),
    PRIMARY KEY (club_id, user_id),
    FOREIGN KEY (club_id) REFERENCES clubs (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE TABLE IF NOT EXISTS book_of_the_month (
    club_id INT NOT NULL,
    book_id INT NOT NULL,
    PRIMARY KEY (club_id, book_id),
    FOREIGN KEY (club_id) REFERENCES clubs (id),
    FOREIGN KEY (book_id) REFERENCES books (id)
);

CREATE TABLE IF NOT EXISTS reviews(
                                      book_id INT NOT NULL,
                                      reviewer_id INT NOT NULL,
                                      rating INT NOT NULL,
                                      review TEXT,
                                      PRIMARY KEY (book_id, reviewer_id),
                                      FOREIGN KEY (book_id) REFERENCES books(id),
                                      FOREIGN KEY (reviewer_id) REFERENCES users(id)
);