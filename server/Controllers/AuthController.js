import { getUser, createUser, getUserById, deleteUser } from "../Models/Users.js";
import bcrypt from 'bcrypt';


export class Authenticator {


    async signup(req, res) {
        //TODO: validate against sql injection
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
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                // create user
                const user = await createUser(email, hashedPassword, firstName, lastName);
                if (user) {
                    res.status(200)
                    res.json({
                        message: "signed up successfully",
                        userID: user.ID
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
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            if (bcrypt.compare(hashedPassword, user.PASSWORD)) {
                res.json({
                    message: "Logged in successfully",
                    userID: user.ID
                });
            }
            else {
                res.json({ message: "Incorrect password" })
            }
        }
        else {
            res.json({ message: "User not found" })
        }
    }

    async deleteUser(req, res) {
        const { id, password } = req.body;

        const user = await getUserById(id);
        if (user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            if (bcrypt.compare(hashedPassword, user.PASSWORD)) {
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

    async changePassword(req, res) {
        //TODO: implement this function
        const { userID, newPassword } = req.body;

    }

}
