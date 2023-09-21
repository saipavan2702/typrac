import Blog from "../models/Blog";
import { Request, Response } from "express";

export const getCard = async (req: Request, res: Response) => {
  const allInfo = await Blog.find();
  return res.json(allInfo);
};

export const createCard = async (req: Request, res: Response) => {
  const { title } = req.body;
  const blog = new Blog({
    title: title,
  });
  const createdBlog = await blog.save();
  return res.json(createdBlog);
};

export const deleteCard = async (req: Request, res: Response) => {
  const cardId = req.params.cardId;
  await Blog.deleteOne({ _id: cardId });
  return res.json({ message: "Entry deleted successfully" });
};

export const createDeck = async (req: Request, res: Response) => {
  const { text } = req.body;
  const { cardId } = req.params;

  const cards = await Blog.findById(cardId);
  if (!cards) return res.status(400).send("no deck of this id exists");

  cards.deck.push(text);
  await cards.save();
  return res.status(200).json(cards);
  // return res.status(200).send("Added successfully");
};

export const getDeck = async (req: Request, res: Response) => {
  const { cardId } = req.params;
  const cards = await Blog.findById(cardId);

  return res.json(cards);
};

export const deleteDeck = async (req: Request, res: Response) => {
  const { cardId, index } = req.params;
  const cards = await Blog.findById(cardId);
  if (!cards) return res.status(400).send("Deck not found");

  cards.deck.splice(parseInt(index), 1);
  await cards.save();
  return res.status(200).json(cards);
};
