import express from "express";
import {
  getCard,
  deleteCard,
  createCard,
  getDeck,
  createDeck,
  deleteDeck,
} from "../controllers/allCard";

const router = express.Router();

router.get("/cards", getCard);
router.post("/cards", createCard);
router.delete("/cards/:cardId", deleteCard);
router.get("/cards/:cardId", getDeck);
router.post("/cards/:cardId/deck", createDeck);
router.delete("/cards/:cardId/deck/:index", deleteDeck);

export default router;
