// HERO DA PAGINA INICIAL

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {


    const dataImages = [
        { id: '1', image: 'https://images.unsplash.com/photo-1760340769739-653d00200baf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740' },
        { id: '2', image: 'https://images.unsplash.com/photo-1704653106935-aef5b8206c09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774' },
        { id: '3', image: 'https://images.unsplash.com/photo-1609146373501-1c45dcbf2643?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870' }
    ]


    return (
        <section className="hero">
            <div className="inHero">
                <Swiper className='teste'
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    {dataImages.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img className='imageHero' src={item.image} alt={`Slide ${item.id}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
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