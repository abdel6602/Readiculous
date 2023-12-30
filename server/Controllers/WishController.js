const {getBookWantToReadBookByUser} = require('../Models/Want_to_Read');
const {getUserById} = require("../Models/Users");
const {getBookById} = require("../Models/Books");
const {insertWantToReadBook, deleteWantToReadBook} = require('../Models/Want_to_Read')

class WishController {
    async getUserWish(req, res) {
        const {id} = req.params;
        console.log(id)
        const wishList = await getBookWantToReadBookByUser(id);
        if (wishList.length > 0) {
            res.status(200).json(wishList);
        }
        if (wishList) {
            res.status(200).json({
                message: "No books in wish list"
            })
        } else {
            res.status(404).json({message: "Not found"});
        }
    }

    async addToWishList(req, res) {
        const {userId, bookId} = req.body;
        const user = await getUserById(userId);
        if (!user) {
            res.status(400).json({
                message: "user not found"
            })
        } else {
            const book = await getBookById(bookId);
            if (!book) {
                res.status(400).json({
                    message: "book not found"
                })
            } else {
                const queryStatus = await insertWantToReadBook(userId, bookId);
                if (queryStatus) {
                    res.status(200).json({
                        message: "added book to wishlist"
                    })
                } else {
                    res.status(500).json({
                        message: "Internal server error"
                    });
                }
            }
        }
    }

    async deleteWish(req, res) {
        const {userId, bookId} = req.body;
        const queryStatus = await deleteWantToReadBook(userId, bookId);
        if (queryStatus) {
            res.status(200).json({
                message: "deleted book from wishlist"
            })
        }
        else {
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }
}

module.exports = WishController;