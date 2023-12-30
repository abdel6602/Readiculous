const {getAllBooksFromDB} = require('../Models/Books');
class BookController{
    async getAllBooks(req, res){
        const books = await getAllBooksFromDB();
        if(books){
            res.status(200).json(books);
        }
        else {
            res.status(404).json({message: "No books found"});
        }
    }

    async insertBook(req, res){
        const {
            title, description, cover_url, ISBN, release_date, genre_id, author_id, purchase_url
        } =  req.body;

    }
}

module.exports = BookController;