import React from "react";
import "./FooterStyles.css";
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaFacebook,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome
                            size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        />
                        <div>
                            <p>562 Lang, Dong Da, HaNoi</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            +84 346909328
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            phungkitai1810@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>
                        Highly skilled and motivated web developer in designing
                        and implementing innovative web solutions. Adept at
                        coding, troubleshooting, and collaborating with
                        cross-functional teams to drive project success.
                    </p>
                    <div className="social">
                        <FaFacebook
                            size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        />
                        <FaGithub
                            size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        />
                        <FaLinkedin
                            size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
