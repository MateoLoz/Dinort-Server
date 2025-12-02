import { Request, Response } from "express";
import getAllMachinesService from "./machines.getmachines.service";

export async function MachineController (req: Request, res : Response) {
  const { languague } = req.params;
  const response = await getAllMachinesService(languague);


  if(!response) {
    res.status(404).json({
        message:'something went wrong!'
    })
  }
  res.set('cache-Control','public, max-age=86400')
  
  res.status(200).json({
    machines:response
  })
}