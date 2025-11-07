import { Router } from "express";

import heroRouter from "../routes/hero.routes";
import machinesRouter from "../routes/machines.routes";
import AboutRouter from '../routes/about.routes';
import misionRouter from '../routes/mision.routes';
import tagRouter from '../routes/tag.routes';

const router = Router();

router.use('/hero',heroRouter);
router.use('/machines',machinesRouter);
router.use('/about',AboutRouter);
router.use('/mision',misionRouter);
router.use('/tags',tagRouter);

export default router;