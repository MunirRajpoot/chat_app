import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;
try {
    mongoose.connect(URI).then(console.log('Connected to MongoDB'))
    
} catch (error) {
    console.log('Error:', error);
    
}
app.use("/user", userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})