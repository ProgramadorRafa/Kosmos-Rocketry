import React from "react";
import { Link } from "react-router-dom";
import menuControll from "../functions/MenuController";

export default function Header() {
    return (
        <header>
            <div className="headerContainer">
                <div className="logo">
                    <a href="/">
                        <img src="./public/images/logoName.png" alt="logoHeader" />
                    </a>
                </div>
                <nav className='menuItens'>
                    <ul>
                        <li><Link className='menuItem' to="/">Inicio</Link></li>
                        <li><Link className='menuItem' to="/about">sobre nós</Link></li>
                        <li><Link className='menuItem' to="/newsletter">newsletter</Link></li>
                        <li><Link className='menuItem' to="/partners">Parcerias</Link></li>
                        <li><Link className='menuItem' to="/">Produtos</Link></li>
                        <li><Link className='menuItem' to="/">Portal Transparência</Link></li>
                        <li><Link className='menuItem' to="/contact">contato</Link></li>
                    </ul>
                    <div className="btnVakinha">
                        <Link to="/donate">Apoie o Projeto</Link>
                    </div>
                </nav>
            </div>
            <div className="menuController">
                <i onClick={menuControll} className="ri-menu-3-line"></i>
            </div>
        </header >
    );
}