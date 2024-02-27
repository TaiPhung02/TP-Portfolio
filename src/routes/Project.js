import React from "react";

import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
            <Work />
            <Footer />
        </div>
    );
};

export default Project;
