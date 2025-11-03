import { Router } from "express";
import { MachineController } from "#/controllers/machines/machines.controller";

const machinesRouter = Router();

machinesRouter.get('/:languague', MachineController);


export default machinesRouter;