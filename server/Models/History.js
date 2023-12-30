const connectToDatabase = require( "./database.js");
const {getBooksIdInHistory} = require("./Contain");
const {getBookById} = require("./Books");


async function createHistoryForUser(user_id){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'INSERT INTO history (user_id) VALUES (?)',[user_id]
        );
        return true
    }
    catch (error){
        console.log("from createHistoryForUser: " + error.message);
    }
    finally {
        connection.close();
    }
}

async function createHistoryForClub(club_id){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'INSERT INTO history (club_id) VALUES (?)',[club_id]
        );
        return true
    }
    catch (error){
        console.log("from createHistoryForClub: " + error.message);
    }
    finally {
        connection.close();
    }
}

async function deleteUserHistory(user_id){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'DELETE FROM history WHERE user_id=?',[user_id]
        );
        return true
    }
    catch (error){
        console.log("from deleteUserHistory: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function deleteClubHistory(club_id){
    const connection = await connectToDatabase();
    try {
        await connection.query (
            'DELETE FROM history WHERE club_id=?',[club_id]
        );
        return true
    }
    catch (error){
        console.log("from deleteClubHistory: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getHistoryById(history_id){
    const connection = await connectToDatabase();
    try {
        const history = await connection.query (
            'SELECT * FROM history WHERE id=?',[history_id]
        );
        return history[0][0]
    }
    catch (error){
        console.log("from getHistoryById: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getHistoryByUserId(user_id){
    const connection = await connectToDatabase();
    try {
        const history = await connection.query (
            'SELECT * FROM history WHERE user_id=?',[user_id]
        );
        return history[0][0]
    }
    catch (error){
        console.log("from getHistoryByUserId: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getHistoryByClubId(club_id){
    const connection = await connectToDatabase();
    try {
        const history = await connection.query (
            'SELECT * FROM history WHERE club_id=?',[club_id]
        );
        return history[0][0]
    }
    catch (error){
        console.log("from getHistoryByClubId: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getClubIdByHistoryId(history_id){
    const connection = await connectToDatabase();
    try {
        const club = await connection.query (
            'SELECT club_id FROM history WHERE id=?',[history_id]
        );
        return club[0][0]
    }
    catch (error){
        console.log("from getClubIdByHistoryId: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getUserIdByHistoryId(history_id){
    const connection = await connectToDatabase();
    try {
        const user = await connection.query (
            'SELECT user_id FROM history WHERE id=?',[history_id]
        );
        return user[0][0]
    }
    catch (error){
        console.log("from getUserIdByHistoryId: " + error.message);
    }
    finally {
        connection.close();
    }
}
async function getBooksRead(user_id){
    const connection = await connectToDatabase();
    try {
        const history_id = await getHistoryByUserId(user_id)
        const history_result = history_id.id
       const books_id= await getBooksIdInHistory(history_result)
        for (const book_id of books_id) {
            const book = await getBookById(book_id);
            console.log(book)
        }
    }
    catch (error)
        {
            console.log("from getUserIdByHistoryId: " + error.message);
        }
    finally{
            connection.close();
        }
}
module.exports ={createHistoryForUser,createHistoryForClub,deleteClubHistory,
    deleteUserHistory,getUserIdByHistoryId,getClubIdByHistoryId,getHistoryByClubId,
    getHistoryByUserId,getHistoryById, getBooksRead}