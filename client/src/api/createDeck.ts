import { T } from "../components/Type";
import { url } from "./config";

export async function createDeck(cardId: string, text: string): Promise<T> {
  const response = await fetch(`${url}/cards/${cardId}/deck`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
