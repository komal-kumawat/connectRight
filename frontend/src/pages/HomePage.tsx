import "../App.css";
import Header from "../components/Header";
import JoinButton from "../components/JoinButton";
import StartMeetingButton from "../components/StartMeetingButton";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";
import mainImage from "../assets/mainImage.jpeg";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { token } = useAuth();
  const isLoggedIn = !!token;

  return (
    <div className="app">
      <Header />
      <div style={{ width: "100%", marginTop: "120px" }}>
        {isLoggedIn ? (
          <Hero
            title="Connect and Collaborate from anywhere"
            description="Reliable video conferencing platform for teams of all sizes. Join millions who trust us for seamless communication."
            image={<img src={mainImage} alt="Image" width="50%" height="50%" />}
            button1={<JoinButton text="Join Meeting" />}
            button2={<StartMeetingButton />}
            meetingForm={true}
          />
        ) : (
          <Hero
            title="Welcome to Our Platform"
            description="Seamless video conferencing made simple. Get started today!"
            image={<img src={mainImage} alt="Image" width="50%" height="50%" />}
            button1={<LoginButton />}
            button2={<RegisterButton />}
            meetingForm={false}
          />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
