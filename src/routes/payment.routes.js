import { Router } from "express";

const router = Router();


router.get("/create-order", (req, res) => res.send("creating order"))
export default router