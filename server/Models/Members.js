const connectToDatabase = require( "./database.js");

async function createAdmin(club_id, user_id) {
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `INSERT INTO members (club_id, user_id, role)
            VALUES (?, ?, ?)`, [club_id, user_id, "admin"]
        )
        return true;
    }
    catch (error) {
        console.log(error.message);
        return false;
    }
}

async function createMember(club_id, user_id) {
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `INSERT INTO members (club_id, user_id, role)
            VALUES (?, ?, ?)`, [club_id, user_id, "member"]
        );
        return true;
    }
    catch (error) {
        console.log(error.message);
        return false;
    }
}

module.exports = {createAdmin, createMember};