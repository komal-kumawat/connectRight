import React from 'react'
import { Video } from "lucide-react";
const Logo = () => {
    return (
        <div style={{display:'flex' , alignItems:"center", justifyContent:"center" ,margin:"10px"}}>
            <div style={{
                backgroundColor: "#1a1a1a", // dark background
                padding: "5px 8px",             // space around the icon
                display: "inline-block",    // fits to icon size
                borderRadius: "10px",        // optional: rounded corners
                color: 'white',
                margin:'5px'


            }}
            >
                <Video></Video>


            </div>
            <div>
                <h1>ConnectLive</h1>
            </div>
        </div>
    )
}

export default Logo
