import express from "express";
import { sendMessage } from "../controller/messageController.js";

// setup router for database backend
const router = express.Router();

// POST Method
router.post("/send", sendMessage);

export default router;

