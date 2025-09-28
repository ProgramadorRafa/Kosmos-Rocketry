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
            <HeroFlat texto="Somos a Kosmos" />
            <section className="containerAbout">
                <div className="containerBox">
                    <div className="containerText">
                        <h3>Lorem, ipsum.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak.</p>
                    </div>
                    <div className="imageBox">
                        <img src="../public/images/banner/About.jpg" alt="image" />
                        {/* <div className="textBox">
                            <h2>Somos a Kosmos</h2>
                        </div> */}
                        <div className="shadowBox"></div>
                    </div>
                </div>
            </section>

            <section className="containerTeam">
                <div className="contentTeam">
                    <h3>Nossa Equipe</h3>
                    <div className="cardTeam">
                        <div className="title">
                            <h4>Engenharia</h4>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="imageCard">
                                    <img src={TeamID[0].image} alt="PersonID" />
                                </div>
                                <div className="infoCard">
                                    <h4>{TeamID[0].name}</h4>
                                    <p>{TeamID[0].role}</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imageCard">
                                    <img src={TeamID[1].image} alt="PersonID" />
                                </div>
                                <div className="infoCard">
                                    <h4>{TeamID[1].name}</h4>
                                    <p>{TeamID[1].role}</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imageCard">
                                    <img src={TeamID[2].image} alt="PersonID" />
                                </div>
                                <div className="infoCard">
                                    <h4>{TeamID[2].name}</h4>
                                    <p>{TeamID[2].role}</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imageCard">
                                    <img src={TeamID[3].image} alt="PersonID" />
                                </div>
                                <div className="infoCard">
                                    <h4>{TeamID[3].name}</h4>
                                    <p>{TeamID[3].role}</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="imageCard">
                                    <img src={TeamID[4].image} alt="PersonID" />
                                </div>
                                <div className="infoCard">
                                    <h4>{TeamID[4].name}</h4>
                                    <p>{TeamID[4].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cardTeam">
                        <div className="title">
                            <h4>Aerodinamica</h4>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="imageCard">
                                    <img src={TeamID[5].image} alt="PersonID" />
                                </div>
                                <div className="infoCard">
                                    <h4>{TeamID[5].name}</h4>
                                    <p>{TeamID[5].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>

            <section className="membersOut">
                <div className="containerMembersOut">
                    <h3>Ex-membros que deixaram sua marca!</h3>
                    <div className="cardsMembersOut">
                        <ul>
                            <li>{MembersOut[0].name + " - " + MembersOut[0].role}</li>
                            <li>{MembersOut[1].name + " - " + MembersOut[1].role}</li>
                            <li>{MembersOut[2].name + " - " + MembersOut[2].role}</li>
                            <li>{MembersOut[3].name + " - " + MembersOut[3].role}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Projects />
            <Footer />
        </>
    );
}