import { Router } from "express";
import { createOrder, success, webhook } from "../controllers/payment.controller.js";

const router = Router();

router.get("/create-order", createOrder)

router.get("/success", success)

router.get("/wehook", webhook)

export default router