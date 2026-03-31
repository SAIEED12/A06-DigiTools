import React, { use } from "react";
import Card from "./Card";
const Cards = ({cardsPromise, cart, setCart}) => {
    const cards = use(cardsPromise)
  return (
    <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 px-8 container mx-auto">
            {
                cards.map((card) =>(
                    <Card key={card.id} card={card} cart={cart} setCart={setCart}></Card>
                ))
            }
        </div>
    </div>
  );
};

export default Cards;
