import { Router } from "express";
import misionController from "@/controllers/mision/mision.controller.js";

const router = Router();

router.get('/:lang',misionController);

export default router;