const {getUsersReviews} = require('./Books_Reviews');
async function get(){
    const results = await getUsersReviews(1);
    console.log(results);
}

get();