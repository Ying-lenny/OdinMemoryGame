import React, { useState } from "react";
import Card from "./Card";
import images from "../data";

function CardContainer(props) {

    const [cards, setNewCards] = useState(images)

    return (
        <>
            {cards.map((card) => (
                <Card card={card} key={card.id}/>
            ))}
        </>
    );
}

export default CardContainer;