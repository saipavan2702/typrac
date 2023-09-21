import { T } from "../components/Type";
import { url } from "./config";

export async function deleteDeck(cardId: string, index: number): Promise<T> {
  const response = await fetch(`${url}/cards/${cardId}/deck/${index}`, {
    method: "DELETE",
  });
  return response.json();
}
