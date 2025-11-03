import { Router } from "express";
import AboutController from "@/controllers/about/aboutController.js";

const router = Router();

router.get('/:lang', AboutController);

export default router;