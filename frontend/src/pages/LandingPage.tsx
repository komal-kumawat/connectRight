import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";
import mainImage from "../assets/mainImage.jpeg"
const LandingPage = () => {
    return (
        <div className="app">
            <Header />


            <div style={{ width: "100%", marginTop: '120px' }}>

                <Hero
                    title="Welcome to Our Platform"
                    description="Seamless video conferencing made simple. Get started today!"
                    button1={<LoginButton />}
                    button2={<RegisterButton />}
                    meetingForm={false}
                    image={<img src={mainImage} alt="Image" width="50%" height="50%"></img>}

                />
                <Footer />

            </div>

        </div>
    )
};

export default LandingPage;
