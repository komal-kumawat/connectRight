import React, { useState } from 'react'
import "../styles/MeetingForm.css"
import JoinButton from './JoinButton'
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const MeetingForm = () => {
    const [meetingId, setMeetingId] = useState("");
    const navigate = useNavigate();

    const handleJoin = () => {
        if (meetingId.trim()) {
            navigate(`/videoMeet/${meetingId}`);
        } else {
            alert("Please enter a meeting ID");
        }
    };

    return (
        <div className='meetingForm'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder='Enter meeting ID' 
                    value={meetingId} 
                    onChange={(e) => setMeetingId(e.target.value)} 
                />
                <Button text='Join' onClick={handleJoin} color='white' bgColor='#007bff' />
            </form>
        </div>
    )
}

export default MeetingForm;
