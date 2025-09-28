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
                        <Link to="#">
                            {/* <img src="../public/images/testes/1.jpg" alt="" /> */}
                        </Link>
                    </div>
                    <div className="block bk2">
                        <Link to="#">
                            {/* <img src="../public/images/testes/2.jpg" alt="" /> */}
                        </Link>
                    </div>
                    <div className="block bk3">
                        <Link to="#">
                            {/* <img src="../public/images/testes/3.jpg" alt="" /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
