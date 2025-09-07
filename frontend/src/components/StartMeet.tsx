import MeetingForm from "./MeetingForm";

interface StartMeetProps {
  onClose: () => void;
}

const StartMeet = ({ onClose }: StartMeetProps) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000, // on top of everything
      }}
    >
      {/* Modal Content */}
      <div
        style={{
          backgroundColor: "white",
          width: "60%",
          maxWidth: "800px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        <h2>Start a New Meeting</h2>
        <label>Meeting Id</label>
        <input
          type="text"
          placeholder="Generated Meeting ID"
          style={{
            width: "90%",
            padding: "10px 14px",
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginRight:'2px'
          }}
          value={Math.random().toString(36).substring(2, 10)} // Example ID
          readOnly
        />
        <div style={{ width: "100%",
            // padding: "10px",
            marginTop: "10px"}}>
        <MeetingForm/>

        </div>
      </div>
    </div>
  );
};

export default StartMeet;
