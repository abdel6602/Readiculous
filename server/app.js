const express = require("express");
const cors = require('cors');
const  authApp  = require("./Routes/Auth.js") ;
const clubApp  = require("./Routes/Club.js") ;
const createDatabaseIfNotExists  = require('./Models/database.js')
const generalApp = require('./Routes/GeneralRoutes');
const userApp = require('./Routes/User')
const reviewApp = require('./Routes/Reviews')
const booksApp = require('./Routes/Books')
const wishApp = require('./Routes/wishApp')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authApp)
app.use('/users', userApp)
app.use('/club', clubApp)
app.use('/search', generalApp)
app.use('/review', reviewApp);
app.use('/books', booksApp);
app.use('/wishlist', wishApp);

app.get('/', (req, res) => {
    createDatabaseIfNotExists();
    res.json({ message: "database created" });
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
});

module.exports = app;