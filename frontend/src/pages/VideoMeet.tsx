import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton
} from "@mui/material";
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
  const screenStreamRef = useRef<MediaStream | null>(null);

  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [chat, setChat] = useState(false);
  const [screen, setScreen] = useState(false);
  const navigate = useNavigate();

  // Start camera + mic on mount
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

    // Cleanup
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
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
    alert(!micOn?"mike on":"mike off")
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

  // Toggle screen share
  const toggleScreenShare = async () => {
    if (!screen) {
      try {
        const displayStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        screenStreamRef.current = displayStream;

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = displayStream;
        }

        // When screen sharing stops
        displayStream.getVideoTracks()[0].onended = () => {
          revertToCamera();
        };

        setScreen(true);
      } catch (error) {
        console.error("Error sharing screen:", error);
      }
    } else {
      revertToCamera();
    }
  };

  // Revert to camera after screen share
  const revertToCamera = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = cameraStream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = cameraStream;
      }

      // Stop screen stream
      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
        screenStreamRef.current = null;
      }

      setScreen(false);
    } catch (err) {
      console.error("Error reverting to camera:", err);
    }
  };

  // End Call
  const endCall = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    navigate("/");
  };

  // Handle chat
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
          style={{ width:chat?'100%':'100%', height: "100%", objectFit: "cover" }}
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

          <IconButton onClick={toggleScreenShare} style={buttonStyle}>
            {screen ? <StopScreenShareIcon /> : <ScreenShareIcon />}
          </IconButton>

          <IconButton onClick={() => setChat(!chat)} style={buttonStyle}>
            <ChatIcon />
          </IconButton>

          <IconButton onClick={endCall} style={endCallButtonStyle}>
            <CallEndIcon />
          </IconButton>
        </div>
      </div>

      {/* Chat Section */}
      {chat && (
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
      )}
    </div>
  );
};

// Styles
const buttonStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  background: "#007bff",
  color: "white",
};

const endCallButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#dc3545",
};

export default VideoMeet;
