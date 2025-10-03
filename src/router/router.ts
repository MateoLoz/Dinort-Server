import { Router } from "express";
import heroRouter from "../routes/hero.routes";
import machinesRouter from "../routes/machines.routes";
const router = Router();

router.use('/hero',heroRouter);
router.use('/machines',machinesRouter);

export default router;