import type { ReactNode } from "react";
import MeetingForm from "./MeetingForm";
import "../App.css"
interface HeroProps {
    title: string;
    description: string;
    image?: ReactNode; // optional
    button1?: ReactNode;
    button2?: ReactNode;
    meetingForm: boolean;
}

const Hero = ({ title, description, image, button1, button2, meetingForm }: HeroProps) => {
    return (
        <div style={{ width: "100%", marginTop: '120px' }}>
            <div className="main1" style={{ width: "80%" }}>
                <div>
                    <div className="content">
                        <h1 style={{ fontSize: '45px', fontWeight: 900 }}>
                            {title}
                        </h1>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="buttons">
                        {button1}
                        {button2}


                    </div>
                    {meetingForm && <div className="buttons">
                        <MeetingForm />
                    </div>}

                </div>

                {image}
            </div>
        </div>
    )
};

export default Hero;
