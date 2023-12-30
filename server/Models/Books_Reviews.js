const {connectToDatabase} = require('./database')

//ADDED HERE TO TEST FIRST !
async function getTopRated(){
    const connection = await connectToDatabase();
    try{
        //TODO: get the book's id's using the query below then return the actual books!
        const results = await connection.query(`
            SELECT reviews.*, books.*
            FROM reviews
            JOIN books ON reviews.book_id = books.id
            ORDER BY reviews.rating DESC
            LIMIT 10;`);
        return results[0];
    }catch (error){
        console.log('from function getTopRated: ' + error.message);
    }
    finally {
        connection.close();
    }
}

async function getUsersReviews(userId){
    const connection = await connectToDatabase();
    try{
        const results = await connection.query(`
            SELECT reviews.*, books.*
            FROM reviews
            JOIN books ON reviews.book_id = books.id
            WHERE reviews.user_id = ?
            ORDER BY reviews.rating DESC;
        `, [userId]);
        return results[0];
    }
    catch (error){
        console.log('from function getUsersReviews: ' + error.message);
    }
    finally {
        connection.close();
    }
}
module.exports= {getTopRated, getUsersReviews}