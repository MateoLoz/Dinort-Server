import { Router } from "express";

import TagController from "../features/tags/tag.controller";

const router = Router();

router.get('/:lang', TagController);

export default router;