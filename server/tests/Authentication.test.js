const Authenticator = require('../Controllers/AuthController.js');
const {disconnectFromDatabase, connectToDatabase} = require('../Models/database.js')

let connection
beforeAll(async () => {
    connection = await connectToDatabase();
});

test('expect auth object to be created',async () => {
    const auth = new Authenticator();
    expect(auth).toBeDefined();
})

afterAll(async () => {
    connection.end();
})