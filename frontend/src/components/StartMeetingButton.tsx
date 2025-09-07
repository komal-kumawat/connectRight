import { useState } from "react";
import Button from "./Button";
import StartMeet from "./StartMeet";

const StartMeetingButton = () => {
  const [showStartMeet, setShowStartMeet] = useState(false);

  const handleMeeting = () => {
    setShowStartMeet(true);
  };

  const closeMeeting = () => {
    setShowStartMeet(false);
  };

  return (
    <>
      <Button
        color="white"
        bgColor="#28a745"
        text="Start Meeting"
        onClick={handleMeeting}
      />

      {showStartMeet && <StartMeet onClose={closeMeeting} />}
    </>
  );
};

export default StartMeetingButton;
