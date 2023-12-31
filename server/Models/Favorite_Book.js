const {connectToDatabase} = require("./database.js");

async function insertBook(user_id ,book_id){
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `INSERT INTO favorite_book (user_id, book_id)
            VALUES (?,  ?)`, [user_id,book_id]
        )
        return true;
    }
    catch (error) {
        console.log("from insertFavBook function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}

async function deleteBook(user_id,book_id){
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `DELETE FROM favorite_book
             WHERE user_id=? and book_id`, [user_id, book_id]
        )
        return true;
    }
    catch (error) {
        console.log("from deleteFavBook function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
async function getUserByBook(book_id){
    const connection = await connectToDatabase();
    try {
        const user = await connection.query(
            `SELECT * FROM favorite_book WHERE book_id=?`, [book_id]
        )
        return user[0];
    }
    catch (error) {
        console.log("from getUserByBook function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
async function getBookByUser(user_id){
    const connection = await connectToDatabase();
    try {
        const user = await connection.query(
            `SELECT * FROM favorite_book WHERE user_id=?`, [user_id]
        )
        return user[0];
    }
    catch (error) {
        console.log("from getUserByBook function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
module.exports={insertBook,deleteBook,getUserByBook,getBookByUser}