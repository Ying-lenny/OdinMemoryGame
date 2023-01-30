import React, { useState, useEffect } from "react";
import Card from "./Card";
import images from "../data";

function CardContainer(props) {
    const { handleGameLogic, score, highScore } = props;
 
    const [cards, setNewCards] = useState(images)

    const shuffle = (newCards) => {
        for (let i = newCards.length -1; i> 0; i--) {
            let randomOrder = Math.floor(Math.random() * i);
            [newCards[randomOrder], newCards[i]] = [newCards[i], newCards[randomOrder]]
        }
    };

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setNewCards(newCards);
    }, [score, highScore])

    return (
        <>
            {cards.map((card) => (
                <Card card={card} key={card.id} handleGameLogic={handleGameLogic}/>
            ))}
        </>
    );
}

export default CardContainer;