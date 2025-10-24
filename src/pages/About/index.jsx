import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import './about.module.css';
import HeroFlat from '../../components/HeroFlat.jsx'

import TeamID from "../../API/module.membersON.js";
import MembersOut from "../../API/module.membersOFF.js";

export default function About() {
    return (
        <>
            <Header />
            {/* <HeroFlat texto="Somos a Kosmos" image="/images/banner/bannerFlat_contact.webp" /> */}
            <section className="containerAbout">
                <div className="containerBox">
                    <div className="imageBox">
                        <img src="/images/banner/about.webp" alt="image" />
                    </div>
                    <div className="containerText">
                        <h2>Sobre nós.</h2> <br />
                        <p>A Kosmos foi fundada em 2013 pelos alunos do curso de Engenharia Aeroespacial e posteriormente incluiu estudantes de outros cursos da UFSC do Campus de Joinville. Em 2019, passou por uma reestruturação que mudou tanto a identidade visual da equipe quanto a organização interna.</p><br />
                        <p>Inicialmente, participava do Festival de minifoguetes de Curitiba, com projetos de 500 m de apogeu. Posteriormente, começou a competir na LASC, sendo o Hagmeyer o primeiro projeto a participar dessa competição.</p><br />
                        <p>Em 2019, passou por uma reestruturação que mudou tanto a identidade visual da equipe quanto a organização interna.</p>
                    </div>
                </div>
            </section>
            <Projects />
            <section className="containerTeam">
                <div className="contentTeam">
                    <h3>Nossa Equipe</h3>
                    <div className="cardTeam">
                        <div className="title">
                            <h4>Todos os nossos membros: </h4>
                        </div>
                        <div className="cards">
                            {
                                TeamID.map((item) => (
                                    <div className="card">
                                        <div className="imageCard">
                                            <img src={item.image} alt="image" />
                                        </div>
                                        <div className="infoCard">
                                            <h4>{item.name}</h4>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="membersOut">
                <div className="containerMembersOut">
                    <h3>Ex-membros que deixaram sua marca!</h3>
                    <div className="cardsMembersOut">
                        <ul className="localCards">
                            {MembersOut.map((item) => (
                                <li key={item.id}>
                                    {item.name} - {item.role}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}