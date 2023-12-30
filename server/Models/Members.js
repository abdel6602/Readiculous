const {connectToDatabase} = require( "./database.js");

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
    finally {
        connection.close();
    }
}

async function createMember(club_id, user_id) {
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `INSERT INTO members (user_id, role)
            VALUES (?, ?, ?)`, [user_id, "member"]
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

module.exports = {createAdmin, createMember};