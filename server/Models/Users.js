const  {connectToDatabase} = require("./database");

let connection;

async function getUser(email) {
    connection = await connectToDatabase();
    try {
        const user = await connection.query(
            `SELECT *
             FROM users
             WHERE email = ? `, [email]
        );
        return user[0][0];
    }
    catch (error){
        console.log(error);
    }
    finally {
        connection.close();
    }

}

async function createUser(email, password, firstName, lastName) {
    connection = await connectToDatabase();

    try {
        const user = await connection.query(
            `INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)`, [email, password, firstName, lastName]
        );
        return user;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        connection.close();
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
    finally {
        connection.close();
    }
}

async function getUserById(id) {
    connection = await connectToDatabase();
    try {
        const user = await connection.query(
            `SELECT *
             FROM users
             WHERE ID = ? `, [id]
        );
        return user[0][0];
    }
    catch (error) {
        console.log(error);
    }
    finally {
        connection.close();
    }
}

async function getUserByFirstName(name){
    const connection = await connectToDatabase();
    try{
        const user = await connection.query('SELECT * FROM users WHERE first_name = ?', [name]);
        return user[0][0];
    }
    catch (error){
        console.log("from getUserByFirstName: " + error.message);
    }
    finally {
        connection.close();
    }
}

async function getUserByLastName(name){
    const connection = await connectToDatabase();
    try{
        const user = await connection.query('SELECT * FROM users WHERE last_name = ?', [name]);
        return user[0][0];
    }
    catch(error){
        console.log("in function getUserByLastName: " + error.message)
    }
    finally {
        connection.close();
    }
}

async function getUserByFullName(firstName, lastName){
    const connection = await connectToDatabase();
    try{
        const user = await connection.query('SELECT * FROM users WHERE first_name = ? and last_name= ?' , [firstName, lastName]);
        return user[0][0];
    }
    catch(error){
        console.log("in function getUserByFullName: " + error.message)
    }
    finally {
        connection.close();
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