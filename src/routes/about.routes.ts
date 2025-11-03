import { Router } from "express";
import AboutController from "../features/about/aboutController";

const router = Router();

router.get('/:lang', AboutController);

export default router;