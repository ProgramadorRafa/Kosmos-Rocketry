import React from "react";

export default function heroFlat(props) {
    console.log(props.image);
    return (
        <section className="localHero">
            <div className="imageLocalHero">
                <img src={props.image} alt="" />
            </div>
            <div className="textLocalHero">
                <h2>{props.texto}</h2>
            </div>
        </section>
    );
}