import mysql from "mysql2";

export const createDatabaseIfNotExists = async () => {
    // Replace these values with your MySQL server credentials
    const connectionConfig = {
        host: '127.0.0.1',
        user: 'root',
        password: '',
    };

    // Create a connection
    const connection = mysql.createConnection(connectionConfig);

    try {
        // Connect to MySQL server
        await connection.promise().connect();

        // Database name you want to create
        const databaseName = 'Readiculous';

        // Check if the database already exists
        const [rows] = await connection.promise().query(`SHOW DATABASES LIKE ?`, [databaseName]);

        if (rows.length === 0) {
            // Create the database if it doesn't exist
            await connection.promise().query(`CREATE DATABASE ${databaseName}`);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    } finally {
        // Close the connection
        await connection.promise().end();
    }
};

// Call the function

//connect to database

export async function connectToDatabase() {
    const connectionConfig = {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'Readiculous'
    }
    const connection = mysql.createConnection(connectionConfig);
    try {
        await connection.promise().connect();
        console.log("Connected to database");
        return connection.promise();
    } 
    catch (error) {
        console.log("Error connecting to database");
        return false;
    }
}

// Create tables here
export async function createUsersTable(connection) {
    try{
        connection.query(`CREATE TABLE IF NOT EXISTS users
                            (id INT AUTO_INCREMENT PRIMARY KEY,
                            username VARCHAR(255) NOT NULL UNIQUE,
                            password VARCHAR(255) NOT NULL,
                            first_name NVARCHAR(255) NOT NULL,
                            last_name NVARCHAR(255) NOT NULL);`);
        console.log("Created users table");
    }
    catch(error){
        console.log(error.message);
    }
}


createDatabaseIfNotExists();
const connection = connectToDatabase();
createUsersTable(connection);