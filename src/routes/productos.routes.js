import { Router } from "express";

const router = Router();

router.use("/prueba", (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
});

export default router;
