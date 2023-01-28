import React from "react";

function Card(props) {
    const {
        card: { src, id, title },
    } = props;

    const cardStyle = {
        
    };
    return (
        <button id={id} className="card">
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