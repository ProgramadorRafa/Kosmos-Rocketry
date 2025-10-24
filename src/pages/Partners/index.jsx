import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function Partners() {
    return (
        <>
            <Header />
            <section>
                <div>
                    <h1>Seja você também
                        parceiro da Kosmos Rocketry
                    </h1>
                    <p>Faça parte da nossa comunidade e ajude-nos a conquistar novos horizontes, tornando-se um membro ativo em nossa jornada rumo ao crescimento e ao sucesso contínuo.</p>
                    <div className="buttons">
                        <a href="#">Ser Parceiro</a>
                        <Link to="/">Nossa Equipe</Link>
                    </div>
                </div>
            </section>
            <section>
                <h2>Nosso time é gigante!</h2>
                <div className="carrossel-partners">
                    
                </div>
            </section>
        </>
    );
}