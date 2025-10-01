// INFORMAÇÕES SOBRE NUMEROS ALCANCADOS COM OS LANÇAMENTOS E PROJETOS
import React from 'react';

export default function InfoData() {
    return (
        <section className="dataRockets">
            <div className="dataRocketsBox">
                <div className="image">
                    <img src="/images/banner/velocityBanner.webp" alt="image" />
                </div>
                <div className="titleBox">
                    <h2>Maior Velocidade</h2>
                </div>
            </div>
            <div className="dataRocketsBox">
                <div className="image">
                    <img src="/images/banner/higthBanner.webp" alt="image" />
                </div>
                <div className="titleBox">
                    <h2>Maior Altitude</h2>
                </div>
            </div>
            <div className="dataRocketsBox">
                <div className="image">
                    <img src="/images/banner/powerBanner.webp" alt="image" />
                </div>
                <div className="titleBox">
                    <h2>Motor Mais Potente</h2>
                </div>
            </div>
        </section>
    )
}