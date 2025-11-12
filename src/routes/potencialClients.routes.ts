import { Router } from "express";

import PotencialClientsController from "../features/potencialClients/potencialClients.controller";
import { PotencialClientService } from "../features/potencialClients/potencialClients.service";

const router = Router();

const potencialClientService = new PotencialClientService();
const potencialClientController = new PotencialClientsController(potencialClientService);

router.post('/', (req,res)=> potencialClientController.postPotencialClients(req,res) );

export default router;