import type { Request, Response } from "express";
import { PotencialClientService } from "./potencialClients.service";

class PotencialClientsController {
    constructor(private readonly service : PotencialClientService){}

    async postPotencialClients (req: Request, res : Response) {

           const payload = req.body;
           const response = await this.service.postPotencialClient(payload);
           if(!response) return res.status(404).json({message:'something went wrong saving client in db!'});
           return res.status(201).json({message:'client saved in db succesfully!'});

    }
}

export default PotencialClientsController;