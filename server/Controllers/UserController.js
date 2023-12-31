const {getUserById} = require('../Models/Users');
const {getUsersClubs} = require('../Models/Clubs');
const {getBookByUser} = require ('../Models/Favorite_Book');
const {getUsersReviews} = require('../Models/Books_Reviews');
const {getHistoryByUserId} = require('../Models/History');
const {getBookWantToReadBookByUser} = require('../Models/Want_to_Read');

class UserController{
    async getUserInfo(req, res){
        const user = await getUserById(req.params.id);
        const clubs = await getUsersClubs(req.params.id);
        const favorites = await getBookByUser(req.params.id); // implement the favorites in database
        const reviews = await getUsersReviews(req.params.id); // implement the reviews in database
        const readBooks = await getHistoryByUserId(req.params.id); // implement the read books in database.
        const bookshelf = await getBookWantToReadBookByUser(req.params.id); // implement the bookshelf in database.
        res.json({
            user: user,
            clubs: clubs,
            favorites: favorites,
            reviews: reviews,
            readBooks: readBooks,
            bookshelf : bookshelf
        })
    }
}

module.exports = UserController;