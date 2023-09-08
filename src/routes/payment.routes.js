import { Router } from "express";

const router = Router();

router.get("/create-order", (req, res) => res.send("creating order"))

router.get("/success", (req, res) => res.send("success"))

router.get("/wehook", (req, res) => res.send("webhook"))

export default router