const bcrypt = require("bcrypt");
const  {connectToDatabase} = require("./database");

let connection;

async function getUser(email) {
    connection = await connectToDatabase();
    const user = await connection.query(
        `SELECT * FROM users WHERE email = ? `, [email]
    );
    return user[0][0];
}

async function createUser(email, password, firstName, lastName) {
    connection = await connectToDatabase();

    try {
        const user = await connection.query(
            `INSERT INTO users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)`, [email, password, firstName, lastName]
        );
        return user;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteUser(id) {
    connection = await connectToDatabase();
    try {
        await connection.query(
            `DELETE FROM users WHERE ID = ?`, [id]
        );
    }
    catch (error) {
        console.log(error);
    }
}

async function getUserById(id) {
    connection = await connectToDatabase();
    const user = await connection.query(
        `SELECT * FROM users WHERE ID = ? `, [id]
    );
    return user[0][0];
}

async function getUserByFirstName(name){
    const connection = await connectToDatabase();
    try{
        const user = await connection.query('SELECT * FROM users WHERE FIRSTNAME = ?', [name]);
        return user[0][0];
    }
    catch (error){
        console.log("from getUserByFirstName: " + error.message);
    }
}

async function getUserByLastName(name){
    const connection = await connectToDatabase();
    try{
        const user = await connection.query('SELECT * FROM users WHERE LASTNAME = ?', [name]);
        return user[0][0];
    }
    catch(error){
        console.log("in function getUserByLastName: " + error.message)
    }
}

async function getUserByFullName(firstName, lastName){
    const connection = await connectToDatabase();
    try{
        const user = await connection.query('SELECT * FROM users\n' +
            'WHERE FIRSTNAME = ? and LASTNAME= ?;', [firstName, lastName]);
        return user[0][0];
    }
    catch(error){
        console.log("in function getUserByFullName: " + error.message)
    }
}

module.exports = {
    getUser,
    getUserById,
    createUser,
    deleteUser,
    getUserByFirstName,
    getUserByLastName,
    getUserByFullName
}