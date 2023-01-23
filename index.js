import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoutes from "./app/routes/UserRoute.js";
import dotenv from "dotenv"

// var corsOptions = {
//     origin: "http://localhost:8081",
// };

var corsOptions = {
    origin: "https://ruloans-crm-frontend.vercel.app/",
};

const app = express();
mongoose.connect('mongodb+srv://ruloans:ruloans@cluster0.fca7rjp.mongodb.net/mis?retryWrites=true&w=majority',{
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoutes);



const port = process.env.PORT || 9001;
app.listen(port, ()=> console.log('Server up and running...'));