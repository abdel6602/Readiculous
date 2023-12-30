const connectToDatabase = require( "./database.js");

async function createAuthor(name){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'INSERT INTO author (name) VALUES (?)',[name]
        );
        return true
    }
    catch (error){
        console.log("from  createAuthor: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function deleteAuthor(author_id,name){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'DELETE FROM author WHERE name=? and id=?',[name,author_id]
        );
        return true
    }
    catch (error){
        console.log("from deleteAuthor: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getAuthorIDByName(name){
    const connection = await connectToDatabase();
    try {
        const genre = await connection.query (
            'SELECT id FROM author WHERE name=?',[name]
        );
        return genre[0]
    }
    catch (error){
        console.log("from getAuthorIDByName: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getAuthorNameById(author_id){
    const connection = await connectToDatabase();
    try {
        const genre = await connection.query (
            'SELECT name FROM author WHERE id=?',[author_id]
        );
        return genre[0]
    }
    catch (error){
        console.log("from getAuthorIDByName: " + error.message);
    }
    finally {
        connection.close();
    }

}
module .exports={getAuthorIDByName,getAuthorNameById,deleteAuthor,createAuthor}