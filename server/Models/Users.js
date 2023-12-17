import { connectToDatabase } from "./dummyDatabase.js";

const connection = await connectToDatabase();

export async function getUser(email) {
    const user = await connection.query(
        `SELECT * FROM users WHERE email = ? `, [email]
    );
    return user[0][0];
}

export async function createUser(email, password, firstName, lastName) {
    try{
        const user = await connection.query(
            `INSERT INTO users (email, password, firstName, lastName) VALUES (?, ?, ?, ?)`, [email, password, firstName, lastName]
        );
        return user;
    }
    catch(error){
        console.log(error);
    }
}