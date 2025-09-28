import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/hero";
import InfoData from "../../components/InfoData";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import VideoShow from "../../components/VideoShow";

import { Link } from "react-router";

function Home() {

    const dataImages = [
        { id: '1', image: './public/images/1.webp' },
        { id: '2', image: './public/images/2.webp' },
        { id: '3', image: './public/images/3.webp' },
        { id: '4', image: './public/images/4.webp' },
        { id: '5', image: './public/images/5.webp' }
    ]

    return (
        <>
            <Header />
            <Hero />
            <InfoData />
            <VideoShow />
            <Projects />
            <Footer />
        </>
    );
}
export default Home;