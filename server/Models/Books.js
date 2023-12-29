const {connectToDatabase} = require('./database');
async function getBook(searchKey){
    const connection = await connectToDatabase();
    try{
        const book = await connection.query('SELECT * FROM books WHERE title = ?', [searchKey]);
        return book[0][0];
    }
    catch(error){
        console.log("from getBook function: " + error.message);
    }
}


module.exports = getBook;