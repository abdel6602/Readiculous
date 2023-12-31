const { getUser, createUser, getUserById, deleteUser } = require("../Models/Users");


class Authenticator {

    async signup(req, res) {
        const { email, password, firstName, lastName } = req.body;
        // check if username exists in database
        const user = await getUser(email);
        // if username exists, return error
        if (user) {
            res.json({ message: "Email already in use" });
        }
        // if username doesn't exist, create user
        else {
            // check for password strength 
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (passwordRegex.test(password)) {
                //hash password
                // create user
                const user = await createUser(email, password, firstName, lastName);
                if (user) {
                    res.status(200)
                    res.json({
                        message: "signed up successfully",
                        userID: user.id
                    });
                }
                else {
                    // res.code(500)
                    res.status(500);
                    res.json({ message: "Error creating user" });
                }
            }
            else {
                res.status(400);
                res.json({ message: "Password not strong enough" });
            }
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        // check if username exists in database
        const user = await getUser(email)
        if (user) {
            if (password === user.password) {
                res.status(200).json({
                    message: "Logged in successfully",
                    userID: user.id
                });
            }
            else {
                res.status(400).json({ message: "Incorrect password" })
            }
        }
        else {
            res.status(404).json({ message: "User not found" })
        }
    }

    async deleteUser(req, res) {
        const { id, password } = req.body;

        const user = await getUserById(id);
        if (user) {
            if (password === user.password){
                await deleteUser(user.ID);
                res.status(200)
                res.json({ message: "User deleted" });
            }
            else {
                res.status(400);
                res.json({ message: "Incorrect password" });
            }
        }
        else {
            res.status(400);
            res.json({ message: "User not found" });
        }
    }

    // async changePassword(req, res) {r
    //
    //     //TODO: implement this function
    //     const { userID, newPassword } = req.body;
    //
    // }

}

module.exports = Authenticator;
