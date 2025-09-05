import express from "express";
import http from "http";
// import {Server} from "socket.io";
import cors from "cors";
import { ConnectToSocket } from "./controller/SocketManager";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//creating a http server
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());

// connecting websocket server
const io = ConnectToSocket(server , {
    cors:{
        origin:"*",
        methods:["GET" , "POST"]
    }
})

mongoose.connect(process.env.MONGO_URL as string)
.then(()=>{
    console.log("successfully connected to mongodb");
}).catch((err)=>{
    console.error("error while connecting to mongo" , err);
})


app.use("/")

const port =process.env.PORT ;
server.listen(port , ()=>{
    console.log(`app listening to port ${port}`);
})
