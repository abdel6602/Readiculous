const express = require("express");
const cors = require('cors');
const  authApp  = require("./Routes/Auth.js") ;
const clubApp  = require("./Routes/Club.js") ;
const createDatabaseIfNotExists  = require('./Models/database.js')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authApp)
app.use('/club', clubApp)


app.get('/', (req, res) => {
    createDatabaseIfNotExists();
    res.json({ message: "database created" });
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
});

module.exports = app;