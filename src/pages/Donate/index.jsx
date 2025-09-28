import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroFlat from "../../components/HeroFlat"

import "./donate.module.css";

export default function Donate() {
    return(
        <>
            <Header />
            <HeroFlat texto="Doações" />
            <section className="donateSection">
                <div className="donateContent">

                    <div className="title">
                        <h2>Faça uma Doação e faça parte dessa história</h2>
                    </div>
                    
                    <div className="qrCode">
                        <img src="../public/images/banner/QRCODE_APOIO.png" alt="qrcode" />
                    </div>

                    <div className="donateBox">
                        <p>Ajude a impulsionar nossos projetos e missões espaciais com sua contribuição. Sua doação faz a diferença!</p>
                        <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer" className="donateButton">Doar via PayPal</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}