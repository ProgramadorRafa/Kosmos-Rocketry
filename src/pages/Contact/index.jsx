import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroFlat from "../../components/HeroFlat";

import emailjs from "@emailjs/browser";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        const templateForm = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_rk8cp3e", "template_xxd87mt", templateForm, "KWvqTRGscxKBMyo5S")
        .then((response) => {
            console.log("Email Enviado", response.status, response.text);
        }, (erro) => {
            console.log("Erro", erro)
        })



    }

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
                        <form onSubmit={sendEmail}>
                            <label>
                                Nome: <br />
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} required placeholder="Digite seu nome" />
                            </label>

                            <label>
                                E-mail: <br />
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Digite seu melhor E-mail" />
                            </label>
                            <label> Digite sua mensagem: <br />
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Digite sua mensagem"></textarea>
                            </label>
                            <div className="actBtn">
                                <button type="submit">Enviar</button>
                                <button type="button" onClick={() => {
                                    setName("");
                                    setEmail("");
                                    setMessage("");
                                }}>Limpar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}