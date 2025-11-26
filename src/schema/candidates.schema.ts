import { z } from "zod";


const heardSources = z.enum([
  "LinkedIn",
  "Instagram",
  "WhatsApp",
  "Chat-Gpt",
  "Web",
  "Otro",
])

export const CandidateSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.email(),
  coverLetter: z.string().optional(),
  heardFrom: heardSources
})

export const potencialClientSchema = z.object({
  firstName: z.string().min(2).max(60),
  lastName: z.string().min(2).max(60),
  email: z.email(),
  phoneNumber: z.string().min(12).max(15),
  description: z.string().min(5).max(300),
  howHeard: heardSources,
  Organization: z.string().min(2)
})

