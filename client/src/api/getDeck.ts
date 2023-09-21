import { T } from "../components/Type";
import { url } from "./config";

export async function getDeck(cardId: string): Promise<T> {
  const response = await fetch(`${url}/cards/${cardId}/deck`);
  return response.json();
}
