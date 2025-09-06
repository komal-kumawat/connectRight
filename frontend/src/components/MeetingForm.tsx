import React from 'react'
import Button from './Button'
import "../styles/MeetingForm.css"
const MeetingForm = () => {
  return (
    <div className='meetingForm'>
        <form action="submit">
            <input type="text"  placeholder='Enter meeting ID'/>
            <Button color='white' bgColor="black"  text='Join'/>
        </form>
      
    </div>
  )
}

export default MeetingForm;
