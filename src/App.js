import React, { useState } from "react";
import "./index.css";
import Cover from "./img/cover.png";
import Helmet from "./img/helmet.png";
import Potion from "./img/potion.png";
import Ring from "./img/ring.png";
import Scroll from "./img/scroll.png";
import Shield from "./img/shield.png";
import SWord from "./img/sword.png";

const cardImages = [
  { Cover },
  { Helmet },
  { Potion },
  { Ring },
  { Scroll },
  { Shield },
  { SWord },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //!shuffle cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);
  return (
    <div className="text-center container ">
      <div className="mt-6 mx-auto text-5xl">Genshin Memory Games</div>
      <button
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border 
        border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
        focus:ring-offset-2 transition-all text-sm 
        dark:focus:ring-offset-gray-800
        mt-8"
        onClick={shuffleCards}
      >
        sdasdsadsa
      </button>
    </div>
  );
}

export default App;
