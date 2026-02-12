import express from "express";
import Quiz from "../models/Quiz.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

/**
 * CREATE QUIZ
 */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    if (!questions || !questions.length) {
      return res.status(400).json({ message: "Quiz must have questions" });
    }

    const quiz = await Quiz.create({
      title,
      description,
      ownerId: req.user.id,
      questions,
    });

    res.status(201).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET ALL QUIZZES FOR LOGGED-IN HOST
 */
router.get("/", authMiddleware, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ ownerId: req.user.id }).sort({ createdAt: -1 });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET SINGLE QUIZ BY ID
 */
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({
      _id: req.params.id,
      ownerId: req.user.id,
    });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE QUIZ
 */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({
      _id: req.params.id,
      ownerId: req.user.id,
    });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    await quiz.deleteOne();
    res.json({ message: "Quiz deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

