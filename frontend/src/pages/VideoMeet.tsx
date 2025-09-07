import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, IconButton, TextField, Button } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import ChatIcon from "@mui/icons-material/Chat";


const VideoMeet = () => {
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const [micOn, setMicOn] = useState(true);
    const [videoOn, setVideoOn] = useState(true);
    const [chatMessages, setChatMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [chat, setChat] = useState(false);
    const [screen, setScreen] = useState(false);
    const navigate = useNavigate();

    // Start camera + mic
    useEffect(() => {
        const startVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                streamRef.current = stream;

                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing media devices:", error);
            }
        };

        startVideo();
    }, []);

    // Toggle Microphone
    const toggleMic = () => {
        if (streamRef.current) {
            const audioTrack = streamRef.current.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setMicOn(audioTrack.enabled);
            }
        }
    };

    // Toggle Video
    const toggleVideo = () => {
        if (streamRef.current) {
            const videoTrack = streamRef.current.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setVideoOn(videoTrack.enabled);
            }
        }
    };

    // End Call
    const endCall = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
        }
        if (localVideoRef.current) {
            localVideoRef.current.srcObject = null;
        }
        navigate("/");
    };
    const toggleScreen = async () => {
        if (!screen) {
            // Start screen sharing
            try {
                const displayStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true,
                });
                const screenTrack = displayStream.getVideoTracks()[0];

                if (streamRef.current && localVideoRef.current) {
                    // Replace the video track in current stream
                    const sender = streamRef.current.getVideoTracks()[0];
                    streamRef.current.removeTrack(sender);
                    sender.stop(); // stop webcam track

                    streamRef.current.addTrack(screenTrack);
                    localVideoRef.current.srcObject = streamRef.current;

                    // When screen sharing stops manually
                    screenTrack.onended = () => {
                        toggleScreen(); // revert to webcam
                    };
                }

                setScreen(true);
            } catch (err) {
                console.error("Error starting screen share:", err);
            }
        } else {
            // Stop screen sharing, switch back to webcam
            try {
                const cameraStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                const cameraTrack = cameraStream.getVideoTracks()[0];

                if (streamRef.current && localVideoRef.current) {
                    const screenTrack = streamRef.current.getVideoTracks()[0];
                    streamRef.current.removeTrack(screenTrack);
                    screenTrack.stop();

                    streamRef.current.addTrack(cameraTrack);
                    localVideoRef.current.srcObject = streamRef.current;
                }

                setScreen(false);
            } catch (err) {
                console.error("Error switching back to camera:", err);
            }
        }
    };



    // Handle chat send
    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setChatMessages([...chatMessages, newMessage]);
            setNewMessage("");
        }
    };


    return (
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>
            {/* Video Section */}
            <div style={{ flex: 3, position: "relative", background: "black" }}>
                <video
                    ref={localVideoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Controls */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "15px",
                    }}
                >
                    <IconButton onClick={toggleMic} style={buttonStyle}>
                        {micOn ? <MicIcon /> : <MicOffIcon />}
                    </IconButton>
                    <IconButton onClick={toggleVideo} style={buttonStyle}>
                        {videoOn ? <VideocamIcon /> : <VideocamOffIcon />}
                    </IconButton>
                    <IconButton onClick={toggleScreen} style={buttonStyle}>
                        {screen ? <ScreenShareIcon /> : <StopScreenShareIcon />}
                    </IconButton>
                    <button onClick={() => setChat(!chat)} style={buttonStyle}>
                        <ChatIcon />
                    </button>

                    <IconButton onClick={endCall} style={buttonStyle}>
                        <CallEndIcon />

                    </IconButton>

                </div>
            </div>

            {/* Chat Section */}
            {chat &&
                <div
                    style={{
                        flex: 1,
                        borderLeft: "1px solid #ddd",
                        display: "flex",
                        flexDirection: "column",
                        background: "#f9f9f9",
                    }}
                >
                    <h3 style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                        Chat 💬
                    </h3>
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "10px",
                        }}
                    >
                        {chatMessages.map((msg, i) => (
                            <p
                                key={i}
                                style={{
                                    background: "#e1f5fe",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    marginBottom: "5px",
                                }}
                            >
                                {msg}
                            </p>
                        ))}
                    </div>
                    <form
                        onSubmit={sendMessage}
                        style={{ display: "flex", borderTop: "1px solid #ddd" }}
                    >
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            style={{
                                flex: 1,
                                border: "none",
                                padding: "10px",
                                outline: "none",
                            }}
                        />
                        <button type="submit" style={buttonStyle}>
                            Send
                        </button>
                    </form>
                </div>
            }
        </div>
    );
};

// Reusable button style
const buttonStyle: React.CSSProperties = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
};

export default VideoMeet;
