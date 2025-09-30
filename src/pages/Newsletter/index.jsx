import React from "react";
import Header from "../../components/Header";
import HeroFlat from "../../components/HeroFlat";
import Footer from '../../components/Footer'

export default function newsLetter() {
    return (
        <>
            <Header />
            <HeroFlat texto="Newsletter" image="/images/banner/bannerFlat_contact.webp" />
            <div className="newsLetterContainer">
                <div className="titleCenter">
                    <h2>Fique por dentro de tudo</h2>
                </div>
                <div className="newsLetterContent">
                    <div className="newsSide">
                        <div className="newsText">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus.</p>
                        </div>
                        <div className="listNewsLetter">
                            <table>
                                <tr>
                                    <th>Data</th>
                                    <th>Edição</th>
                                    <th>Download</th>
                                </tr>
                                <tr>
                                    <td>19/08/2025</td>
                                    <td>Estamos Perto de Finalizar Deimos, Phobos e Morpheus</td>
                                    <td><a href="#"><i class="ri-file-download-line"></i></a></td>
                                </tr>

                                                                <tr>
                                    <td>10/01/2025</td>
                                    <td>Estamos Perto de Finalizar Deimos, Phobos e Morpheus</td>
                                    <td><a href="#"><i class="ri-file-download-line"></i></a></td>
                                </tr>

                                                                <tr>
                                    <td>24/12/2024</td>
                                    <td>Estamos Perto de Finalizar Deimos, Phobos e Morpheus</td>
                                    <td><a href="#"><i class="ri-file-download-line"></i></a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="adsContent">
                        <img src="../public/images/" alt="image" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}