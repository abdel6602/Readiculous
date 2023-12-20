const { getUser, createUser } =require( "../Models/Users.js");
const bcrypt =require('bcrypt');


class Authenticator {

    passwordIsStrong(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    }

    async signup(req, res) {
        //TODO: validate against sql injection
        const { email, password, firstName, lastName } = req.body;
        // check if username exists in database
        const user = await getUser(email);
        // if username exists, return error
        if(user){
            res.json({message: "Email already in use"});
        }
        // if username doesn't exist, create user
        else{
            // check for password strength
            if(this.passwordIsStrong(password)){
                //hash password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                // create user
                const user = await createUser(email, hashedPassword, firstName, lastName);
                if(user){
                    res.code(200)
                    res.json({
                        message: "signed up successfully",
                        userID: user.ID
                    });
                }
                else{
                    res.code(500)
                    res.json({message: "Error creating user"});
                }
            }
            else{
                res.code(400);
                res.json({message: "Password not strong enough"});
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


}

module.exports=Authenticator;