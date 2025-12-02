import { Resend } from "resend";
import type { PotencialClient } from "../potencialClients/potencialClients.types";
import type { Candidates } from "../candidates/candidates.types";

import BusinnesConfirmationEmail from "./templates/ProposalConfirmationEmail";
import ProposalEmail from "./templates/ProposalEmail";
import ResumeEmail from "./templates/ResumeEmail";
import ResumeEmailConfirmation from "./templates/ResumeEmailConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

 export const sendBusinnesPropousalConfirmation = async(userData : PotencialClient) => {

      try {
        console.log('📬 sending proposal');
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['mateobinance1@gmail.com'],
            subject: `Propuesta de negocio por ${userData.full_name}  de ${userData.Organization}`,
            react: BusinnesConfirmationEmail({previewText:"Propuesta de negocio recibida!", authorName: userData.full_name, reviewText: userData.description }) ,
        })
        return data;
      } catch (error) {
        throw error
      }

   }

export const sendBusinnesProposal = async ( userData : PotencialClient) => {
   try {
    console.log('📬 sending confirmation proposal');
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mateobinance1@gmail.com'],
      subject: `Nueva Propuesta de negocio Recibida!`,
      react: ProposalEmail({authorName: userData.full_name, authorOrganization: userData.Organization, message: userData.description, howHeard: userData.how_heard, phoneNumber: userData.phone_number }) ,
  })
  return data;
   } catch (err) {
    throw err;
   }
}

export const sendResumeEmail = async (userData : Candidates) => {
 try {
  console.log('📤 sending resume email');
  console.log(userData);
  const data = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['mateobinance1@gmail.com'],
    subject: `Nuevo Curriculum recibido!`,
    react: ResumeEmail({authorName: userData.full_name, email: userData.email, coverLetter: userData.cover_letter, howHeard: userData.heard_from, Curriculum: userData.cv }) ,
})
return data;
 } catch (err) {
  console.log('📤 error sending email resume!',err);
  throw err;
 }
}

export const sendResumeEmailConfirmation = async ( userData : Candidates ) => {
  try {
    console.log('📤 sending resume email');
    console.log(userData);
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mateobinance1@gmail.com'],
      subject: `Nuevo Curriculum recibido!`,
      react: ResumeEmailConfirmation({ authorName: userData.full_name }) ,
  })
  return data;
   } catch (err) {
    console.log('📤 error sending email resume!',err);
    throw err;
   }
}