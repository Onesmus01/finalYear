import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

dotenv.config(); 

const app = express();


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


connectDb(); 
connectCloudinary(); 

app.use('/api/user', userRouter); 

app.get('/', (req, res) => {
    res.send("API is working");
});

const PORT = process.env.PORT || 7000; 

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
