import express from "express";
import http from "http";
// import {Server} from "socket.io";
import cors from "cors";
import { ConnectToSocket } from "./controller/SocketManager";
import mongoose from "mongoose";
import userRoutes from "./route/user_routes";
import dotenv from "dotenv";
dotenv.config();

//creating a http server
const allowedOrigin = process.env.CLIENT_URL || "http://localhost:5173";

const app = express();
const server = http.createServer(app);
app.use(cors({
    origin: allowedOrigin,
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb" , extended:true}));

// connecting websocket server

const io = ConnectToSocket(server , {
    cors:{
        origin:allowedOrigin,
        methods:["GET" , "POST"]
    }
})

mongoose.connect(process.env.MONGO_URL as string)
.then(()=>{
    console.log("successfully connected to mongodb");
}).catch((err)=>{
    console.error("error while connecting to mongo" , err);
})


app.use("/api/v1/users" , userRoutes);

const port =process.env.PORT ;
server.listen(port , ()=>{
    console.log(`app listening to port ${port}`);
})
