// INFORMAÇÕES SOBRE NUMEROS ALCANCADOS COM OS LANÇAMENTOS E PROJETOS
import React from 'react';

export default function InfoData() {
    return (
        <section className="dataRockets">
            <div className="dataRocketsBox">
                <div className="image">
                    {/* <img src="../public/images/testes/1.jpg" alt="image" /> */}
                </div>
                <div className="titleBox">
                    <h2>Maior Velocidade</h2>
                </div>
            </div>
            <div className="dataRocketsBox">
                <div className="image">
                    {/* <img src="../public/images/testes/2.jpg" alt="image" /> */}
                </div>
                <div className="titleBox">
                    <h2>Maior Altitude</h2>
                </div>
            </div>
            <div className="dataRocketsBox">
                <div className="image">
                    {/* <img src="../public/images/testes/3.jpg" alt="image" /> */}
                </div>
                <div className="titleBox">
                    <h2>Motor Mais Potente</h2>
                </div>
            </div>
        </section>
    )
}