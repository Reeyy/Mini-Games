import React from "react";
import Cover from "../img/cover.png";
import "../Components/SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card ">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front w-28 h-28 lg:w-56  lg:h-56 md:h-32 md:w-32 object-cover"
          src={card.src}
          alt={card.id}
        />
        <img
          className="back   w-28 h-28 lg:w-56 lg:h-56 md:h-32 md:w-32 object-cover "
          src={Cover}
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
