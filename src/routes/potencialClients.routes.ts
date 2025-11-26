import { Router } from "express";
import { validate } from "../middleware/validate";
import { potencialClientSchema } from "../schema/candidates.schema";
import PotencialClientsController from "../features/potencialClients/potencialClients.controller";
import { PotencialClientsService } from "../features/potencialClients/potencialClients.service";

const router = Router();

const service = new PotencialClientsService()
const potencialClientController = new PotencialClientsController(service);

router.post('/', validate(potencialClientSchema), potencialClientController.postPotencialClients.bind(potencialClientController));

export default router; 