import { Resend } from "resend";
import type { PotencialClient } from "../potencialClients/potencialClients.types";
import type { Candidates } from "../candidates/candidates.types";

import BusinnesConfirmationEmail from "./templates/ProposalConfirmationEmail";
import ProposalEmail from "./templates/ProposalEmail";
import ResumeEmail from "./templates/ResumeEmail";
import ResumeEmailConfirmation from "./templates/ResumeEmailConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBusinnesPropousalConfirmation = async (userData: PotencialClient) => {

  try {
    console.log('📬 Enviando confirmacion de propuesta...');
    const data = await resend.emails.send({
      from: `${process.env.SERVER_NO_REPLY_EMAIL}`,
      to: [`${userData.email}`],
      subject: `Propuesta de negocio recibida!`,
      react: BusinnesConfirmationEmail({ previewText: "Propuesta de negocio recibida!", authorName: userData.full_name, reviewText: userData.description }),
    })
    console.log('🟢 Confirmacion de propuesta enviada!')
    return data;
  } catch (error) {
    throw error
  }

}

export const sendBusinnesProposal = async (userData: PotencialClient) => {
  try {
    console.log('📬 Enviando propuesta...');
    const data = await resend.emails.send({
      from: `${process.env.SERVER_NO_REPLY_EMAIL}`,
      to: [`${process.env.SERVER_EMAIL}`],
      subject: `Nueva Propuesta de negocio, ${userData.full_name} de ${userData.Organization}`,
      react: ProposalEmail({ authorName: userData.full_name, authorOrganization: userData.Organization, message: userData.description, howHeard: userData.how_heard, phoneNumber: userData.phone_number, email: userData.email }),
    })
    console.log('🟢 propuesta enviada!')
    return data;
  } catch (err) {
    throw err;
  }
}

export const sendResumeEmail = async (userData: Candidates) => {
  try {
    console.log('📤 Enviando curriculum...');
    const data = await resend.emails.send({
      from: `${process.env.SERVER_NO_REPLY_EMAIL}`,
      to: [`${process.env.SERVER_EMAIL}`],
      subject: `Nuevo Curriculum recibido!`,
      react: ResumeEmail({ authorName: userData.full_name, email: userData.email, coverLetter: userData.cover_letter, howHeard: userData.heard_from, Curriculum: userData.cv }),
    })
    console.log('🟢 curriculum enviado!')
    return data;
  } catch (err) {
    console.log('📤 error sending email resume!', err);
    throw err;
  }
}

export const sendResumeEmailConfirmation = async (userData: Candidates) => {
  try {
    console.log('📤 Enviando confirmacion de curriculum...');
    const data = await resend.emails.send({
      from: `${process.env.SERVER_NO_REPLY_EMAIL}`,
      to: [`${userData.email}`],
      subject: `Curriculum recibido!`,
      react: ResumeEmailConfirmation({ authorName: userData.full_name }),
    })
    console.log('🟢 confirmacion de curriculum enviado!')
    return data;
  } catch (err) {
    console.log('📤 error sending email resume!', err);
    throw err;
  }
}