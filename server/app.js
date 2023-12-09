const express = require('express');

const app = express();

var sum = (a, b) => {
    return a + b;
}

//listen for requests here

app.listen(8080, () => {
    console.log('server listening on port 8080')
})
