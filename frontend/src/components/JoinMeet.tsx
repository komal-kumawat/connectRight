import MeetingForm from "./MeetingForm";

interface JoinMeetProps {
  onClose: () => void;
}

const JoinMeet = ({ onClose }: JoinMeetProps) => {
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
        zIndex: 1000, // stays above all content
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "40%",
          maxWidth: "500px",
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

        <h2>Join a Meeting</h2>
        <div style={{ marginTop: "20px" }}>
          <MeetingForm />
        </div>
      </div>
    </div>
  );
};

export default JoinMeet;
