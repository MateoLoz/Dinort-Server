import type { Request, Response } from "express";
import { PotencialClientsService } from "./potencialClients.service";
import { eventBus } from "../../lib/emmiter";

class PotencialClientsController {
    constructor(private readonly service: PotencialClientsService){}

    async postPotencialClients (req: Request, res : Response) {

           const payload = req.body; 
           const response = await this.service.postPotencialClient(payload);
           if(!response) return res.status(500).json({message:'something went wrong saving client in db!'});
        eventBus.emit('sendProposal',response);
           return res.status(201).json({message:'client saved in db succesfully!'});

    }
}

export default PotencialClientsController;