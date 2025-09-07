import React from 'react'
import "../styles/MeetingForm.css"
import JoinButton from './JoinButton'

const MeetingForm = () => {
  return (
    <div className='meetingForm'>
        <form action="submit">
            <input type="text"  placeholder='Enter meeting ID'/>
            <JoinButton text='Join'/>
        </form>
      
    </div>
  )
}

export default MeetingForm;
