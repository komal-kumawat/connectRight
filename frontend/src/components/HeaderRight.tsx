import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JoinButton from "./JoinButton";
import StartMeetingButton from "./StartMeetingButton";
import { User } from "lucide-react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const HeaderRight = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username"); // assuming you store username after login
  const isLoggedIn = !!token;

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/"); // redirect to home
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", position: "relative" }}>
      {isLoggedIn ? (
        <>
          <JoinButton text="Join Meeting" />
          <StartMeetingButton />
          <div style={{ position: "relative" }}>
            <User
              style={{ cursor: "pointer" }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  background: "white",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  zIndex: 10,
                }}
              >
                <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
                  {username || "User"}
                </p>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: "6px 12px",
                    background: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <LoginButton />
          <RegisterButton />
        </>
      )}
    </div>
  );
};

export default HeaderRight;
