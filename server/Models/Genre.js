const connectToDatabase = require( "./database.js");

async function createGenre(name){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'INSERT INTO genre (genre) VALUES (?)',[name]
        );
        return true
    }
    catch (error){
        console.log("from  createGenre: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function deleteGenre(genre_id,name){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'DELETE FROM genre WHERE genre=? and id=?',[name,genre_id]
        );
        return true
    }
    catch (error){
        console.log("from deleteGenre: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getGenreIDByName(name){
    const connection = await connectToDatabase();
    try {
        const genre = await connection.query (
            'SELECT id FROM genre WHERE genre=?',[name]
        );
        return genre[0]
    }
    catch (error){
        console.log("from getGenreIDByName: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getGenreNameById(genre_id){
    const connection = await connectToDatabase();
    try {
        const genre = await connection.query (
            'SELECT genre FROM genre WHERE id=?',[genre_id]
        );
        return genre[0]
    }
    catch (error){
        console.log("from getGenreIDByName: " + error.message);
    }
    finally {
        connection.close();
    }

}
module .exports={getGenreIDByName,getGenreNameById,createGenre,deleteGenre
}