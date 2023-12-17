import { connectToDatabase, createDatabaseIfNotExists, createUsersTable} from "./dummyDatabase.js";

createDatabaseIfNotExists();
const connection = await connectToDatabase();

createUsersTable(connection);

connection.query('SELECT * FROM users', (err, rows) => {
    if(err){
        console.log('error getting users');
    }
    else {
        console.log('users: ', rows);
    }
})