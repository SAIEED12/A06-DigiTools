import React, { use } from "react";
import Card from "./Card";
const Cards = ({cardsPromise}) => {
    const cards = use(cardsPromise)
  return (
    <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10">
            {
                cards.map((card) =>(
                    <Card key={card.id} card={card}></Card>
                ))
            }
        </div>
    </div>
  );
};

export default Cards;
