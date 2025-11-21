import type { Request, Response } from "express";
import CandidateService from "./candidates.service";

class CandidatesController {
    constructor (private readonly candidateservice: CandidateService){}

    async postCandidates (req: Request, res : Response) {
        const payload = req.body;
        const cv = req.file;

          if(!cv) return res.status(400).json({message: 'error al subir el archivo!'});

         const file = await this.candidateservice.postCurriculumOnBucket(cv.buffer, payload.firstName, payload.lastName, cv.mimetype);

         if(file instanceof Error) return res.status(500).json({message:'Error al subir el archivo al servidor!'});

         const fileUrl = await this.candidateservice.getSignedUrlOfCurriculum(file.path);
        
        payload.Curriculum = fileUrl?.publicUrl;

        const response = await this.candidateservice.postCandidates(payload);

        if(!response) return res.status(500).json({message:'something went wrong!'});

        return res.status(201).json({message:'Curriculum guardado con exito!'});
    }
}



export default CandidatesController;