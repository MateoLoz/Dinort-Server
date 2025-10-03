import { Router } from "express";
import { heroGetHeroController } from "../hero/hero.controller";

const heroRouter = Router();

heroRouter.get('/', heroGetHeroController);


export default heroRouter;