import { Router } from "express";
import TagController from "../features/Tags/Tag.controller";

const router = Router();

router.get('/:lang', TagController);

export default router;