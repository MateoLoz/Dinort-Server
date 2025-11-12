import { z } from "zod";


export const CandidateSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  coverLetter: z.string().optional(),
  heardFrom: z.string().min(4)
})

