import { Router } from "express";
import PotencialClientsController from "../features/potencialClients/potencialClients.controller";

const router = Router();

const potencialClientController = new PotencialClientsController();

router.post('/',potencialClientController.postPotencialClients.bind(potencialClientController));

export default router; 