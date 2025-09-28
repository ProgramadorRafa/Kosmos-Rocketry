import React from "react";
import { Link } from "react-router-dom";

export default function videoShow() {
    return (
        <section className="videoShow">
            <div className="videoShowContainer">
                <div className="videoShowContent">
                    <iframe src="https://www.youtube.com/embed/OaE9WcYOT7c?si=C3z2LeFc9HqWn-ko" title="Kosmos Rocketry" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="textShowContent">
                    <h2>Projeto Morpheus</h2>
                        <p>
                        Começou a ser desenvolvido em 2023 com o intuito de participar da International Engineering Rocket Competition (IREC), a maior competição de foguetes universitários do mundo em 2024.
                        </p>
                        
                        <p> Porém, a participação da equipe nessa competição precisou ser adiada e o projeto continuou em desenvolvimento para competir em 2025.
                        </p>
                        
                        <p> O primeiro teste estático do que consistiu no maior motor de propelente sólido já construído por estudantes brasileiros, o ASTROM-1, infelizmente resultou em uma explosão e um prejuízo de mais de R$15 mil reais. Era um projeto ambicioso e...
                        </p>
                    <Link className="linkProjectAcess" to="#">Ver projeto completo <i class="ri-arrow-right-s-line"></i></Link>
                </div>
            </div>
        </section>
    );
}