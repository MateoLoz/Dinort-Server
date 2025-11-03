import { Router } from "express";
import { MachineController } from "@/controllers/machines/machines.controller.js";

const machinesRouter = Router();

machinesRouter.get('/:languague', MachineController);


export default machinesRouter;