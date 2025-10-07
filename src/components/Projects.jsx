// PROJETOS DA EQUIPE KOSMOS

import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <section className="thirdSection" id="projects">
            <div className="thirdContent">
                <div className="Title">
                    <h2>Principais Projetos</h2>
                </div>
                <div className="container">
                    <div className="block bk1">
                        <Link to="/project/1">
                            <img src="/images/project/teste.webp" alt="" />
                        </Link>
                    </div>
                    <div className="block bk2">
                        <Link to="/project/2">
                            <img src="/images/project/teste.webp" alt="" />
                        </Link>
                    </div>
                    <div className="block bk3">
                        <Link to="/project/3">
                            <img src="/images/project/teste.webp" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
