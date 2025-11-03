import { Router } from "express";
import heroRouter from "../routes/hero.routes";
import machinesRouter from "../routes/machines.routes";
import AboutRouter from '../routes/about.routes';
import misionRouter from '@/routes/mision.route';

const router = Router();

router.use('/hero',heroRouter);
router.use('/machines',machinesRouter);
router.use('/about',AboutRouter);
router.use('/mision',misionRouter);

export default router;