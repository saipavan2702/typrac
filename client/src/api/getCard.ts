import { T } from "../components/Type";
import { url } from "./config";

export async function getCard(): Promise<T[]> {
  const res = await fetch(`${url}/cards`).then((res) => res.json());
  return res;
}
