import { useState } from "react";
import Button from "./Button";
import JoinMeet from "./JoinMeet";

interface JoinButtonProps {
  text: string;
}

const JoinButton = ({ text }: JoinButtonProps) => {
  const [showJoinMeet, setShowJoinMeet] = useState(false);

  const handleOpen = () => {
    setShowJoinMeet(true);
  };

  const handleClose = () => {
    setShowJoinMeet(false);
  };

  return (
    <>
      <Button
        color="white"
        bgColor="#007bff"
        text={text}
        onClick={handleOpen}
      />

      {showJoinMeet && <JoinMeet onClose={handleClose} />}
    </>
  );
};

export default JoinButton;
