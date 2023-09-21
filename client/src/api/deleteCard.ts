import { url } from "./config";
// import { T } from "../components/Type";

export async function deleteCard(id: string) {
  await fetch(`${url}/cards/${id}`, {
    method: "DELETE",
  });
}
