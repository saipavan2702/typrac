import { url } from "./config";
import { T } from "../components/Type";

export async function createCard(title: string): Promise<T> {
  const res = await fetch(`${url}/cards`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  return res;
}
