import { connectToDatabase } from "./database.js";
import bcrypt from "bcrypt";

const connection = await connectToDatabase();

export async function getUser(email) {
    const user = await connection.query(
        `SELECT * FROM users WHERE email = ? `, [email]
    );
    return user[0][0];
}

export async function createUser(email, password, firstName, lastName) {
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

export async function deleteUser(id) {
    try {
        await connection.query(
            `DELETE FROM users WHERE ID = ?`, [id]
        );
    }
    catch (error) {
        console.log(error);
    }
}

export async function getUserById(id) {
    const user = await connection.query(
        `SELECT * FROM users WHERE ID = ? `, [id]
    );
    return user[0][0];
}