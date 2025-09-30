import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroFlat from "../../components/HeroFlat";

const products = () => {
    return(
        <>
            <Header />
            <HeroFlat texto="Produtos" image="/images/banner/bannerFlat_contact.webp" />
            <h1>Produtos</h1>
            <Footer />
        </>
    );
}



export default products;