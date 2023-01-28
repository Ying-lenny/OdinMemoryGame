import React from "react";

function Card(props) {
    const {
        card: { src, id, title, colour },
    } = props;

    const cardStyle = {
        backgroundColor: colour,
        border: colour
    };
    return (
        <button id={id} className="card" style={cardStyle}>
        <figure>
            <img src={src} alt={title}/>
        </figure>
        <figcaption>
            {title}
        </figcaption>
      </button>
    )
}

export default Card