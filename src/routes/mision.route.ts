import { Router } from "express";
import misionController from "#/controllers/mision/mision.controller";

const router = Router();

router.get('/:lang',misionController);

export default router;