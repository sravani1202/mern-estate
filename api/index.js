import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'; 
import authRouter from './routes/auth.route.js';
//import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose.connect("mongodb+srv://shann:shann@mern-estates.cualgwh.mongodb.net/mern-estates?retryWrites=true&w=majority")
.then( () =>
{
console.log('Connected to MongoDb!');
}
) 
.catch( err => {
    console.log(err);
})
const app=express();

app.use(express.json());

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
}); 


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
//app.use('/api/auth',authRouter);