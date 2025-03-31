import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js"
export const signUp = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (password !== confirmpassword) {
            res.status(400).json({ message: "Passwords do not match" });

        }
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: "Email already exists" });
        }

        //Hashing Password
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await new User(
            { name, email, password: hashedPassword, confirmpassword });

        await newUser.save();
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User created successfully", newUser });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "500 internal server error" });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            res.status(400).json({ message: "Invalid User or Password" });
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(201).json({
            message: "Logged in successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "500 internal server error" });

    }
};

export const logout = async (req, res) => {

    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "500 internal server error" });
        
    }
}