import { Router } from "express";
import AboutController from "@/controllers/about/aboutController";

const router = Router();

router.get('/:lang', AboutController);

export default router;