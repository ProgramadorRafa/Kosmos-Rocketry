import React from "react";

export default function heroFlat(props) {
    return (
        <section className="localHero">
            <div className="imageLocalHero">
                <img src="../public/images/banner/bannerFlat_contact.png" alt="" />
            </div>
            <div className="textLocalHero">
                <h2>{props.texto}</h2>
            </div>
        </section>
    );
}