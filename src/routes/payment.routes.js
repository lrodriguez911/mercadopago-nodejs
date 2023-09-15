import { Router } from "express";
import { createOrder, success, recieveWebhook } from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-order", createOrder)

router.get("/success", success)

router.get("/failure", res.send("failure"))

router.get("/pending", res.send("pending"))

router.post("/wehook", recieveWebhook)

export default router