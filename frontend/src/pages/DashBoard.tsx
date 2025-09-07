import "../App.css"
import Header from '../components/Header'
import JoinButton from '../components/JoinButton'
import StartMeetingButton from '../components/StartMeetingButton'
import Footer from '../components/Footer'
import mainImage from "../assets/mainImage.jpeg";
import Hero from "../components/Hero"
const DashBoard = () => {
    return (
        <div className="app">
            <Header />


            <div style={{ width: "100%", marginTop: '120px' }}>
                <Hero title="Connect and Collaborate from anywhere" 
                description="Reliable video conferencing platform for teams of all sizes. Join millions who trust us for seamless communication." 
                image={<img src={mainImage} alt="Image" width="50%" height="50%"></img>}
                    button1={<JoinButton text="Join Meeting" />}
                    button2={<StartMeetingButton />}
                    meetingForm={true}
                />
                <Footer />

            </div>

        </div>
    )
}

export default DashBoard


