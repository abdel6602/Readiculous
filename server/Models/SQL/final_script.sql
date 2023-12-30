CREATE DATABASE IF NOT EXISTS Readiculous;

CREATE TABLE IF NOT EXISTS users (
                                         id INT AUTO_INCREMENT PRIMARY KEY,
                                         email VARCHAR(255) NOT NULL UNIQUE,
                                         password VARCHAR(255) NOT NULL,
                                         first_name NVARCHAR(255) NOT NULL,
                                         last_name NVARCHAR(255) NOT NULL,
                                         bio TEXT
);
CREATE TABLE IF NOT EXISTS author(
                                        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
                                        name VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS genre(
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        genre VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS books(
                                        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
                                        title VARCHAR (40) NOT NULL,
                                        description VARCHAR (255),
                                        cover_image_url VARCHAR (2048),
                                        ISBN INT NOT NULL,
                                        release_date DATE NOT NULL,
                                        genre_id INT NOT NULL,
                                        author_id INT NOT NULL,
                                        FOREIGN KEY (genre_id) REFERENCES genre (id),
                                        FOREIGN KEY (author_id) REFERENCES author (id),
                                        purchase_url VARCHAR (2048)

);
CREATE TABLE IF NOT EXISTS book_quiz(
                                        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                        book_id INT NOT NULL,
                                        quiz TEXT,
                                        FOREIGN KEY (book_id) REFERENCES books(id)
);
CREATE TABLE IF NOT EXISTS progress (
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        user_id INT NOT NULL,
                                        book_id INT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES users (id),
                                        FOREIGN KEY (book_id) REFERENCES books (id)
);
CREATE TABLE IF NOT EXISTS reviews(
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        reviewer_id INT NOT NULL,
                                        book_id INT NOT NULL,
                                        rating INT NOT NULL,
                                        review TEXT,
                                        timestamp TIMESTAMP NOT NULL ,
                                        FOREIGN KEY (reviewer_id) REFERENCES users (id),
                                        FOREIGN KEY (book_id) REFERENCES  books (id)
);
CREATE TABLE IF NOT EXISTS discussion(
                                        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                        messages NVARCHAR(255)
);
CREATE TABLE IF NOT EXISTS members(
                                        membership_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                        user_id INT NOT NULL,
                                        role enum('admin', 'member'),
                                        discussion_id INT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES users (id),
                                        FOREIGN KEY (discussion_id) REFERENCES  discussion(id)
);
CREATE TABLE IF NOT EXISTS  clubs(
                                        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                        name VARCHAR(100) NOT NULL,
                                        description VARCHAR(255),
                                        genre_id INT NOT NULL,
                                        owner_id INT NOT NULL,
                                        discussion_id INT NOT NULL,
                                        book_id INT NOT NULL,
                                        start_date DATE NOT NULL,
                                        end_date DATE NOT NULL,
                                        FOREIGN KEY (genre_id) REFERENCES genre(id),
                                        FOREIGN KEY (owner_id) REFERENCES users(id),
                                        FOREIGN KEY (discussion_id) REFERENCES discussion(id),
                                        FOREIGN KEY (book_id) references books(id)
);
CREATE TABLE IF NOT EXISTS history(
                                        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                                        user_id INT NOT NULL,
                                        club_id INT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES users (id),
                                        FOREIGN KEY (club_id) REFERENCES clubs(id)
);
CREATE TABLE IF NOT EXISTS contain(
                                        book_id INT NOT NULL,
                                        history_id INT NOT NULL,
                                        FOREIGN KEY (book_id) REFERENCES books (id),
                                        FOREIGN KEY (history_id) REFERENCES history (id)
);
CREATE TABLE IF NOT EXISTS join_club(
                                        members_id INT NOT NULL,
                                        club_id INT NOT NULL,
                                        FOREIGN KEY (members_id) REFERENCES members(membership_id),
                                        FOREIGN KEY (club_id) REFERENCES clubs(id)
);
CREATE TABLE IF NOT EXISTS favorite_book(
                                        user_id INT NOT NULL,
                                        book_id INT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES users(id),
                                        FOREIGN KEY (book_id) REFERENCES books(id)
);
CREATE TABLE IF NOT EXISTS want_to_read(
                                        user_id INT NOT NULL,
                                        book_id INT NOT NULL,
                                        FOREIGN KEY (user_id) REFERENCES users(id),
                                        FOREIGN KEY (book_id) REFERENCES books(id)
);



