import React, { useState } from "react";
import Jett from "../img/Jett.png";
import Omen from "../img/Omen.png";
import Phoenix from "../img/Phoenix.png";
import Viper from "../img/Viper.png";
import Sova from "../img/Sova.png";
import Raze from "../img/Raze.png";
import Yoru from "../img/Yoru.png";
import Brimstone from "../img/Brimstone.png";
import SingleCard from "./SingleCard";

import { useEffect } from "react";

const cardImages = [
  { src: Jett, matched: false },
  { src: Omen, matched: false },
  { src: Phoenix, matched: false },
  { src: Viper, matched: false },
  { src: Sova, matched: false },
  { src: Yoru, matched: false },
  { src: Raze, matched: false },
  { src: Brimstone, matched: false },
];

const Main = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setchoiceOne] = useState(null);
  const [choiceTwo, setchoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //!shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setchoiceOne(null);
    setchoiceTwo(null);
    setTurns(0);
  };
  //!handle a choice

  const handleChoice = (card) => {
    choiceOne ? setchoiceTwo(card) : setchoiceOne(card);
  };
  //!compre 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        reseTurn();
      } else {
        setTimeout(() => reseTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //! reset and increase turn
  const reseTurn = () => {
    setchoiceOne(null);
    setchoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className=" w-[22rem]   md:w-[45rem] lg:w-[54rem] mx-auto sm:w-[40rem] md:my-10">
      <div className="flex mx-auto mt-20 flex-col ">
        <button
          className="py-1   sm:py-3 sm:px-3 inline-flex justify-center items-center rounded-md border : ;
        border-transparent font-semibold bg-purple-800 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 
        focus:ring-offset-2 transition-all text-xs sm:text-sm 
        dark:focus:ring-offset-gray-800
        w-[6rem] sm:w-[10rem] "
          onClick={shuffleCards}
        >
          Start New Games ?
        </button>
        <p className="text-1xl sm:text-3xl text-font-semibold">
          Turns: {turns}
        </p>
      </div>
      <div className="mt-[2rem] grid grid-cols-3 sm:grid-cols-4  gap-5">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              handleChoice={handleChoice}
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
