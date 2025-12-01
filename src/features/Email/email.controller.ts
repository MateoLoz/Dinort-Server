import { Resend } from "resend";
import { PotencialClient } from "../potencialClients/potencialClients.types";
import BusinnesConfirmationEmail from "./templates/ProposalConfirmationEmail";
import ProposalEmail from "./templates/ProposalEmail";

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

export const sendBusinnesProposal = async( userData : PotencialClient) => {
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
