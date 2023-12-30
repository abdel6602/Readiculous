const {connectToDatabase} = require('./database');

async function getBook(searchKey) {
    const connection = await connectToDatabase();
    try {
        const book = await connection.query('SELECT * FROM books WHERE title = ?', [searchKey]);
        return book[0][0];
    } catch (error) {
        console.log("from getBook function: " + error.message);
    } finally {
        connection.close();
    }
}

async function insertBook(title, description, cover_url, ISBN, release_date, genre_id, author_id, purchase_url) {
    const connection = await connectToDatabase();
    try {
        const book = await connection.query(
            'INSERT INTO books(title, description, cover_image_url, ISBN, release_date, genre_id, author_id, purchase_url) VALUES (?,?,?,?,?,?,?,?)'
                [title, description , cover_url , ISBN , release_date , genre_id , author_id, purchase_url]
        );
        return book
    } catch (error) {
        console.log("from insertBook function: " + error.message);
    } finally {
        connection.close();
    }

}

async function deleteBook(id) {
    const connection = await connectToDatabase();
    try {
        await connection.query(
            'DELETE FROM books WHERE id = ?', [id]
        );
    } catch (error) {
        console.log("from deleteBook function: " + error.message);
    } finally {
        connection.close();
    }
}

async function getBookById(book_id) {
    const connection = await connectToDatabase();
    try {
        const book = await connection.query('SELECT * FROM books WHERE id = ?', [book_id]);
        return book[0][0];
    } catch (error) {
        console.log("from getBook function: " + error.message);
    } finally {
        connection.close();
    }
}

async function getBookByGenre(genre_id) {
    const connection = await connectToDatabase();
    try {
        const book = await connection.query(
            'SELECT * FROM books WHERE genre_id = ?', [genre_id]
        );
        return book[0][0]
    } catch (error) {
        console.log("from getBookByGenre function: " + error.message);
    } finally {
        connection.close();
    }
}

async function recentlyPublished() {
    const connection = await connectToDatabase();
    try {
        const book = await connection.query(
            'SELECT title , description , cover_image_url FROM books WHERE release_date >= 2023-01-01'
        )
        return book[0][0]
    } catch (error) {
        console.log("from recentlyPublished function: " + error.message);
    } finally {
        connection.close();
    }

}

async function getBookByAuthor(author_id) {
    const connection = await connectToDatabase();
    try {
        const book = await connection.query(
            'SELECT * FROM books WHERE author_id = ?', [author_id]
        );
        return book[0][0]
    } catch (error) {
        console.log("from getBookByAuthor function: " + error.message);
    } finally {
        connection.close();
    }
}

async function getAllBooksFromDB() {
    const connection = await connectToDatabase();
    try {
        const books = await connection.query(
            'SELECT id, title FROM books'
        );
        console.log(books[0])
        return books[0];
    } catch (error) {
        console.log("from getAllBooks function: " + error.message);
    } finally {
        connection.close();
    }
}


module.exports = {
    getBook,
    recentlyPublished,
    getBookById,
    getBookByAuthor,
    getBookByGenre,
    deleteBook,
    insertBook,
    getAllBooksFromDB
};