import { Router } from "express";
import heroRouter from "../routes/hero.routes.js";
import machinesRouter from "../routes/machines.routes.js";
import AboutRouter from '../routes/about.routes.js';
import misionRouter from '@/routes/mision.route.js';

const router = Router();

router.use('/hero',heroRouter);
router.use('/machines',machinesRouter);
router.use('/about',AboutRouter);
router.use('/mision',misionRouter);

export default router;