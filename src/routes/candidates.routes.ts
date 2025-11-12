import { Router } from "express";
import  multer from 'multer';
import { validate } from "../middleware/validate";
import { CandidateSchema } from "../schema/candidates.schema";

import CandidatesController from "../features/candidates/candidates.controller";
import CandidateService from "../features/candidates/candidates.service";

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

const service = new CandidateService()
const candidateController = new CandidatesController(service)

router.post('/', upload.single('cv'), validate(CandidateSchema), (req,res) => candidateController.postCandidates(req,res));

export default router;