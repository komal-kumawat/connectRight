import { Server, ServerOptions, Socket } from "socket.io";
import { Server as HTTPServer } from "http";

type ChatMessage = {
    sender: string,
    data: string,
    "socket-id-sender": string
}

let connections: Record<string, string[]> = {};
let messages: Record<string, ChatMessage[]> = {};
let timeOnline: Record<string, Date> = {};

export const ConnectToSocket = (
    server: HTTPServer,
    options?: Partial<ServerOptions>
) => {
    const io = new Server(server, options);
    io.on("connection", (socket: Socket) => {
        console.log("✅ User connected:", socket.id);
        console.log("🌐 From:", socket.handshake.address);
        console.log("📅 At:", socket.handshake.time);

        //user joining room or call 
        socket.on("join-call", (path: string) => {
            socket.join(path);
            socket.data.path = path;
            if (!connections[path]) {
                connections[path] = [];
            }
            connections[path].push(socket.id);
            timeOnline[socket.id] = new Date();
            console.log(`👥 ${socket.id} joined room ${path}`);

            // for notifying the others
            socket.to(path).emit("user-joined", socket.id, connections[path]);

            // send chat history to the joining user
            if (messages[path]) {
                messages[path].forEach((msg) => {
                    socket.emit(
                        "chat-message",
                        msg.data,
                        msg.sender,
                        msg["socket-id-sender"]
                    );
                });
            }
        });

        // WebRTC signaliing messages (relay only)
        socket.on("signal", (toId: string, message: any) => {
            io.to(toId).emit("signal", socket.id, message);
        });

        // Chat messages
        socket.on("chat-message", (data: string, sender: string) => {
            const path = socket.data.path;
            if (!path) {
                return;
            }
            if (!messages[path]) {
                messages[path] = [];
            }
            const chatMsg: ChatMessage = {
                sender,
                data,
                "socket-id-sender": socket.id
            };
            messages[path].push(chatMsg);
            if (messages[path].length > 200) {
                messages[path].shift();
            }

            // broadcasting the msg to everyone in the room
            io.to(path).emit("chat-message", data, sender, socket.id);
        });

        socket.on("disconnect", () => {
            const path = socket.data.path;
            if (!path) return;
            console.log("User Disconnected:", socket.id);
            connections[path] = connections[path].filter((id) => id !== socket.id);

            socket.to(path).emit("user-left", socket.id);
            if (connections[path].length === 0) {
                delete connections[path];
                delete messages[path];
            }

            delete timeOnline[socket.id];
        });



    });
    return io;

};