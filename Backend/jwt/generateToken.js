import jwt from "jsonwebtoken"; // Importing jwt to generate token


const createTokenAndSaveCookie = (userId,res) => {
const token= jwt.sign({userId},process.env.JWT_TOKEN,{expiresIn:"5d"});
res.cookie("jwt",token,{
    httpOnly:true, //xss protection
    secure:true,
    sameSite:"strict", //csrf protection
})
}

export default createTokenAndSaveCookie; // Exporting createTokenAndSaveCookie function