import { Resend } from "resend";
import { PotencialClient } from "../potencialClients/potencialClients.types";

const resend = new Resend(process.env.RESEND_API_KEY);

 export const  sendBusinnesPropousal = async(userData : PotencialClient) => {
    console.log(userData);

      try {
        console.log('📬 sending proposal');
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['mateobinance1@gmail.com'],
            subject: `Propuesta de negocio por ${userData.full_name}  de ${userData.Organization}`,
            html: `
              <h2>Nueva Propuesta de Negocio</h2>
              <p><strong>Nombre:</strong> ${userData.full_name}</p>
              <p><strong>Organización:</strong> ${userData.Organization}</p>
              <p><strong>Email:</strong> ${userData.email}</p>
              <p><strong>Teléfono:</strong> ${userData.phone_number}</p>
              <p><strong>Descripción:</strong> ${userData.description}</p>
              <p><strong>¿Cómo se enteró?</strong> ${userData.how_heard}</p>
            `
        })
        return data;
      } catch (error) {
        throw error
      }

   }

export const sendConfirmationProposal = async( email : string , name : string) => {
   try {
    console.log('📬 sending confirmation proposal');
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mateobinance1@gmail.com'],
      subject: `Propuesta de negocio Recibida!`,
      html: `
        <h2>Confirmacion de porpuesta de Negocio</h2>
        <p>
         Hola ${name} recibimos tu propuesta de negocio, nuestro equipo se contactara en las proximas 24-48 hs,
         Saludos! Dinort
        </p>
      `
  })
  return data;
   } catch (err) {
    throw err;
   }
}
