import { Video } from "lucide-react";
import Container from './Container';


const Footer = () => {
    return (
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
    )
}

export default Footer
