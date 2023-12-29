const {getUserById} = require('../Models/Users');
const {getUsersClubs} = require('../Models/Clubs');

class UserController{
    async getUserInfo(req, res){
        const user = await getUserById(req.params.id);
        const clubs = await getUsersClubs(req.params.id);
        const favorites = await getUsersFavorites(req.params.id); // implement the favorites in database
        const reviews = await getUsersReviews(req.params.id); // implement the reviews in database
        const readBooks = await getUsersReadBooks(req.params.id); // implement the read books in database.
        const bookshelf = await getUsersBookshelf(req.params.id); // implement the bookshelf in database.
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