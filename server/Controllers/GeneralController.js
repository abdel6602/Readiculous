const {getBook} = require('../Models/Books');
const {getUserByFirstName, getUserByLastName, getUser, getUserByFullName} = require('../Models/Users');
class GeneralController {
    async search(req, res){
        const searchKey = req.query.searchKey;
        const keys = searchKey.split(" ");
        if(keys){
            if(keys.length == 2){
                //could be book or user
                const book = await getBook(searchKey);
                const user = await getUserByFullName(keys[0], keys[1]);
                if(book){
                    res.json({
                        type: "book",
                        title: book.title,
                        description: book.description,
                        cover : book.cover_image_id
                    });
                }
                else if(user){
                    res.json({
                        type: "user",
                        first_name : user.first_name,
                        last_name : user.last_name
                    });
                }
                else{
                    res.json({
                        type: null
                    })
                }
                //query both and check;
            }
            else{
                const book = await getBook(searchKey);
                const user = await getUserByFirstName(keys[0]);
                const userL = await getUserByLastName(keys[1]);

                if(book){
                    res.json({
                        type: "book",
                        title: book.title,
                        description: book.description,
                        cover : book.cover_image_id
                    });
                }
                else if(user){
                    res.json({
                        type: "user",
                        first_name : user.first_name,
                        last_name : user.last_name
                    });
                }
                else if(userL){
                    res.json({
                        type: "user",
                        first_name : user.first_name,
                        last_name : user.last_name
                    })
                }
                else{
                    res.json({
                        type:null
                    })
                }
            }
        }
    }
}

module.exports = GeneralController;

