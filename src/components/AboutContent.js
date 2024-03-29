import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am i?</h1>
                <p>
                    I'm a react front-end developer. I create responsive secure
                    websites for my clients.
                </p>
                <Link to="/contact">
                    <button className="btn">contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} alt="img" className="img"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} alt="img" className="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
