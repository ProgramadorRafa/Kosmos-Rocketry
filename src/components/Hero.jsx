// HERO DA PAGINA INICIAL

import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero">
            <div className="inHero">
                {/* <img src="/public/images/1.webp" alt="testeImgHero" /> */}
            </div>
            <div className="textContent">
                <h1>a Kosmos <br /> não tem limites</h1>
                <p>Movidos por desafios, impulsionados pela inovação</p>
                <div className="btnLinks">
                    <Link to="/about" className="buttomHero">Sobre nossa equipe</Link>
                    <Link to="/project" className="buttomHero">Ver projetos</Link>
                </div>
            </div>
        </section>
    )
}