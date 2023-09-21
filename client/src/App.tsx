import { useEffect, useState } from "react";
import "./App.css";
import { T } from "./components/Type";
import { Link } from "react-router-dom";
import { createCard } from "./api/createCard";
import { getCard } from "./api/getCard";
import { deleteCard } from "./api/deleteCard";

function App() {
  const [title, setTitle] = useState<string>("");
  const [cards, setCards] = useState<T[]>([]);

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await createCard(title);
    setCards([...cards, res]);
    setTitle("");
  };

  useEffect(() => {
    const fetchCards = async () => {
      const allCards = await getCard();
      setCards(allCards);
    };
    fetchCards();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteCard(id);
    setCards(cards.filter((c) => c._id !== id));
  };

  return (
    <>
      <div className="app">
        <div className="cards">
          {cards.map((card) => (
            <li key={card._id}>
              <button onClick={() => handleDelete(card._id)}>X</button>
              <Link to={`card/${card._id}`}>{card.title}</Link>
            </li>
          ))}
        </div>
        <form
          onSubmit={handleForm}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          <label htmlFor="">
            <input
              type="text"
              value={title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(event.target.value)
              }
            />
          </label>
          <button type="submit">Create a card</button>
        </form>
      </div>
    </>
  );
}

export default App;
