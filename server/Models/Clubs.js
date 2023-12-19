const connectToDatabase = require("./database.js");

async function create_club(name, description, id) {
    const connection = await connectToDatabase()
    try {
        await connection.query(
            `INSERT INTO clubs (name, description, owner_id)
            VALUES (?, ?, ?)`, [name, description, id]
        );
        return true;
    }
    catch (error) {
        console.log(error.message);
        return false;
    }
}

async function get_club(name) {
    const connection = await connectToDatabase()
    const club = await connection.query(
        `SELECT id FROM clubs WHERE name = ?`, [name]
    );
    return club[0][0];
}

async function get_club_by_id(id) {
    const connection = await connectToDatabase()
    const club = await connection.query(
        `SELECT id FROM clubs WHERE id = ?`, [id]
    );
    return club[0][0];
}

async function getMemberIn(club_id, user_id) {
    const connection = await connectToDatabase()
    const member = await connection.query(
        `SELECT * FROM members WHERE club_id = ? AND user_id = ?`, [club_id, user_id]
    );
    return member[0][0];
}

module.exports = {create_club, get_club, get_club_by_id, getMemberIn};