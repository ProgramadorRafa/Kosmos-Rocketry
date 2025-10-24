import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import InfoData from "../../components/InfoData";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import VideoShow from "../../components/VideoShow";

import { Link } from "react-router";

function Home() {

    return (
        <>
            <Header />
            <Hero />
            <InfoData />
            <VideoShow />
            {/* <Projects /> */}
            <Footer />
        </>
    );
}
export default Home;