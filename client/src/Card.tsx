import React, { useEffect, useState } from "react";
import { T } from "./components/Type";
import { createDeck } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDeck";
import { getDeck } from "./api/getDeck";
import { useParams } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const [deck, setDeck] = useState<T | undefined>();
  const [text, setText] = useState("");
  const [fullDeck, setFullDeck] = useState<string[]>([]);
  const { cardId } = useParams();

  const handleCreateDeck = async (event: React.FormEvent) => {
    event.preventDefault();
    const { deck: deckCards } = await createDeck(cardId!, text);
    setFullDeck(deckCards);
    setText("");
  };
  const handleDeleteCard = async (index: number) => {
    if (!cardId) return;
    const newDeck = await deleteDeck(cardId, index);
    setFullDeck(newDeck.deck);
  };

  useEffect(() => {
    async function fetchDeck() {
      if (!cardId) return;
      const newDeck = await getDeck(cardId);
      setDeck(newDeck);
      setFullDeck(newDeck.deck);
    }
    fetchDeck();
  }, [cardId]);

  return (
    <>
      <div className="deck">
        <h1>{deck?.title}</h1>
        <ul className="cards">
          {fullDeck.map((card, index) => (
            <li key={index}>
              <button onClick={() => handleDeleteCard(index)}>X</button>
              {card}
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateDeck}>
          <label htmlFor="card-text">Card Text</label>
          <input
            id="card-text"
            value={text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setText(event.target.value);
            }}
          />
          <button>Create Card</button>
        </form>
      </div>
    </>
  );
};

export default Card;
