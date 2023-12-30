const connectToDatabase = require( "./database.js");

async function insertWantToReadBook(user_id,book_id){
    const connection = await connectToDatabase();
    try {
        await connection.query (
          'INSERT INTO want_to_read (user_id, book_id) VALUES (?,?)',[user_id,book_id]
        );
        return true
    }
    catch (error){
        console.log("from insertWantToReadBook: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function deleteWantToReadBook(user_id,book_id){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'DELETE FROM want_to_read WHERE user_id=? and book_id=?', [user_id,book_id]
        );
        return true
    }
    catch (error){
        console.log("from deleteWantToReadBook: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getUserByWantToReadBook(book_id){
    const connection = await connectToDatabase();
    try {
        const user = await connection.query(
          'SELECT * FROM want_to_read WHERE book_id=? '[book_id]
        );
        return user[0]
    }
    catch (error){
        console.log("from getUserByWantToReadBook: " + error.message);
    }
    finally {
        connection.close();
    }
}

async function getBookWantToReadBookByUser(user_id){
    const connection = await connectToDatabase();
    try {
        const user = await connection.query(
            'SELECT * FROM want_to_read WHERE user_id=? '[user_id]
        );
        return user[0]
    }
    catch (error){
        console.log("from getBookWantToReadBookByUser: " + error.message);
    }
    finally {
        connection.close();
    }
}

module.exports ={getUserByWantToReadBook,getBookWantToReadBookByUser,insertWantToReadBook,deleteWantToReadBook}