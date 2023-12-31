const {connectToDatabase} = require('./database')

//ADDED HERE TO TEST FIRST !
async function getTopRated(user_id){
    const connection = await connectToDatabase();
    try{
        const results = await connection.query(`
            SELECT reviews.*, books.*
            FROM reviews
            JOIN books ON reviews.book_id = books.id
            ORDER BY reviews.rating DESC
            LIMIT 10;`, [user_id]);
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
            WHERE reviews.reviewer_id = ?
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

async function getReviewsByBook(book_id){
    const connection = await connectToDatabase();
    try{
        const reviews = await connection.query(
            `SELECT * FROM reviews WHERE reviews.book_id = ?`, [book_id]
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

async function createReview(user_id, book_id, review, rating, time) {
    const connection = await connectToDatabase();
    try{
        await connection.query(
            `INSERT INTO reviews (reviewer_id , book_id, review, rating, timestamp)
            VALUES (?, ?, ?, ?,?)`, [user_id, book_id, review, rating,time]
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


module.exports= {
    getTopRated,
    getUsersReviews,
    getReviewsByBook,
    createReview
};