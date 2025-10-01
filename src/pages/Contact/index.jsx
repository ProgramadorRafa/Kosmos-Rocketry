import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroFlat from "../../components/HeroFlat";

export default function Contact() {
    // const valueLocalText = "Entre em contato conosco";
    return (
        <>
            <Header />
            <HeroFlat texto="Contato" image="/images/banner/bannerFlat_contact.webp" />

            <section className="socialMedias">
                <ul>
                    <li><a href="https://www.instagram.com/kosmosrocketry/" target="_black"><i className="ri-instagram-line"></i></a></li>
                    <li><a href="#" target="_black"><i className="ri-linkedin-box-line"></i></a></li>
                    <li><a href="#" target="_black"><i className="ri-tiktok-line"></i></a></li>
                </ul>
            </section>

            <section className="localForm">
                <div className="contentForm">
                    <div className="localFormLeft sideImage">
                        <div className="localCard">
                            <img src="/images/banner/contatoBannerCard.webp" alt="imagemContact" />
                        </div>
                    </div>
                    <div className="localFormRight sideForm">
                        <form action="#" method="post">
                            <label>
                                Nome: <br />
                                <input type="text" name="name" required placeholder="Digite seu nome" />
                            </label>

                            <label>
                                E-mail: <br />
                                <input type="email" name="email" required placeholder="Digite seu melhor E-mail" />
                            </label>
                            <label> Digite sua mensagem: <br />
                                <textarea name="textMesage" id="textMesage" placeholder="Digite sua mensagem"></textarea>
                            </label>
                            <div className="actBtn">
                                <button type="submit">Enviar</button>
                                <button type="reset">Limpar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}