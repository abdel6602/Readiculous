const connectToDatabase = require( "./database.js");

async function getBooksIdInHistory(history_id){
    const connection = await connectToDatabase();
    try {
        const book = await connection.query(
          'SELECT * FROM contain WHERE history_id=?',[history_id]
        );
        return book[0]
    }
    catch (error){
        console.log("from getBooksIdInHistory: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getHistoryOfBook(book_id){
    const connection = await connectToDatabase();
    try {
        const history = await connection.query(
            'SELECT * FROM contain WHERE book_id=?',[book_id]
        );
        return history[0]
    }
    catch (error){
        console.log("from getHistoryOfBook: " + error.message);
    }
    finally {
        connection.close();
    }
}


module.exports={getBooksIdInHistory,getHistoryOfBook}