import { eventBus } from "../../lib/emmiter";
import { sendBusinnesPropousal, sendConfirmationProposal } from "./email.controller";

eventBus.on("sendProposal", async (data) => {
  await sendBusinnesPropousal(data);
  await sendConfirmationProposal(data.email, data.full_name);
  console.log("📩 Mail enviado después de que el controller terminó.");
});