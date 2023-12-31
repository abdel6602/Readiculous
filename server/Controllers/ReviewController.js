const {getUserById} = require('../Models/Users');
const {getBook} = require('../Models/Books');
const {getUsersReviews, getTopRated, createReview, getReviewsByBook} = require('../Models/Books_Reviews');
const {getBookById} = require('../Models/Books');

class ReviewController {
    async create(req, res) {
        const {user_id, bookTitle, review, rating} = req.body;
        if (rating < 0 || rating > 5) {
            res.status(400).json({message: "Rating must be between 0 and 5"});
            return;
        } else {
            const user = await getUserById(user_id);
            if (user) {
                // console.log(user);
                const book = await getBook(bookTitle);
                // console.log(book);
                // console.log(bookTitle)
                if (book) {
                    const date = new Date();
                    const queryStatus = await createReview(user.id, book.id, review, rating, date);
                    if (queryStatus) {
                        res.status(200).json({message: "Review created successfully"});
                    } else {
                        res.status(500).json({message: "Internal server error"});
                    }
                } else {
                    res.status(400).json({message: "Book does not exist"});
                }
            } else {
                res.status(400).json({message: "User does not exist"});
            }

        }
    }

    async getReviewsByUser(req, res) {
        const {user_id} = req.body;
        const user = await getUserById(user_id);
        if (user) {
            const reviews = await getUsersReviews(user_id);
            if (reviews) {
                res.status(200).json({reviews: reviews});
            } else {
                res.status(400).json({message: "User does not exist"});
            }
        }
    }
    async topRated(req, res){
        const books = await getTopRated();
        if(books){
            res.status(200).json({
                books:books
            });
        }
        else{
            res.status(500).json({
                message : "internal server error"
            });
        }
    }

    async getBookReviews(req, res){
        const bookId = req.params.id;
        const book = await getBookById(bookId);
        if(book){
            const reviews = await getReviewsByBook(bookId);
            if(reviews){
                res.status(200).json({
                    reviews: reviews
                })
            }
            else{
                res.status(400).json({
                    message: "Book does not exist"
                });
            }
        }
        else{
            res.status(400).json({
                message: "Book does not exist"
            });
        }
    }
}

module.exports = ReviewController;