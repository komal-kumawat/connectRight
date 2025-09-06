import Container from "./components/Container"
import Header from "./components/Header"
import { Bold, Video } from "lucide-react";
import mainImage from "./assets/mainImage.jpeg";
import "./App.css"
import JoinButton from "./components/JoinButton";
import StartMeetingButton from "./components/StartMeetingButton";
import MeetingForm from "./components/MeetingForm";
const App = () => {
  return (
    <div className="app">
      <Header />
      <div style={{ width: "100%", marginTop: '120px' }}>
        <div className="main1" style={{ width: "80%" }}>
          <div>
            <div className="content">
              <h1 style={{ fontSize: '40px', fontWeight: Bold }}>
                Connect and Collaborate from anywhere
              </h1>
              <p>
                Reliable video conferencing platform for teams of all sizes. Join millions who trust us for seamless communication.
              </p>
            </div>
            <div className="buttons">
              <JoinButton />
              <StartMeetingButton />

            </div>
            <div className="buttons">
              <MeetingForm />
            </div>
          </div>

          <img src={mainImage} alt="Image" width="50%" height="50%"></img>
        </div>
        <div className="footer">
            <div>
              <h2>Why Choose our platform?</h2>
              <p>Built for the modern workplace with enterprise-grade security</p>
            </div>
        <div className="main-containers" style={{ width: "80%" }}>
          <Container Image={Video} text="Crystal clear video and audio quality for professional meetings" title="HD Video & Audio" />
          <Container Image={Video} text="Crystal clear video and audio quality for professional meetings" title="HD Video & Audio" />
          <Container Image={Video} text="Crystal clear video and audio quality for professional meetings" title="HD Video & Audio" />
        </div>
        </div>

      </div>

    </div>
  )
}

export default App
