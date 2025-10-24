// HERO DA PAGINA INICIAL

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {


    const dataImages = [
        { id: '1', image: '/images/hero/editada/1.png' },
        { id: '2', image: '/images/hero/editada/2.png' },
        { id: '3', image: '/images/hero/editada/3.png' },
        { id: '4', image: '/images/hero/editada/4.png' }
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