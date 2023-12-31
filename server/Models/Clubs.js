const {connectToDatabase} = require("./database.js");

async function create_club(name, description, id, genre_id) {
    const connection = await connectToDatabase()
    try {
        await connection.query(
            `INSERT INTO clubs (name, description, owner_id, genre_id, discussion_id, book_id)
            VALUES (?, ?, ?, ?, ?, ?)`, [name, description, id, genre_id, 1, 1]
        );
        return true;
    }
    catch (error) {
        console.log("from function create_club: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}

async function get_club(name) {
    const connection = await connectToDatabase()
    try {
        const club = await connection.query(
            `SELECT id
             FROM clubs
             WHERE name = ?`, [name]
        );
        return club[0][0];
    }
    catch (error) {
        console.log("from get_club function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }

}

async function get_club_by_id(id) {
    const connection = await connectToDatabase()
    try {

        const club = await connection.query(
            `SELECT id
             FROM clubs
             WHERE id = ?`, [id]
        );
        return club[0][0];
    }
    catch (error) {
        console.log("from get_club_by_id function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }

}


// async function getMemberIn(club_id, user_id) {
//     const connection = await connectToDatabase()
//     try {
//         const member = await connection.query(
//             `SELECT *
//              FROM members
//              WHERE club_id = ?
//                AND user_id = ?`, [club_id, user_id]
//         );
//         return member[0][0];
//     }
//     catch (error) {
//         console.log("from getMemberIn function: " + error.message);
//         return false;
//     }
//     finally {
//         connection.close();
//     }
// }

async function getUsersClubs(userId){
    const connection = await connectToDatabase();
    try {
        const clubs = await connection.query(
            `SELECT *
             FROM clubs
             WHERE owner_id = ?`, [userId]
        );
        return clubs[0];
    }
    catch (error) {
        console.log("from getUsersClubs function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}

//////////////////////////////////////
async function getClubByGenre(genre_id){
    const connection = await connectToDatabase()
    try{
        const club = await connection.query(
            'SELECT * FROM clubs WHERE genre_id=?',[genre_id]
        )
        return club[0][0]
    }
    catch (error) {
        console.log("from getClubByGenre function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }

}

async function getClubByName(name){
    const connection = await connectToDatabase()
    try{
        const club = await connection.query(
            'SELECT * FROM clubs WHERE name=?',[name]
        )
        return club[0][0]
    }
    catch (error) {
        console.log("from getClubByName function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
async function getClubByOwner(Owner_Id){
    const connection = await connectToDatabase()
    try{
        const club = await connection.query(
            'SELECT * FROM clubs WHERE owner_id=?',[Owner_Id]
        )
        return club[0][0]
    }
    catch (error) {
        console.log("from getClubByName function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
 async function deleteClub(club_id, owner_id){
     const connection = await connectToDatabase()
     try{
          await connection.query(
             'DELETE FROM clubs WHERE id=? and owner_id',[club_id,owner_id]
         )

     }
     catch (error) {
         console.log("from deleteClub function: " + error.message);
         return false;
     }
     finally {
         connection.close();
     }
 }

 async function getBookOfTheMonth(club_id){
     const connection = await connectToDatabase()
     try{
         const club_result = await connection.query(
             'SELECT book_id FROM clubs WHERE id=?',[club_id]
         )

         const book_id = club_result[0][0].book_id;
         const book = await connection.query(
             'SELECT * FROM books WHERE id = ? '[book_id]
         )
         return book[0][0]
     }
     catch (error) {
         console.log("from getBookOfTheMonth function: " + error.message);
         return false;
     }
     finally {
         connection.close();
     }
 }

module.exports = {
    create_club,
    get_club,
    get_club_by_id,
    getUsersClubs,
    getClubByGenre,
    getClubByName,
    getClubByOwner,
    getBookOfTheMonth,
    deleteClub,
};