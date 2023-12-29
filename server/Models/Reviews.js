const {connectToDatabase} = require('./database')

async function createReview(user_id, book_id, review, rating) {
    const connection = await connectToDatabase();
    try{
        await connection.query(
            `INSERT INTO reviews (reviewer_id, book_id, review, rating)
            VALUES (?, ?, ?, ?)`, [user_id, book_id, review, rating]
        );
        return true;
    }
    catch (error) {
        console.log(error.message);
        return false;
    }
    finally {
        connection.close();
    }
}

async function getReviewsByUser(user_id){
    const connection = await connectToDatabase();
    try{
        const reviews = await connection.query(
            `SELECT * FROM reviews WHERE reviewer_id = ?`, [user_id]
        );
        return reviews[0];
    }
    catch (error) {
        console.log("from function getReviewsByUser" + error.message);
    }
    finally {
        connection.close();
    }
}

async function getTopRated(limit){
    const connection = await connectToDatabase();
    try{
        //TODO: get the book's id's using the query below then return the actual books!
        const results = await connection.query(`SELECT * FROM reviews ORDER BY rating DESC LIMIT 10`);
        return results[0];
    }catch (error){
        console.log('from function getTopRated: ' + error.message);
    }
    finally {
        connection.close();
    }
}

module.exports = {createReview, getReviewsByUser, getTopRated};