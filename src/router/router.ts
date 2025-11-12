import { Router } from "express";

import heroRouter from "../routes/hero.routes";
import machinesRouter from "../routes/machines.routes";
import AboutRouter from '../routes/about.routes';
import misionRouter from '../routes/mision.routes';
import tagRouter from '../routes/tag.routes';
import candidateRouter from '../routes/candidates.routes';
import potencialClientRouter from '../routes/potencialClients.routes';

const router = Router();

router.use('/hero',heroRouter);
router.use('/machines',machinesRouter);
router.use('/about',AboutRouter);
router.use('/mision',misionRouter);
router.use('/tags',tagRouter);
router.use('/candidates',candidateRouter);
router.use('/potencialclients', potencialClientRouter);

export default router;