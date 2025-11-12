import { CandidateDto } from "./candidates.dto";
import type { ICandidatesInsert, ICandidatesUpdate, Candidates } from "./candidates.types";

export interface ICandidates {

    postCandidates(payload : CandidateDto): Promise<any>
}